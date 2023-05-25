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
        </div>
    )
}
export default About