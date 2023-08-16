import React, { useEffect, useState } from 'react'
import { completeTodo, deleteTodo, getAllTodos, inCompleteTodo ,searchTodos } from '../services/TodoService'
import { useNavigate } from 'react-router-dom'

const ListTodoComponent = () => {

    const [todos, setTodos] = useState([])
    const [searchTerm, setSearchTerm] = useState('');

    const navigate = useNavigate()


    useEffect(() => {
        listTodos();
    }, [])
    
    function listTodos(){
        getAllTodos().then((response) => {
            setTodos(response.data);
        }).catch(error => {
            console.error(error);
        })
    }

    function addNewTodo(){
        navigate('/add-todo')

    }

    function updateTodo(id){
        console.log(id)
        navigate(`/update-todo/${id}`)
    }
    
    function removeTodo(id){
        deleteTodo(id).then((response) => {
            listTodos();
        }).catch(error => {
            console.error(error)
        })
    }

    function markCompleteTodo(id){
        completeTodo(id).then((response) => {
            listTodos()
        }).catch(error => {
            console.error(error)
        })
    }

    function markInCompleteTodo(id){
        inCompleteTodo(id).then((response) => {
            listTodos();
        }).catch(error => {
            console.error(error)
        })
    }

    function handleSearch() {
        if (searchTerm.trim() === '') {
            listTodos();
            return;
        }

        searchTodos(searchTerm)
            .then((response) => {
                setTodos(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }

  return (
    <div className='container'>
        <h2 className='text-center'>List of Todos</h2>
        <button className='btn btn-primary mb-2' onClick={addNewTodo}>Add Todo</button>
        <div>
            <div className='d-flex justify-content-center m-3'>
                <div className='col-md-6'></div>
            <input
                className='form-control'
                type='text'
                placeholder='Search todos...'
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                />
                 <button className='btn btn-primary ms-1' onClick={handleSearch}>Search</button>
            </div>
            <table className='table table-bordered table-striped'>
                <thead>
                    <tr>
                        <th>Todo Title</th>
                        <th>Todo Description</th>
                        <th>Todo Completed</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todos.map(todo => 
                            <tr key={todo.id}>
                                <td>{todo.title}</td>
                                <td>{todo.description}</td>
                                <td>{todo.completed ? 'YES': 'NO'}</td>
                                <td>
                                    <button className='btn btn-info' onClick={() => updateTodo(todo.id)}>Update</button>
                                    <button className='btn btn-danger' onClick={() => removeTodo(todo.id)} style={ { marginLeft: "10px" }} >Delete</button>
                                    <button className='btn btn-success' onClick={() => markCompleteTodo(todo.id)} style={ { marginLeft: "10px" }} >Complete</button>
                                    <button className='btn btn-info' onClick={() => markInCompleteTodo(todo.id)} style={ { marginLeft: "10px" }} >In Complete</button>
                                </td>
                            </tr>
                        )
                    }

                </tbody>
            </table>
        </div>

    </div>
  )
}

export default ListTodoComponent