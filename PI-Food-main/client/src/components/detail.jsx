import styles from '../styles/detail.module.css'
import Navbar from './navbar'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDetail } from '../redux/actions';
import { useEffect } from 'react';


function Detail() {
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDetail(id))
    }, [dispatch])

    const myRecipe = useSelector((state) => state.detail)

    return (
        <div>
            <Navbar />
            {
                myRecipe.length > 0 ?
                    <div>
                        <img src={myRecipe[0].image} alt='No hay imagen' />
                        <h1>{myRecipe[0].name}</h1>
                        <h2 >Healthy Level {myRecipe[0].healthScore}</h2>
                        <h3> Diets: {myRecipe[0].dietss}</h3>
                        {/* <p> */}
                        <p dangerouslySetInnerHTML={{ __html: myRecipe[0].summary }} />
                        {/* {myRecipe[0]
                                ? myRecipe[0].summary.replace(/<[^>]*>?/g)
                                : "No summary available"} */}
                        {/* </p> */}

                    </div> : <h1 className={styles.h1}> LOADING... </h1>
            }
        </div>
    )
}
export default Detail