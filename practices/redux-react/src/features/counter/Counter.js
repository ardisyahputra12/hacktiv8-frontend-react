// a React component that shows the UI for the counter feature

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from './counterSlice'

export const Counter = () => {
  const count = useSelector(state => state.counter.count)
  const dispatch = useDispatch()

  return (
    <>
      <button
        aria-label='Decrement value'
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
      <span>{count}</span>
      <button
        aria-label='Increment value'
        onClick={() => dispatch(increment())}
      >Increment</button>
    </>
  )
}
