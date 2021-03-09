import React from "react";
import { useLocation } from "react-router-dom";


function NavBar() {
    const location = useLocation();
    console.log(location)

    return (
        <nav className="navbar navbar-expand-md navbar-light bg-light">
            <a className="navbar-brand" id="top-name" href="/">Jimi Simon</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault"
                aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                <ul className="navbar-nav mr-right ml-auto">
                    <li className="nav-item">
                        <a className={location.pathname === "/contact" ? "nav-link active" : "nav-link"} href="./contact">Contact</a>
                    </li>
                    <li className="nav-item">
                        <a className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"} href="./portfolio">Portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a className={location.pathname === "/" ? "nav-link active" : "nav-link"} href="/">About</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;