import React, { createContext, useReducer } from 'react';

const initialState = {
    searchResult: null,
    trendResult: null,
    repoResult: null
};
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'SET_TRENDING': {
                const { value } = action
                return { ...state, trendResult: value }
            }
            case 'SET_SEARCHING': {
                const { value } = action
                return { ...state, searchResult: value }
            }
            case 'SET_REPO': {
                const { value } = action
                return { ...state, repoResult: value }
            }
            default:
                throw new Error();
        };
    }, initialState);

    return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider }