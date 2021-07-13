import ExepenseItem from "./ExpenseItem";
import "./ExpenseList.css";
const ExpenseList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No Item Found</h2>;
  }
  return (
    <div className="expenses-list">
      {props.items.map((item) => (
        <ExepenseItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))}
    </div>
  );
};
export default ExpenseList;
