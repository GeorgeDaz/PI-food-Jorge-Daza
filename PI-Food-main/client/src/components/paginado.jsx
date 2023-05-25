import styles from '../styles/paginado.module.css'
import PropTypes from 'prop-types';

export default function Paginado({ recipesPerPage, allRecipes, paginado }) {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(allRecipes / recipesPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <nav>
            <ul className={styles.ul}>
                {pageNumbers && pageNumbers.map(number => (
                    <div className={styles.buttonpage} key={number}>
                        <li className={styles.li} key={number}>
                            <a className={styles.a} onClick={() => paginado(number)}> {number} </a>
                        </li>
                    </div>
                ))}
            </ul>
        </nav>
    )
}
Paginado.propTypes = {
    recipesPerPage: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]).isRequired,
    allRecipes: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]).isRequired,
    paginado: PropTypes.any.isRequired
};