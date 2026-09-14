import { Link } from "react-router-dom"

export default function Nav() {
    return (
        <nav>
            <div className="icon">&#9776;</div>
            <div className="nav-links">
                <Link className="nav-link" to='/'>Home</Link>
                <Link className="nav-link" to='/'>Home</Link>
                <div className="nav-link dropdown">Content
                    <Link className="nav-link dropdown-content" to='/'>Nested</Link>
                    <Link className="nav-link dropdown-content" to='/'>Nested</Link>
                </div>
                <Link className="nav-link" to='/'>Home</Link>
                <Link className="nav-link" to='/'>Home</Link>
                <Link className="nav-link" to='/'>Home</Link>
            </div>
        </nav>
    )
}