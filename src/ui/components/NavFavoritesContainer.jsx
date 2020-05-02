import React, { useState } from 'react';
import favIcon from '../images/fav-icon.png';
import FavoritesInbox from './FavoritesInbox';

const NavFavoritesContainer = (props) => {
    let [hiddenInbox, setHiddenInbox] = useState(false);

    const viewFavoritesInbox = (e) => {
        if (e.target.parentElement && e.target.parentElement.parentElement && e.target.parentElement.parentElement.className && e.target.parentElement.parentElement.className === 'nav-favorites') {
            setHiddenInbox(true);
        }
    }

    const hideFavoritesInbox = (e) => {
        setHiddenInbox(false);
    }

    return (
        <div onMouseEnter={viewFavoritesInbox} className="nav-favorites">
            <div className="inner-nav-fav">
                <img src={favIcon} alt=""/>
                {
                    props.favorites.length > 0 && <span>{props.favorites.length}</span>
                }
            </div>
            <FavoritesInbox 
                hiddenInbox={hiddenInbox}
                hideFavoritesInbox={hideFavoritesInbox}
            />
        </div>
    )
};

export default NavFavoritesContainer;