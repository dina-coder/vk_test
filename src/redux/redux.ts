import { CardReducer } from './reducers/cardReducer';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMidlleWare from 'redux-thunk';

let reducers = combineReducers({
    CardReducer: CardReducer
});

type reducersType = typeof reducers;

export type AppStateType = ReturnType<reducersType>;

export const store = createStore(reducers, applyMiddleware(thunkMidlleWare));