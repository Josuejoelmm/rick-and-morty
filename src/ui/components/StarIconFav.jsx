import React from 'react';
// import regStar from '../images/star-regular.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { addCharacterToFavorites } from '../../api/redux/actions';

const StarIconFav = (props) => {
    const addFavorites = () => {
        props.addCharacterToFavorites(props.character);
    }
    return (
        <div onClick={addFavorites} className="fav-star">
            {
                !props.favId.includes(props.character.id) ? 
                // <img src={regStar} alt="star"/>
                null :
                <FontAwesomeIcon icon={faStar} />
            }
        </div>
    );
}

export default connect(
    state => ({
        isFav: state.isFav,
        favId: state.favId
    }),
    {
        addCharacterToFavorites,
    }
    )(StarIconFav);