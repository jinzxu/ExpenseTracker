import React, { useState, useEffect } from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css"
import Card from "../UI/Card";

const ExpenseItem = (props) => {
    const expenseDate = props.date;
    const [expenseAmount, setExpenseAmount] = useState(props.amount)
    const [expenseTitle, setExpenseTitle] = useState(props.title);
    useEffect(() => { setExpenseTitle(props.title) }, [props.title])
    useEffect(() => { setExpenseAmount(props.amount) }, [props.amount])
    const clickTitleHandler = () => {
        setExpenseTitle("Updated");
    }
    return (
        <Card className="expense-item">
            <ExpenseDate date={expenseDate}></ExpenseDate>
            <div className="expense-item__description">
                {console.log("expenseTitle ", expenseTitle, "; props title ", props.title)}
                <h2>{expenseTitle}</h2>
                <div className="expense-item__price">${expenseAmount}</div>
            </div>
            <div>
                <button onClick={clickTitleHandler}>
                    Change Title
                </button>
            </div>
        </Card>
    );
}
export default ExpenseItem;