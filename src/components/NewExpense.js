import './NewExpense.css';
import './ExpenseForm.css'
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';
const NewExpense = (props) => {
    
    const [toggleSwtich, UpdateToggle] = useState(true)
    const addExpensehandler = (evt) =>{
        
        props.AddExpense({...evt,id :Math.floor(Math.random() * 100) + 1});
    }
    const toggleHandler = () =>{
        UpdateToggle(!toggleSwtich);
    }
    if(toggleSwtich === true){
        return (<div className = "new-expense">
        <button onClick = {toggleHandler}>Add Expense!</button>
    </div>)
    }

    return (
        <div className = "new-expense">
            <ExpenseForm addExpenseData = {addExpensehandler} toggleSwitch = {toggleHandler}></ExpenseForm>
        </div>
    )
}

export default NewExpense;