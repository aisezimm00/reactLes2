import React from 'react';
import { useSelector } from 'react-redux';

export default function Count() {
    const num = useSelector(state => state.reducer.num);
    const text = useSelector(state => state.reducer.text);

    return (
        <div>
            <h1>{num}</h1>
            <h2>{text}</h2>
        </div>
    );
}
