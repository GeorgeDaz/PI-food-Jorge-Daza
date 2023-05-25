import styles from '../styles/detail.module.css'
import Navbar from './navbar'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDetail, cleanData } from '../redux/actions';
import { useEffect } from 'react';


function Detail() {
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDetail(id));
        return () => {
            dispatch(cleanData()); // Limpia los datos al desmontar el componente
        };
    }, [dispatch, id])

    const myRecipe = useSelector((state) => state.detail)

    return (
        <div className={styles.detailPage}>
            <Navbar />
            {
                myRecipe.length > 0 ?
                    <div>
                        <img src={myRecipe[0].image} alt='No hay imagen' />
                        <h1>{myRecipe[0].name}</h1>
                        <h2 >Healthy Level {myRecipe[0].healthScore}</h2>
                        <h3> Diets: {myRecipe[0].dietss.map((diet) => diet.name ? diet.name + ' / ' : diet + ' / ')}</h3>
                        <p dangerouslySetInnerHTML={{ __html: myRecipe[0].summary }} />
                        <h3>Steps: {myRecipe[0].steps.map((step) => step.step ? step.number + "- " + step.step + ' / ' : step + ' / ')}</h3>

                    </div> : <h1 className={styles.h1}> LOADING... </h1>
            }
        </div>
    )
}
export default Detail