import React, { useEffect, useState } from 'react';
import Expenses from './component/Expenses';
import NewExpense from './component/NewExpenses/NewExpense';
import axios from 'axios';

const App = () => {
  const [expenses, setExpenses] = useState([]);

  const fetchdata = async () => {
    try {
      const response = await axios.get('http://localhost:1000/expense');
      setExpenses(response.data);
    } catch (error) {
      console.error('Error fetching expenses:', error);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  const addExpenseHandler = async (expense) => {
    try {
      await axios.post('localhost:3000', expense);
      fetchdata();
    } catch (error) {
      console.error('Error adding expense:', error);
    }
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses item={expenses} />
    </div>
  );
};

export default App;
