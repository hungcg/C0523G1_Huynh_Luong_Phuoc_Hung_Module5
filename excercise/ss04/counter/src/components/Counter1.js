import {useState} from "react";
import useCounter from "./Counter";

function Counter1() {
    const [count, setCount] = useCounter(0);

    return (
        <div>
            Value {count}
            <div>
                <button onClick={()=>setCount(1)}>InCrease</button>
            </div>
        </div>
    );
}

export default Counter1