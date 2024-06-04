import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { incrementNum, decrementNum, resetNum, inputText, incrementNumByFive, decrementNumByFive } from './redux/reducer';

export default function Buttons() {
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={() => {
                dispatch(incrementNum());
            }}>+</button>
            <button onClick={() => {
                dispatch(decrementNum());
            }}>-</button>
            <button onClick={() => {
                dispatch(incrementNumByFive());
            }}>+5</button>
            <button onClick={() => {
                dispatch(decrementNumByFive());
            }}>-5</button>
            <button onClick={() => {
                dispatch(resetNum());
            }}>Reset</button>
            <input type="text" value={text} onChange={e => setText(e.target.value)} />
            <button onClick={() => {
                dispatch(inputText(text));
            }}>Change Text</button>
        </div>
    );
}
