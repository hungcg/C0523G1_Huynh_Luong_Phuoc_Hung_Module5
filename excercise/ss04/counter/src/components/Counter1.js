import {useState} from "react";

function Counter1(){
    let [count, setCount] = useState(0);
    const handleClick = () => {
        const newValue = count + 1;
        setCount(newValue);
    };

    return (
        <div>
            Value {count}
            <div>
                <button onClick={handleClick}>InCrease</button>
            </div>
        </div>
    );

}
export default Counter1