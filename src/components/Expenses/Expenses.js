import ExpenseItem from "./ExpenseItem";
import React, { useState } from "react";
import "./Expenses.css"
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
const Expenses = (props) => {
    const items = props.items;
    const [filteredYear, setFilteredYear] = useState('2020');
    const saveYearFilterHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };
    const filteredItems = items.filter(expense => (new Date(expense.date)).getFullYear() == filteredYear);
    let expensesContent;
    if (filteredItems.length > 0) {
        expensesContent = filteredItems.map((expense) => (
            <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />
        ));
    } else {
        expensesContent = <p>No expenses found.</p>;
    }
    return (
        <Card className="expenses">
            <ExpensesFilter
                onSaveYearFilter={saveYearFilterHandler}
            />
            {/* {
                filteredItems.length == 0 ?
                    <p>No available expenses</p> :
                    filteredItems.map((expense) => (
                        <ExpenseItem
                            key={expense.id}
                            title={expense.title}
                            amount={expense.amount}
                            date={expense.date}
                        />
                    ))
            } */}
            {expensesContent}
        </Card>
    )
}
export default Expenses;