
import React from 'react';
import './Expenses.css';

import ExpenseItem from "./ExpenseItem";
import Card from './Card';
const Expenses = (props) => {
  return (
    <Card className="expense">

      {props.item.map(
        expens => (
          <ExpenseItem
            key={expens._id}
            date={expens.date}
            title={expens.title}
            amount={expens.price} />
        )
      )

      }

    </Card>

  );
}

export default Expenses;