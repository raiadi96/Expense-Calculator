import ExepenseItem from "./ExpenseItem";
import Card from "./Card/Card";
import "./Expense.css";
import ExpenseList from "./ExpenseList";
function Expense(expense) {
  const expenses = expense.expense;
  var updated_Expenses = expenses.filter((x) => {
    return x.date.getFullYear().toString() === expense.filter;
  });

  return (
    <Card className="expenses">
      <ExpenseList items={updated_Expenses}></ExpenseList>
    </Card>
  );
}

export default Expense;
