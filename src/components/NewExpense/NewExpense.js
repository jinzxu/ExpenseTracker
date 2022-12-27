import React, { useState } from "react";
import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
    const [isAddingExpense, setIsAddingExpense] = useState(false);
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
            {isAddingExpense && <ExpenseForm
                onSaveUserInputHandler={saveUserInputHandler}
                onSetIsAddingExpense={setIsAddingExpense}
            />}
            {!isAddingExpense && <button onClick={() => setIsAddingExpense(true)}>Add new expense</button>}
        </div>
    )
}
export default NewExpense;