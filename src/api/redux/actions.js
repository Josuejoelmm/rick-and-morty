export const actions = {
    LOGIN: 'LOGIN',
    FAVORITES_ADD: 'FAVORITES_ADD',
    IS_FAV_CARD: 'IS_FAV_CARD' 
}

export const logIn = () => {
    return {
        type: actions.LOGIN
    }
}

export const addCharacterToFavorites = (character) => {
    return {
        type: actions.FAVORITES_ADD,
        character,
        characterId: character.id
    }
}