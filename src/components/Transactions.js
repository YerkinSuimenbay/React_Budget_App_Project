import React from 'react'
import { useGlobalContext } from '../context/context'
import Transaction from './Transaction'

const Transactions = () => {
    const {state} = useGlobalContext();

    return (
        <section className="transactions">
            <div className="transaction-grid">
                <p>Expense title</p>
                <p>Expense value</p>
            </div>
            {state.transaction.map(transaction => {
                return <Transaction key={transaction.id} {...transaction}/>
            })}
        </section>
    )
}

export default Transactions
