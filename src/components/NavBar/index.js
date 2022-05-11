import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import './style.css';

const NavBar = () => {

    const navigate = useNavigate();
    function handleBack() {
        navigate(-1);
    }

    return (
        <>
            <nav>
                <NavLink className="home-link" to="/">Home</NavLink>
                <NavLink activeclassname="active" to="/about">About</NavLink>
                <NavLink activeclassname="active" to="/search">Search</NavLink>
                <button onClick={handleBack} >Back</button>
            </nav>
            <Outlet />
        </>
    );
}

export default NavBar;
