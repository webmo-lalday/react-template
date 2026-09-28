// src/static/footer.jsx
import { Link } from "react-router-dom"
import logo from '../assets/monogram-light-violet.png'

export default function Footer() {
    return (
        <footer>
            <img alt='Logo' src={logo} />
            <section>
                <p>Lucia Alday &copy; 2026</p>
                <hr></hr>
                <div className="column">
                    <Link to='/'>Home</Link>
                    <Link to='/style'>Stylesheet</Link>
                    <Link to='/404'>Error</Link>
                </div>
            </section>
            <div>{/** empty div to presserve spacing, if there exists a second logo place it here */}</div>
        </footer>
    )
}