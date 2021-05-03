const reducer = (state, action) => {
    switch (action.type){
        case "ADD_BUDGET":
            return {...state, budget: parseInt(action.payload)}
        case "ADD_EXPENSE":
            const {title, amount, id} = action.payload
            return {...state, transaction: [...state.transaction, {id, title, amount}]}
        case "DELETE_EXPENSE":
            return {...state, transaction: state.transaction.filter(transaction => transaction.id !== action.payload)}
        default: 
            return state
    }
}

export default reducer