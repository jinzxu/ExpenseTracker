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
    return (
        <Card className="expenses">
            <ExpensesFilter
                onSaveYearFilter={saveYearFilterHandler}
            />
            {items.map(item =>
            (
                <ExpenseItem
                    title={item.title}
                    amount={item.amount}
                    date={item.date}
                ></ExpenseItem>
            )
            )}
        </Card>
    )
}
export default Expenses;