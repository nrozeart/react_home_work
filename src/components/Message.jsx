import React, { useState, useEffect, useRef } from 'react';

export const Message = (props) => {
    const [state, setState] = useState(0);
    const [value, setValue] = useState('');

    const ref = useRef(null);
    console.log(ref);

    useEffect(
        () => {
            console.log('render');
        }, []
    );

    const increase = () => {
        setState(state + 1);
        ref.current.focus()
    };

    const decrease = () => {
        setState(state - 1)
    };

    const reset = () => {
        setState(0)
    };

    const wrong = () => {
        ref.current.style.color = 'red';
    }

    const handleChange = (ev) => {
        setValue(ev.target.value);
    }

    return <>
        <p>{props.messageText}</p>
        <p>Ты нажал на кнопку {state} раз</p>
        <button onClick={decrease}>-</button>
        <button onClick={increase}>+</button>
        <button onClick={reset}>reset</button>
        <input onChange={handleChange} ref={ref} value={value} />
        <button onClick={wrong}>submit</button>
    </>
};