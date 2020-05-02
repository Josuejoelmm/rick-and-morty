import React from 'react';
import { connect } from 'react-redux';
import './styles/FavoritesInbox.scss';
import InboxFavCharacter from './InboxFavCharacter';

const FavoritesInbox = (props) => {
        
    return(
        <div onMouseLeave={props.hideFavoritesInbox} className={`fav-inbox ${!props.hiddenInbox ? "hidden" : ""}`} aria-hidden="true">
            <div className="fav-inbox-inner">
                <ul>
                    {
                        (props.favorites.length > 0 &&
                        props.favorites.map(favCharacter => (
                           <InboxFavCharacter 
                                key={favCharacter.id}
                                favCharacter={favCharacter}
                           />
                        )) ) || `You don't have any Favourite Character yet...`
                    }
                </ul>
            </div>
            <div className="pointer-box"></div>
        </div>
    );
};

export default connect(state => {
    return {
        favorites: state.favorites
    }
})(FavoritesInbox);