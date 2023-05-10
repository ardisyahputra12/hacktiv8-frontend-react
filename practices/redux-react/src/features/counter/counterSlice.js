// the Redux logic for the counter feature
// https://react-redux.js.org/tutorials/quick-start

import { createSlice } from '@reduxjs/toolkit'

const initialState = { count: 0 }

export const counterSlice = createSlice({
  name: 'counter',
  initialState: initialState,
  reducers: {
    // for arrow function, don't forget to using {}
    increment: state => { state.count += 1 },
    decrement: state => { state.count -= 1 },
    incrementByAmount: (state, action) => {
      state.count += action.payload
    },
  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

// this Slice Reducers will add to the Store -> app/store.js
export default counterSlice.reducer
