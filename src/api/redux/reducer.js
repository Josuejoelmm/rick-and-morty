import { actions } from './actions';

const intialState = {
    favorites: [],
    isFav: false,
    favId: []
}

const reducer = (state = intialState, action) => {
    switch(action.type) {
        case actions.LOGIN:
            return {...state, status: 'online'}
        case actions.FAVORITES_ADD:
            if(state.favorites.includes(action.character)) {
                let index = state.favorites.indexOf(action.character);
                let indexId = state.favId.indexOf(action.characterId);
                return {
                    ...state,
                    favorites: [
                        ...state.favorites.slice(0, index), 
                        ...state.favorites.slice(index + 1) 
                    ],
                    favId: [
                        ...state.favId.slice(0, indexId),
                        ...state.favId.slice(indexId + 1)
                    ]
                }
            }
            return {
                ...state, 
                favorites: [...state.favorites, action.character],
                favId: [...state.favId, action.characterId]
            }
        case actions.IS_FAV_CARD:
            return {...state, isFav: !state.isFav}
        default:
            return state;
    }
}

export default reducer;