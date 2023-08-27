import React from 'react'
import { NavLink } from 'react-router-dom'
import { isUserLoggedIn, logout } from '../service/AuthService'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { faPoo } from '@fortawesome/free-solid-svg-icons'
const Header = () => {

    const isAuth = isUserLoggedIn();

    const navigator = useNavigate();

    function handleLogout(){
        logout();
        navigator('/login')
    }

  return (
    <div>
        <header>
            <nav className='navbar navbar-expand-md navbar-dark bg-primary'>
                <div className='ms-1'>
                    <a href='http://localhost:3000' className='navbar-brand'>
                        Todo Management Application
                    </a>
                </div>
                <div className='collapse navbar-collapse'>
                    <ul className='navbar-nav'>

                        {
                            isAuth &&                         
                            <li className='nav-item'>
                            <NavLink to="/todos" className="nav-link"><FontAwesomeIcon icon={faCoffee} /> Todo List</NavLink>                
                        </li>
                        }

                   {
                        isAuth &&    
                        <li className='nav-item'>
                        <NavLink to="/comments" className="nav-link"><FontAwesomeIcon icon={faUserGroup} /> Comment</NavLink>
                    </li>
                    }
                    
                   {
                        isAuth &&    
                        <li className='nav-item'>
                        <NavLink to="/eval" className="nav-link"><FontAwesomeIcon icon={faPoo} /> Eval</NavLink>
                    </li>
                    }

                    </ul>

                </div>
                <ul className='navbar-nav'>
                    {
                        !isAuth &&                         
                        <li className='nav-item'>
                        <NavLink to="/register" className="nav-link">Register</NavLink>
                    </li>
                    }

                    {
                        !isAuth &&    
                        <li className='nav-item'>
                        <NavLink to="/login" className="nav-link">Login</NavLink>
                    </li>
                    }           

                    {
                        isAuth &&    
                        <li className='nav-item'>
                        <div className="m-1 d-flex">
                        <NavLink to="/login" className="nav-link" onClick={handleLogout}>Logout</NavLink>
                        
                      <img src="https://picsum.photos/40" className="img-fluid page-header rounded-circle" alt="Responsive image" />
                        </div>
                    </li>
                    }
                    </ul>
            </nav>
        </header>
    </div>
  )
}

export default Header