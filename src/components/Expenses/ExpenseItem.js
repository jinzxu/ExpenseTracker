import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css"
import Card from "../UI/Card";

const ExpenseItem = (props) => {
    console.log("ExpensesItem props: ", props)
    const expenseDate = props.date;
    const expenseTitle = props.title;
    const expenseAmount = props.amount;
    return (
        <Card className="expense-item">
            <ExpenseDate date={expenseDate}></ExpenseDate>
            <div className="expense-item__description">
                <h2>{expenseTitle}</h2>
                <div className="expense-item__price">${expenseAmount}</div>
            </div>
        </Card>
    );
}
export default ExpenseItem;