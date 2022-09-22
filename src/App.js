import React, { useState, useRef } from 'react';
import ClassCounter from './Components/ClassCounter';
import Counter from './Components/Counter';
import PostForm from './Components/PostForm';
import PostItem from './Components/PostItem';
import PostList from './Components/PostList';
import MyButton from './Components/UI/button/MyButton';
import MyInput from './Components/UI/input/MyInput'
import MySelect from './Components/UI/Select/MySelect';
import './Styles/App.css';

function App() {

  const [posts, setPosts] = useState([
    { id: 1, title: 'aaaaaaaa', body: 'cccc' },
    { id: 2, title: 'cccc', body: 'aaa' },
    { id: 3, title: 'bbbb', body: 'bbbb' },
  ])

  const [selectedSort, setSelectedSort] = useState('')

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort);
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
  }

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: '15px 0' }} />
      <div>
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue="Сортировка"
          options={[
            { value: 'title', name: 'По названию' },
            { value: 'body', name: 'По описанию' }
          ]}
        />
      </div>
      {posts.length !== 0
        ?
        <PostList remove={removePost} posts={posts} title="Посты про JS" />
        :
        <h1 style={{ textAlign: 'center' }}>Посты не найдены!</h1>
      }
    </div>
  );
}

export default App;
