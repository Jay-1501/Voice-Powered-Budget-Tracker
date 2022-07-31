import React,{useReducer, CreateContext, createContext} from "react";

const initialState = [];

export const expenseTrackerContext = createContext(initialState);

export const Provider = ({children}) => {
    return (
        <expenseTrackerContext.Provider value={{appName : "Expense Tracker"}} >
            {children}
        </expenseTrackerContext.Provider>
    );
}