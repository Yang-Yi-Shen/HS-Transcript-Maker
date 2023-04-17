import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header>
            <h2 id="logo">
                <Link to="/">Transcript Templates</Link>
            </h2>
            <nav id='navbar'>
                <h3>
                    <Link to="/about">About</Link>
                </h3>
                <h3>
                    <Link to="/create">Create</Link>
                </h3>
            </nav>
        </header>
    )
}