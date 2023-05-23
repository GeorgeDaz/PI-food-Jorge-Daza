import styles from '../styles/card.module.css'
import PropTypes from 'prop-types';

function Card({ name, img, diets }) {
    return (
        <div className={styles.cardContainer}>
            <div className={styles.card}>
                <img src={img} alt='NOT FOUND IMG' width='200px' height='250px' />
                <h2 > {name} </h2>
                <p> {diets} </p>
            </div>
        </div>
    )
    // return (


    //     <div className={styles.cardContainer}>
    //         <h2>Recipe Name</h2>
    //         <p>Imagen</p>
    //         <p>Dietas</p>
    //     </div>
    // )
}

Card.propTypes = {
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    diets: PropTypes.array.isRequired,
};

export default Card