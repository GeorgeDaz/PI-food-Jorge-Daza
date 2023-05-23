import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getRecipes } from '../redux/actions';
import styles from '../styles/home.module.css'
import Navbar from './navbar'
import Cards from './cards';
import Paginado from './paginado.jsx';

function Home() {
    const dispatch = useDispatch()
    const allRecipes = useSelector((state) => state.recipes)

    useEffect(() => {
        dispatch(getRecipes());
    }, [dispatch])

    return (
        <div className={styles.home}>
            <h2>Foods: Recipes & Diets</h2>
            <Navbar />
            <Paginado />
            <div>
                <Cards allRecipes={allRecipes} />
            </div>
        </div>
    )
}

export default Home