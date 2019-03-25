import { applyMiddleware, compose, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import rootReducer from './root-reducer';

export default function configureStore(initialState?: any) {

    // see https://github.com/zalmoxisus/redux-devtools-extension

    return createStore(
        rootReducer,
        initialState,
        composeWithDevTools(applyMiddleware(reduxImmutableStateInvariant()))
    );
}
