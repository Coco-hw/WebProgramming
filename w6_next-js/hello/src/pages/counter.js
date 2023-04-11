import React, { useState } from "react";
import sytles from "@/styles/Counter.module.css";

export default function Counter(props) {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>
                Counter: {count<0 ? <span className={sytles.minus}>{count}</span> : count}
                {/* count가 0보다 작으면 minus 클래스를 적용한다. */}

            </h1>
            <button onClick={() => setCount(count + 1)}>Increase</button>
            <button onClick={() => setCount(count -1)}>Decrease</button>
        </div>
    );
}