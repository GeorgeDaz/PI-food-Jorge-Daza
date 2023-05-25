import styles from '../styles/about.module.css'
import { Link } from 'react-router-dom'

function About() {
    return (
        <div>
            <Link to='/home'> <li className={styles.backHome}> VOLVER </li> </Link>
            <p className={styles.head}>This is an Individual Project made by Jorge Daza </p>
            <p className={styles.head}>for SoyHenry bootcamp! @2023</p>
            <p>En el vasto reino de la nutrición,</p>
            <p>se oculta un poder de bendición.</p>
            <p>Con cada bocado sabio y consciente,</p>
            <p>nuestra salud se hace floreciente.</p>

            <p>Frutas frescas y verduras vibrantes,</p>
            <p>nutren y llenan de fuerzas radiantes.</p>
            <p>Granos enteros y proteínas puras,</p>
            <p>fortalecen el cuerpo, son dulces curas.</p>
        </div>
    )
}
export default About