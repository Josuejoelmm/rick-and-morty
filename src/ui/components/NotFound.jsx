import React from 'react';
import './styles/NotFound.scss';
import { Link } from 'react-router-dom';
// import snowball from '../images/snowball.png';

const NotFound = () => (
    <div className="main-404-container">
        <div className="inner-wrapper">
            <div className="not-found-text">
                <h3 className="text-center">404:</h3>
                <h2 className="text-center">Opps! Page Not Found... come&nbsp;back&nbsp;Home</h2>
            </div>
            <div className="image-404-container">
                <figure>
                    {/* <img src={snowball} alt="not found" /> */}
                </figure>
            </div>
            <Link to="/" className="back-home-button">Back to Home</Link>
        </div>
    </div>
);

export default NotFound;