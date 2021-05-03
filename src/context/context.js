import React, { useContext, useReducer, useState } from 'react'
import reducer from "./reducer"
const AppContext = React.createContext()


const initialState = JSON.parse(localStorage.getItem("storedState")) ||{
    budget: 0,
    transaction: []
}

const ContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const [toBeEdited, setToBeEdited] = useState({})

    const submitBudget = amount => {
        dispatch({type: "ADD_BUDGET", payload: amount})
    }

    const submitExpense = obj => {
        dispatch({type: "ADD_EXPENSE", payload: obj})
    }

    const deleteExpense = id => {
        dispatch({type: "DELETE_EXPENSE", payload: id})
    }

    const editExpense = id => {
        setToBeEdited(state.transaction.filter(transaction => transaction.id === id)[0])
        deleteExpense(id)
    }

    localStorage.setItem("storedState", JSON.stringify(state))
    return (
        <AppContext.Provider value={{submitBudget, state, submitExpense, deleteExpense, editExpense, toBeEdited}}>{children}</AppContext.Provider>
    )
}

const useGlobalContext = () => useContext(AppContext)

export {ContextProvider, useGlobalContext}
