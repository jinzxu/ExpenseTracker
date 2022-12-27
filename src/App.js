import React, { useEffect, useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const INITIAL_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: 'e2',
    title: 'New TV',
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
]
const App = () => {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);
  useEffect(() => { setExpenses(INITIAL_EXPENSES) }, [INITIAL_EXPENSES])
  const addNewExpenseHandler = (newExpense) => {
    setExpenses(prevExpenses => (
      [newExpense, ...prevExpenses]
    ))
  }
  const filteredYearHandler = (filteredYear) => {
  }
  return (
    <div>
      <NewExpense onAddNewExpense={addNewExpenseHandler} />
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
