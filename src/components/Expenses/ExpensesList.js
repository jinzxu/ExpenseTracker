import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css"
const ExpensesList = (props) => {
    const filteredItems = props.filteredItems;
    let expensesContent;
    if (filteredItems.length > 0) {
        expensesContent = <ul className="expenses-list">
            {filteredItems.map((expense) => (
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            ))}
        </ul>
    } else {
        expensesContent = <h2 className="expenses-list__fallback">No expenses found.</h2>;
    }
    return expensesContent;
}
export default ExpensesList;