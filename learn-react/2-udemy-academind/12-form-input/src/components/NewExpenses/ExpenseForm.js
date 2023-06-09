import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = () => {
    // 1st method
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // 2nd method
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: '',
    // });

    const titleChangeHandler = (event) => {
        // 1st method
        setEnteredTitle(event.target.value);

        // 2nd method
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value,
        // });

        // 3rd method, the best method because the data will guaranted the latest update
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredTitle: event.target.value };
        // });
        
        console.log(enteredTitle);
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);

        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value,
        // });

        // setUserInput((prevState) => {
        //     return { ...prevState, enteredAmount: event.target.value };
        // });

        console.log(enteredAmount);
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);

        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value,
        // });

        // setUserInput((prevState) => {
        //     return { ...prevState, enteredDate: event.target.value };
        // });

        console.log(enteredDate);
    };

    return ( 
        <form>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' onChange={titleChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min="0.01" step="0.01" onChange={amountChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;