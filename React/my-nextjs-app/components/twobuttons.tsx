"use client";
import React from "react";

export default function TwoButtons() {

    const [numberA, setNumberA] = React.useState(0);
    const [numberB, setNumberB] = React.useState(0);

    function handleClickA() {
        console.log("increment A");
        setNumberA(numberA + 1);
    }

    function handleClickB() {
        console.log("increment B");
        setNumberB(numberB + 1);
    }

    return (
        <div>
            <p>A: {numberA}</p>
            <button onClick={handleClickA}>Increase A</button>

            <p>B: {numberB}</p>
            <button onClick={handleClickB}>Increase B</button>
        </div>
    );
}
