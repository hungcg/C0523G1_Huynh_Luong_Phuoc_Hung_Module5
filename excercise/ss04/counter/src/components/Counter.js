import {useState} from "react";

function useCounter(props) {
    const [count, setCount] = useState(props);

    const increment = (amount) => {
        setCount(count + amount);
    };
    return [count, increment];
}

export default useCounter;