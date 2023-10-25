import {useState} from "react";

function useCounter(unit) {
    const [count, setCount] = useState(unit);

    const increment = (amount) => {
        setCount(count + amount);
    };
    return [count, increment];
}

export default useCounter;