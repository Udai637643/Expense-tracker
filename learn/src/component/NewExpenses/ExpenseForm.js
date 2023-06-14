import React ,{useState  }from "react";
import './ExpenseForm.css'

const ExpenseForm=(props)=>{

    const [enterTitle,setEnteredTitle]=useState(' ');

    const [enterAmount,setEnteredAmount]=useState(' ');

    const [enterDate,setEnteredDate]=useState(' ');

    const titleChangeHandler=(event)=>{
        setEnteredTitle(event.target.value);
    }

    const amountChangeHandler=(event)=>{
        setEnteredAmount(event.target.value);
    }

    const dateChangeHandler=(event)=>{
        setEnteredDate(event.target.value);
    };

    const submitHandler=(event)=>{
        event.preventDefault();
            const expenseData={
                    title:enterTitle,
                    amount:enterAmount,
                    date: new Date(enterDate)

            }
            props.onSaveExpenseData(expenseData);
  console.log(expenseData);

            setEnteredTitle('');
            setEnteredAmount('');
            setEnteredDate('');
    };

    return (
         
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="">Title</label>
                    <input type="text" value={enterTitle} onChange={titleChangeHandler}/>
                </div>

                <div className="new-expense__control">
                    <label htmlFor="">Amount</label>
                    <input type="text" value={enterAmount} min="0.01" step="0.01"  onChange={amountChangeHandler}/>
                </div>

                <div className="new-expense__control">
                    <label htmlFor="">Date</label>
                    <input type="Date" value={enterDate}  onChange={dateChangeHandler}/>
                </div>
            </div>

            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}
export default ExpenseForm;