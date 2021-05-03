import React, { useRef, useState } from 'react'
import { useGlobalContext } from '../context/context'

const BudgetForm = () => {
    const [budget, setBudget] = useState("")
    const {submitBudget} = useGlobalContext()
    const feedbackRef = useRef(null)

    const changeHandler = e => {
        setBudget(e.target.value)
    }

    const clickHandler = e => {
        e.preventDefault();
        if (parseInt(budget) > 0) {
            submitBudget(budget)
            setBudget("")
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
            <form className="form budget-form">
                <p className="label">Please Enter Your Budget</p>
                <input type="number" id="input" name="budgetInput" value={budget} onChange={changeHandler} />
                <button type="submit" className="btn" onClick={clickHandler}>Calculate</button>
            </form>
        </section>
    )
}

export default BudgetForm
