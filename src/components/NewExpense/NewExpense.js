import React from "react";
import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
    const saveUserInputHandler = (userInput) => {
        const expenseData = {
            ...userInput,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
    }
    return (
        <div className="new-expense">
            <ExpenseForm onSaveUserInput={saveUserInputHandler} />
        </div>
    )
}
export default NewExpense;