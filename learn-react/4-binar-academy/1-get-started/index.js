const app = document.getElementById('app');
const root = ReactDOM.createRoot(app);

function Header({ title }) {
    return <h1>{ title }</h1>
}

function LikeButton({ onClick, value }) {
    return <button type="button" onClick={onClick}>Like <span>{value}</span></button>
}

function HomePage() {
    const [count, setCount] = React.useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <div>
            <Header title="Hello" />
            {/* <button type="button" onClick={handleClick}>Like <span>{count}</span></button> */}
            <LikeButton onClick={handleClick} value={count}></LikeButton>
        </div>
    )
}

root.render(
    <HomePage />
);