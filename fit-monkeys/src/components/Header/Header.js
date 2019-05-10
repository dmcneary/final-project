import React from "react";
import "./Header.css";

const Header = () => (
    <nav className="header navbar navbar-expand-lg justify-content-between">
        <a className="navbar-brand" href="/">
            Fit Monkeys
    </a>
        <a className="nav-log" href="/">
            Log In
    </a>

    </nav>
);
// const Header = () => (
//     <nav className="navbar navbar-light bg-light justify-content-between">
//         <a className="navbar-brand">Navbar</a>
//         <form className="form-inline">
//             <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
//             <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//         </form>
//     </nav>
// );

export default Header;

