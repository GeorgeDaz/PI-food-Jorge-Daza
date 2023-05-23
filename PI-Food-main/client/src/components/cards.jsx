import styles from '../styles/cards.module.css'
import Card from './card'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Cards({ allRecipes }) {
    const recipesList = allRecipes;
    console.log(recipesList)

    return (
        <div className={styles.cardsContainer}>

            {recipesList?.map((recipe) => {
                return (
                    <div key={recipe.id}>
                        <Link className={styles.Link} to={'/detail/' + recipe.id} key={recipe.id}>
                            <Card name={recipe.name} img={recipe.image} diets={recipe.dietss.map((diet) => diet.name ? diet.name + '/' : diet + '/')} />
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}
Cards.propTypes = {
    allRecipes: PropTypes.array.isRequired,
};

export default Cards