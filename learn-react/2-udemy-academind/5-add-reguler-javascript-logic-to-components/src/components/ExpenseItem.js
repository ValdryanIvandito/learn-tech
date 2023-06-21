import './ExpenseItem.css'

function ExpenseItem(props) {
    const month = props.expense.date.toLocaleString('id-ID', { month: 'long' });
    const year = props.expense.date.getFullYear();
    const day = props.expense.date.toLocaleString('id-ID', { month: '2-digit' });

    return (
        <div className="expense-item">
            <div>
                <div>{month}</div>
                <div>{year}</div>
                <div>{day}</div>
            </div>
            <div className="expense-item__description">
                <h2>{props.expense.title}</h2>
                <div className="expense-item__price">${props.expense.amount}</div>
            </div>
        </div>
    )
}

export default ExpenseItem;