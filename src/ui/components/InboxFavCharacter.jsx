import React from 'react';
import { withRouter } from 'react-router-dom';

const InboxFavCharacter = (props) => {
    const styles = {cursor: 'pointer'}
    
    const goToDetailsCharacter = () => {
        if (props.location.pathname !== `/characters/${props.favCharacter.id}` && props.location.pathname === '/') {
            props.history.push(`/characters/${props.favCharacter.id}`);
        } else if (props.location.pathname !== `/characters/${props.favCharacter.id}`) {
            props.history.push(`/characters/${props.favCharacter.id}`);
        }
    }
    return(<li onClick={goToDetailsCharacter} style={styles}>{props.favCharacter.name}</li>);
};

export default withRouter(InboxFavCharacter);