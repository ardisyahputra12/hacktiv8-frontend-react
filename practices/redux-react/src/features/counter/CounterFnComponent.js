import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  increment,
  decrement,
  incrementByAmount,
} from './counterSlice'

export const CounterFn = () => {
  const count = useSelector((state) => state.counter.count)
  const dispatch = useDispatch()
  const [incrementAmount, setincrementAmount] = useState(0)
  const addValue = Number(incrementAmount) || 0

  return (
    <div style={{ textAlign: 'center', marginBottom: '80px' }}>
      <h2>Function Component Counter</h2>
      <h2>{count}</h2>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(increment())}>+</button>
      <input
        value={incrementAmount}
        onChange={(e) => setincrementAmount(e.target.value)}
      />
      <button onClick={() => dispatch(incrementByAmount(addValue))}>Add Amount</button>
    </div>
  )
}
