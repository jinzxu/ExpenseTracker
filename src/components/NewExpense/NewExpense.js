import React, { useState } from "react";
import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
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