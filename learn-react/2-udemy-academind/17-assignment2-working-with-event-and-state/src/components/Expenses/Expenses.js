import React from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';

function Expenses(props) {
    const filterValueHandler = (filterValue) => {
        props.onFilterValueApp(filterValue);
    }

    return (
        <Card className="expenses">
            <ExpensesFilter onFilterValue={filterValueHandler} />

            {props.items.map((expense) => (
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            ))}
        </Card>
    );
}

export default Expenses;