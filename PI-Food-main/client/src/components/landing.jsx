import '../styles/landing.module.css'
import { Link } from 'react-router-dom'

function Landing() {
    return (
        <div>
            <p>Esta es la pagina de landing</p>
            <Link to='/home'> <li> HOME </li> </Link>
        </div>
    )
}
export default Landing