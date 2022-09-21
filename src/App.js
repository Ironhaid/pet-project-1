import React, { useState } from 'react';
import ClassCounter from './Components/ClassCounter';
import Counter from './Components/Counter';
import PostItem from './Components/PostItem';
import PostList from './Components/PostList';
import MyButton from './Components/UI/button/MyButton';
import MyInput from './Components/UI/input/MyInput'
import './Styles/App.css';

function App() {

  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript 1', body: 'description' },
    { id: 2, title: 'Javascript 2', body: 'description' },
    { id: 3, title: 'Javascript 3', body: 'description' },
    { id: 4, title: 'Javascript 4', body: 'description' },
    { id: 5, title: 'Javascript 5', body: 'description' },
  ])

  const [title, setTitle] = useState('')
  const addNewPost = (e) => {
    e.preventDefault();
    console.log(title);
  }

  return (
    <div className="App">
      <form>
        <MyInput
          value={title}
          onChange={e => setTitle(e.target.value)}
          type="text" 
          placeholder='Название поста' />
        <MyInput type="text" placeholder='Описание поста' />
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
      <PostList posts={posts} title="Посты про JS" />
    </div>
  );
}

export default App;
