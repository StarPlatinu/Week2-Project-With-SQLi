import React, { useEffect, useState } from 'react'
import { completeTodo, deleteTodo, getAllTodos, inCompleteTodo ,searchTodos,getTodo } from '../service/TodoService'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faX } from '@fortawesome/free-solid-svg-icons'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const ListTodo = () => {

    const [todos, setTodos] = useState([])
    const [searchTerm, setSearchTerm] = useState('');
    const [searchId, setSearchId] = useState(''); 

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

    function handleSearchById() {
        if (!searchId) {
            listTodos(); // If no ID entered, list all todos
            return;
        }

        getTodo(searchId)
            .then((response) => {
                setTodos([response.data]); // Display the fetched todo
            })
            .catch(error => {
                console.error(error);
            });
    }

  return (
    <div className='container-fluit'>
        <h2 className='text-center mt-4'>Well Come To Todo</h2>
      
        <div className='m-5'>
        <button className='btn btn-primary mb-2' onClick={addNewTodo}><FontAwesomeIcon icon={faCirclePlus} />Add Todo</button>
        <div className='d-flex justify-content-center m-3'>
                <div className='col-md-6'></div>
                <input
                    className='form-control'
                    type='text'
                    placeholder='Search todo by ID'
                    value={searchId}
                    onChange={e => setSearchId(e.target.value)}
                />
                <button className='btn btn-primary ms-1' onClick={handleSearchById}>Search</button>
            </div>
            <div className='d-flex justify-content-center m-3'>
                <div className='col-md-6'></div>
            <input
                className='form-control'
                type='text'
                placeholder='Search todos by title'
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                />
                 <button className='btn btn-primary ms-1' onClick={handleSearch}><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
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
                                    <button className='btn btn-info m-1' onClick={() => updateTodo(todo.id)}><FontAwesomeIcon icon={faPenToSquare} /></button>
                                    <button className='btn btn-danger m-1' onClick={() => removeTodo(todo.id)} style={ { marginLeft: "10px" }} ><FontAwesomeIcon icon={faTrash} /></button>
                                    <button className='btn btn-success m-1' onClick={() => markCompleteTodo(todo.id)} style={ { marginLeft: "10px" }} ><FontAwesomeIcon icon={faCheck} /></button>
                                    <button className='btn btn-warning m-1' onClick={() => markInCompleteTodo(todo.id)} style={ { marginLeft: "10px" }} ><FontAwesomeIcon icon={faX} /></button>
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

export default ListTodo