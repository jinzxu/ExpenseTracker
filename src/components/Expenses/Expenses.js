import ExpenseItem from "./ExpenseItem";
import "./Expenses.css"
import Card from "../UI/Card";
const Expenses = (props) => {
    console.log("Expenses props: ", props)
    const items = props.items;
    return (
        <Card className="expenses">
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