import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducer';
import thunk from 'redux-thunk';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import { createPromise } from 'redux-promise-middleware';

const middlewares = [
    thunk,
    reduxImmutableStateInvariant(),
    createPromise({
        promiseTypeSuffixes: ['START', 'SUCCESS', 'ERROR']
    })
]

const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middlewares)) );

export default store;