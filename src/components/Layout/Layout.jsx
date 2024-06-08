import { Route, Routes } from 'react-router-dom';

const Layout = (props) => {
    return (
        <div>
            <header>
                <h1>My Website</h1>
            </header>
            <nav>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                    <li>
                        <a href="/contact">Contact</a>
                    </li>
                </ul>
            </nav>
            <main>
                props.children
            </main>
        </div>
    
    )
}

export default Layout;