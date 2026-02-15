import { useState } from "react";

const Conter = () => {

    const [conter, SetConter] = useState(0);

    function increment() {
        SetConter(conter + 1)
    }

    function decrement() {
        if (conter > 0) {
            SetConter(conter - 1)
        }
    }

    return (
        <div>
            <button onClick={decrement}>decrement</button>
            <button onClick={increment}>increment</button>
            <div>{conter}</div>
        </div>);
};

export default Conter;