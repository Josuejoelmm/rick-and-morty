import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch';
import './styles/Navbar.scss';
import logo from '../images/logo-img.png';

const Navbar = () => (
    <header className="header-container">
        <nav>
            <div className="logo-nav">
                <div>
                    <img src={logo} alt="" />
                </div>
            </div>
            <div className="separator"></div>
            <div className="nav-search">
                <div>
                    <div className="search-icon">
                        <FontAwesomeIcon icon={faSearch} />
                    </div>
                    <div className="input-container">
                        <input type="text" placeholder="Search" />
                    </div>
                </div>
            </div>
            <div className="separator"></div>
        </nav>
    </header>
);

export default Navbar;