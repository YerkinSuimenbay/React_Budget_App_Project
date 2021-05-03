import React from "react"
import BudgetForm from "./components/BudgetForm"
import ExpenseForm from "./components/ExpenseForm"
import Header from "./components/Header"
import Items from "./components/Items"
import Transactions from "./components/Transactions"
const App = () => {
    return (
        <div className="App">
            <Header/>
            <div className="grid">
                <BudgetForm/>
                <Items/>
                <ExpenseForm />
                <Transactions />
            </div>
        </div>
    )
}

export default App