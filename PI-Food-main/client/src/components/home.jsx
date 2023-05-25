import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRecipes, filterDiet, orderbyName, orderByScore, getDiets } from '../redux/actions';
import styles from '../styles/home.module.css'
import Navbar from './navbar'
import Cards from './cards';
import Paginado from './paginado.jsx';

function Home() {
    const dispatch = useDispatch()
    const allRecipes = useSelector((state) => state.recipes)
    const diets = useSelector((state) => state.diets)

    const [orden, setOrden] = useState('')
    const [scored, setScored] = useState('')


    useEffect(() => {
        dispatch(getRecipes());
        dispatch(getDiets());
    }, [dispatch])

    function handleClick(e) {
        e.preventDefault();
        dispatch(getRecipes());
    }

    function handleFilterDiets(e) {
        dispatch(filterDiet(e.target.value))
        setCurrentPage(1);
    }

    function handleOrderName(e) {
        e.preventDefault();
        dispatch(orderbyName(e.target.value))
        setCurrentPage(1);
        setOrden(`Ordenado ${e.target.value}`)
    }

    function handleScoreOrder(e) {
        e.preventDefault();
        dispatch(orderByScore(e.target.value));
        setCurrentPage(1);
        setOrden(`Ordered ${e.target.value}`)
    }


    // paginadoo
    const [currentPage, setCurrentPage] = useState(1)
    const [recipesPerPage] = useState(9)
    const lastRecipeIndex = currentPage * recipesPerPage
    const firstRecipeIndex = lastRecipeIndex - recipesPerPage
    const currentRecipes = allRecipes.slice(firstRecipeIndex, lastRecipeIndex)

    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    }
    return (
        <div className={styles.home}>
            <h2 className={styles.titlePage}>Foods: Recipes & Diets</h2>
            <Navbar />
            <div className={styles.filters}>
                <h2>Filter by:</h2>
                <button className={styles.button} onClick={e => { handleClick(e) }}>
                    Refresh
                </button>

                <select onChange={e => handleScoreOrder(e)} className={styles.select}>
                    <option value='highest score'>Puntaje mayor</option>
                    <option value='lowest score'>Puntaje menor</option>
                </select>
                <select className={styles.select} onChange={(e) => handleOrderName(e)}>
                    <option value='asc'> (A-Z) </option>
                    <option value='dsc'> (Z-A) </option>
                </select>
                <select className={styles.select} onChange={(e) => handleFilterDiets(e)}>
                    <option value='All'> All </option>
                    {diets.map((diet) => (<option key={diet.name} name={`${diet.name}`}
                        value={`${diet.name}`}> {diet.name} </option>))}
                </select>

            </div>
            <Paginado recipesPerPage={recipesPerPage}
                allRecipes={allRecipes.length}
                paginado={paginado} />
            <div className={styles.cards}>
                <Cards allRecipes={currentRecipes} />
            </div>
        </div>
    )
}

export default Home