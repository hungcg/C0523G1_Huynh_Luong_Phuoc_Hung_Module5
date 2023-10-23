import {useState} from "react";
import useCounter from "./Counter";

function Counter2() {
    let [count, setCount] = useCounter(0);
    return (
        <div>
            Value {count}
            <div>
                <button onClick={setCount(2)}>InCrease</button>
            </div>
        </div>
    );
}

export default Counter2