import { SET_FETCHING, TActionTypes } from './../actions/cardActions';
type TInitialState = {
    isFetching: boolean
}
const initialState: TInitialState={
    isFetching: false
};

export const CardReducer = (state=initialState, action: TActionTypes) => {
    switch(action.type) {
        case SET_FETCHING: {
            const isFetching = action.isFetching;
            return {
                ...state,
                isFetching
            }
        }
    }
}