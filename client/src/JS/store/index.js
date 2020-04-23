import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import combineReducer from '../reducers/index'
const middleware = [thunk]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState ={}

const Store = createStore(
    combineReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middleware))
)

export default Store