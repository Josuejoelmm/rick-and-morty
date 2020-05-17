import React, { useState, useEffect } from 'react';
import favIcon from '../images/fav-icon.png';
import FavoritesInbox from './FavoritesInbox';

const NavFavoritesContainer = (props) => {
    let [hiddenInbox, setHiddenInbox] = useState(false);
    const globalTouchEvent = (e) => {
        if ( (e.target.tagName === 'UL' && e.target.parentElement && e.target.parentElement.className === 'fav-inbox-inner') || (e.target.tagName === 'LI' && e.target.parentElement.parentElement && e.target.parentElement.parentElement.className === 'fav-inbox-inner') || (e.target.tagName === 'DIV' && e.target.classList.contains('fav-inbox')) ) {
            // Click in to the inbox - Don't close it
        } else if (hiddenInbox) {
            // Already open - Don't close it
        } 
        else {
            // Click out of the inbox - Close the inbox
            setHiddenInbox(false);
        }
    }

    useEffect(() => {
        window.addEventListener('touchstart', globalTouchEvent); 

        return () => {
            window.removeEventListener('touchstart', globalTouchEvent);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const viewFavoritesInbox = (e) => {
        if (e.target.parentElement && e.target.parentElement.parentElement && e.target.parentElement.parentElement.className && e.target.parentElement.parentElement.className === 'nav-favorites') {
            setHiddenInbox(true);
        }
    };
    const hideFavoritesInbox = (e) => {
        setHiddenInbox(false);
    };
    const openFavoritesInbox = (e) => {
        setHiddenInbox(true);
    };
    
    return (
        <div onClick={openFavoritesInbox} onMouseEnter={viewFavoritesInbox} className="nav-favorites">
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