export const SET_FETCHING = 'SET_FETCHING';

type TSetFetching = {
    type: typeof SET_FETCHING,
    isFetching: boolean;
};

export const setFetching = (isFetching: boolean): TSetFetching => ({
    type: SET_FETCHING,
    isFetching
});

export type TActionTypes = TSetFetching;