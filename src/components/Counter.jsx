import {useState} from "react";

export default function Counter() {
    const [score, setScore] = useState(0);

    function increment() {
        setScore(score + 1)
    }

    function decrement() {
        setScore(score - 1 )
    }
    return (
        <div>
            <button className="inc" onClick={increment}>+</button> {score} <button className="dec" onClick={decrement}>-</button>

        </div>
    );
}