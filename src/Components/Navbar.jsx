import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar(props) {
    return (
        <div>

         <nav
            class="navbar navbar-expand-sm navbar-dark bg-primary"
         >
            <a class="navbar-brand" href="a">Navbar</a>
            <button
                class="navbar-toggler d-lg-none"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="acollapsibleNavId"
                aria-controls="collapsibleNavId"
                aria-expanded="false"
                aria-label="Toggle navigation"
            ></button>
            <div class="collapse navbar-collapse" id="collapsibleNavId">
                <ul class="navbar-nav me-auto mt-2 mt-lg-0">
                    <li class="nav-item">
                        <NavLink className={
                            ({isActive})=>{
                            return isActive ? "nav-link active" : "nav-link";
                            }
                        } 
                        to="/" aria-current="page">
                        Home <span class="visually-hidden">(current)</span></NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink className={
                            ({isActive})=>{
                            return isActive ? "nav-link active" : "nav-link";
                            }
                        }  to="/product-list">All Products</NavLink>
                    </li>
                    <li class="nav-item dropdown">
                        <a
                            class="nav-link dropdown-toggle"
                            href="a"
                            id="dropdownId"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                            >Dropdown</a
                        >
                        <div class="dropdown-menu" aria-labelledby="dropdownId">
                            <a class="dropdown-item" href="a">Action 1</a>
                            <a class="dropdown-item" href="a">Action 2</a>
                        </div>
                    </li>
                </ul>
                <form class="d-flex my-2 my-lg-0">
                    <input
                        class="form-control me-sm-2"
                        type="text"
                        placeholder="Search"
                    />
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
                        Search
                    </button>
                </form>
            </div>
         </nav>
            
        </div>
    );
}

export default Navbar;