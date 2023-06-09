import React, {useState} from 'react';
import NewExpense from './components/NewExpenses/NewExpenses';
import Expenses from './components/Expenses/Expenses';

const App = () => {
const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2019, 7, 14),
    },
    { 
      id: 'e2', 
      title: 'New TV', 
      amount: 799.49, 
      date: new Date(2020, 2, 12) 
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
    {
      id: 'e5',
      title: 'Investment',
      amount: 1000,
      date: new Date(2022, 6, 12),
    },
];

const [valueExpenses, setValueExpenses] = useState(expenses); 

const addExpenseHandler = (expense) => {
  console.log('In App.js');                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
  console.log(expense);
};

const filterValueAppHandler = (filterValueApp) => {
  const filteredExpenses = expenses.filter(expense => expense.date.getFullYear() === parseInt(filterValueApp));
  setValueExpenses(filteredExpenses);
  console.log(filteredExpenses);
}

return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={valueExpenses} onFilterValueApp={filterValueAppHandler}/>
    </div>
  );
}

export default App; 