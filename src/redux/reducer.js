import { createAction, createReducer } from "@reduxjs/toolkit";


const initialState = {
    num: 0,
    text: localStorage.getItem('text') || "hello world",
};


export const incrementNum = createAction('INCREMENT_NUM');
export const decrementNum = createAction("DECREMENT_NUM");
export const resetNum = createAction("RESET_NUM");
export const inputText = createAction("INPUT_TEXT");
export const incrementNumByFive = createAction('INCREMENT_NUM_BY_FIVE');
export const decrementNumByFive = createAction('DECREMENT_NUM_BY_FIVE');


const reducer = createReducer(initialState, (builder) => {
    builder
        .addCase(incrementNum, (state) => {
            if (state.num < 20) {
                state.num += 1;
            }
        })
        .addCase(decrementNum, (state) => {
            if (state.num > 0) {
                state.num -= 1;
            }
        })
        .addCase(resetNum, (state) => {
            state.num = 0;
        })
        .addCase(inputText, (state, action) => {
            state.text = action.payload;
            localStorage.setItem('text', state.text);
        })
        .addCase(incrementNumByFive, (state) => {
            if (state.num <= 15) {
                state.num += 5;
            } else {
                state.num = 20; 
            }
        })
        .addCase(decrementNumByFive, (state) => {
            if (state.num >= 5) {
                state.num -= 5;
            } else {
                state.num = 0;
            }
        });
});

export default reducer;
