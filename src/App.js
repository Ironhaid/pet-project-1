import React, { useMemo, useState, useRef } from 'react';
import ClassCounter from './Components/ClassCounter';
import Counter from './Components/Counter';
import PostFilter from './Components/PostFilter';
import PostForm from './Components/PostForm';
import PostItem from './Components/PostItem';
import PostList from './Components/PostList';
import MyButton from './Components/UI/button/MyButton';
import MyInput from './Components/UI/input/MyInput'
import MyModal from './Components/UI/MyModal/MyModal';
import MySelect from './Components/UI/Select/MySelect';
import './Styles/App.css';

function App() {

  const [posts, setPosts] = useState([
    { id: 1, title: 'aaaaaaaa', body: 'cccc' },
    { id: 2, title: 'cccc', body: 'aaa' },
    { id: 3, title: 'bbbb', body: 'bbbb' },
  ])

  const [filter, setFilter] = useState({ sort: '', query: '' })

  const [modal, setModal] = useState(false);

  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
    }
    return posts;
  }, [filter.sort, posts])

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
  }, [filter.query, sortedPosts])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <MyButton style={{marginTop: '30px'}} onClick={() => setModal(true)}>
        Создать пользователя
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <hr style={{ margin: '15px 0' }} />
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Посты про JS" />
    </div>
  );
}

export default App;
