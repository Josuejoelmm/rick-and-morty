import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch';
import './styles/Navbar.scss';
import logo from '../images/logo-img.png';
import GlobalState from '../../api/GlobalState';

const Navbar = () => {
    const charactersState = useContext(GlobalState);
    const { query, setQuery } = charactersState;

    return (
        <header className="header-container">
            <nav>
                <Link to="/">
                    <div className="logo-nav">
                        <div>
                            <img src={logo} alt="" />
                        </div>
                    </div>
                </Link>
                <div className="separator"></div>
                <div className="nav-search">
                    <div>
                        <div className="search-icon">
                            <FontAwesomeIcon icon={faSearch} />
                        </div>
                        <div className="input-container">
                            <input type="text" placeholder="Search" 
                                value={query}
                                onChange={(e) => {
                                    setQuery(e.target.value);
                                }}
                            />
                        </div>
                    </div>
                </div>
                <div className="separator"></div>
            </nav>
        </header>
    );
}

export default Navbar;