import React from 'react'
import { useGlobalContext } from '../context/context'

const Transaction = ({title, amount, id}) => {
    const {deleteExpense, editExpense} = useGlobalContext()    

    const style = {textTransform: 'uppercase', fontSize: "1rem", color: "hsl(360, 67%, 44%)"}

    return (
        <div className="transaction-grid">
            <p style={style}>- {title}</p>
            <p style={style}>{amount}</p>
            <div className="icons">
                <button className="edit" onClick={() => editExpense(id)}></button>
                <button className="delete" onClick={() => deleteExpense(id)}></button>
            </div>
        </div>
    )
}

export default Transaction
