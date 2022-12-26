import React, { useState } from "react";
import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
    // const saveUserInputHandler = (userInput) => {
    //     const expenseData = {
    //         ...userInput,
    //         id: Math.random().toString()
    //     }
    //     props.onAddExpense(expenseData)
    // }
    // const [userInput, setExpenseData] = useState({
    //     title: "",
    //     amount: "",
    //     date: ""
    // });
    var newExpense = {
        title: "",
        amount: "",
        date: ""
    }
    const saveUserInputHandler = userInput => {
        newExpense = {
            title: userInput.title,
            amount: userInput.amount,
            date: userInput.date
        }
        props.onAddNewExpense(newExpense)
    };
    return (
        <div className="new-expense">
            <ExpenseForm
                onSaveUserInputHandler={saveUserInputHandler}
            />
        </div>
    )
}
export default NewExpense;