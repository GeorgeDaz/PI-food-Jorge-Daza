import styles from '../styles/card.module.css'
import PropTypes from 'prop-types';

function Card({ name, img, diets }) {
    return (
        <div className={styles.cardContainer}>
            <div className={styles.card}>
                <img className={styles.image} src={img} alt='NOT FOUND IMG' width='200px' height='250px' />
                <h2 > {name} </h2>
                <p> {diets} </p>
            </div>
        </div>
    )
}

Card.propTypes = {
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    diets: PropTypes.array.isRequired,
};

export default Card