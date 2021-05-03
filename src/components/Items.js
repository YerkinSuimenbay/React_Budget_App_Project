import React from 'react'
import {MdAttachMoney} from "react-icons/md"
import {FaMoneyBillAlt, FaMoneyCheckAlt} from "react-icons/fa"

import { useGlobalContext } from '../context/context'


const Items = () => {
    const {state: {transaction, budget}} = useGlobalContext()
    const totalExpense = transaction.reduce((acc, curr) => acc + curr.amount,0)
    const balance = budget - totalExpense

    const styles = {
        color: balance > 0 ? "green" : balance < 0 ? "red" : "black"
    }

    return (
        <section className="items">
            <article className="item">
                <h4 className="item-title">budget</h4>
                <FaMoneyBillAlt className="icon"/>
                <h3 className="item-money">${budget}</h3>
            </article>
            <article className="item">
                <h4 className="item-title">expense</h4>
                <FaMoneyCheckAlt className="icon"/>
                <h3 className="item-money">${totalExpense}</h3>
            </article>
            <article className="item">
                <h4 className="item-title">balance</h4>
                <MdAttachMoney className="icon"/>
                <h3 className="item-money" style={styles}>${balance}</h3>
            </article>
        </section>
    )
}

export default Items
