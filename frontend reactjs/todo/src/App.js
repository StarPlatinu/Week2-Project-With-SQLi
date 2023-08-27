import { useState } from 'react'
import './App.css'
import ListTodo from './component/ListTodo'
import Header from './component/Header'
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import TodoComponent from './component/ToDoComponent'
import Register from './component/Register'
import Login from './component/Login'
import { isUserLoggedIn } from './service/AuthService'
import CommentList from './component/CommentList'
import Eval from './component/eval'
function App() {
  function AuthenticatedRoute({children}){

    const isAuth = isUserLoggedIn();

    if(isAuth) {
      return children;
    }

    return <Navigate to="/" />

  }

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/todos' element = {<ListTodo />}></Route>
        <Route path="/update-todo/:id" element={<TodoComponent />} />
        <Route path="/add-todo" element={<TodoComponent />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/comments" element={<CommentList />} />
        <Route path="/eval" element={<Eval />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
