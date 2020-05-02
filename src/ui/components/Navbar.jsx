import React, { useContext } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch';
import './styles/Navbar.scss';
import logo from '../images/logo-img.png';
import GlobalState from '../../api/GlobalState';
import NavFavoritesContainer from './NavFavoritesContainer';

const Navbar = (props) => {
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
                <NavFavoritesContainer favorites={props.favorites} />
            </nav>
        </header>
    );
}

export default connect(state => {
    return {
        favorites: state.favorites
    }
}, null)(Navbar);