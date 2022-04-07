import { createContext, useContext, useReducer } from 'react';

const ACTION_TYPES = {
    SET_TASKS: "SET_TASKS",
    SIGN_IN: "SIGN_IN",
}

const defaultState = {
    isLoggedIn: false,
    user: null,
    tasks: [],
}

function reducer(state, action) {
    switch (action.type) {
        case ACTION_TYPES.SET_TASKS: {
            return {...state, tasks: action.tasks}
        }
        case ACTION_TYPES.SIGN_IN: {
            return {...state, isLoggedIn: !state.isLoggedIn}
        }
        default: {
            return state;
        }
    }
}

const Context = createContext(defaultState);

const useCleverContext = () => useContext(Context);

function ContextProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, defaultState);

    return <Context.Provider value={{ state, dispatch }}>
        {children}
    </Context.Provider>
}

export { ContextProvider, useCleverContext, ACTION_TYPES };