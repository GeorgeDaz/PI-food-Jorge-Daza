import styles from '../styles/navbar.module.css';
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
        <div className={styles.navbarDiv}>
            <ul className={styles.navbarUl}>
                <Link className={styles.link} to='/home'> <li className={styles.navbarLi}> HOME </li> </Link>
                <Link className={styles.link} to='/create'> <li className={styles.navbarLi} > CREATE</li> </Link>
                <Link className={styles.link} to='/about'> <li className={styles.navbarLi}> ABOUT</li> </Link>
                <form className={styles.searchTool}>
                    <input className={styles.searchInput} type='text' placeholder='Search by name...' onChange={(e) => handleInputChange(e)} />
                    <button className={styles.searchButton} type='submit' onClick={(e) => handleSubmit(e)}>Search</button>
                </form>
            </ul>
        </div>
    )
}
export default Navbar