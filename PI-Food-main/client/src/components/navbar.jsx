import '../styles/navbar.module.css';
import { Link } from 'react-router-dom';
import { getRecipesNames } from "../redux/actions"
import { useState } from 'react';
import { useDispatch } from 'react-redux'


function Navbar() {

    const dispatch = useDispatch()
    const [name, setName] = useState('')

    function handleInputChange(e) {
        e.preventDefault()
        setName(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(getRecipesNames(name))
        setName('')
    }

    return (
        <div>
            <ul>
                <Link to='/home'> <li> HOME </li> </Link>
                <Link to='/create'> <li> CREATE</li> </Link>
                <Link to='/about'> <li> ABOUT</li> </Link>
                <form>
                    <input type='text' placeholder='Search by name...' onChange={(e) => handleInputChange(e)} />
                    <button type='submit' onClick={(e) => handleSubmit(e)}>Search</button>
                </form>
            </ul>
        </div>
    )
}
export default Navbar