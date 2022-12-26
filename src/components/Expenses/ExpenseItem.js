import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css"
import Card from "../UI/Card";

const ExpenseItem = (props) => {
    console.log("ExpensesItem props: ", props)
    const expenseDate = props.date;
    const [expenseAmount, setExpenseAmount] = useState(props.amount)
    const [expenseTitle, setExpenseTitle] = useState(props.title);
    const clickTitleHandler = () => {
        setExpenseTitle("Updated");
    }
    // const clickAmountHandler = () => {
    //     setExpenseAmount(0);
    // }
    return (
        <Card className="expense-item">
            <ExpenseDate date={expenseDate}></ExpenseDate>
            <div className="expense-item__description">
                <h2>{expenseTitle}</h2>
                <div className="expense-item__price">${expenseAmount}</div>
            </div>
            <div>
                <button onClick={clickTitleHandler}>
                    Change Title
                </button>
            </div>
            {/* <div>
                <button onClick={clickAmountHandler}>
                    Clear Amount
                </button>
            </div> */}
        </Card>
    );
}
export default ExpenseItem;