import styles from '../styles/landing.module.css'
import { Link } from 'react-router-dom'

function Landing() {
    return (
        <div className={styles.landingDiv}>
            <p className={styles.p}>¡Bienvenidos a mi proyecto de Foods!</p>
            <Link to='/home'> <button className={styles.button}>Entrar</button> </Link>
        </div>
    )
}
export default Landing