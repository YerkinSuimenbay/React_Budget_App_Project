import React, { useRef, useEffect } from 'react'
import { useGlobalContext } from '../context/context'

const ExpenseForm = () => {
    const {submitExpense, toBeEdited: {id, title, amount}} = useGlobalContext()

    const feedbackRef = useRef()
    const expenseTitleRef = useRef(null)
    const expenseAmountRef = useRef(null)
    
    useEffect(() => {
        if (title && amount) {
            expenseTitleRef.current.value = title
            expenseAmountRef.current.value = amount
        }
    }, [title, amount, id])

    const clickHandler = e => {
        e.preventDefault();

        const [title, amount] = [expenseTitleRef.current.value, parseInt(expenseAmountRef.current.value)]

        if (amount > 0 && title) {
            submitExpense({title, amount, id: new Date().getTime()})
            expenseTitleRef.current.value = "";
            expenseAmountRef.current.value = ""; 
        } else {
            feedbackRef.current.style.display = "grid"
            setTimeout(() => feedbackRef.current.style.display = "none", 2000)
        }
    }

    return (
        <section>
            <div className="feedback" ref={feedbackRef}>
                <p>Values can not be <strong>empty</strong> or <strong>negative</strong></p>
            </div>

            <form className="form expense-form">
                <p className="label">Please Enter Your Expense</p>
                <input type="text" id="expenseValue" name="expenseValue"  ref={expenseTitleRef}/>
                <p className="label">Please Enter Your Expense Amount</p>
                <input type="number" id="expenseinput" name="expenseInput"  ref={expenseAmountRef}/>
                <button type="submit" className="btn" onClick={clickHandler}>Calculate</button>
            </form>
        </section>
    )
}

export default ExpenseForm
