import React from 'react'
import './App.css'
// import { CounterFn } from './features/counter/CounterFnComponent'
import { UsersList } from './features/users/UsersList'
// import { CounterClass } from './features/counter/CounterClassComponent'
// import { Counter } from './features/counter/Counter'

// CounterClass component con not use, still error. dispatch -> is unknown

export const App = () => {
  return (
    <main className='App container'>
      {/* <CounterFn /> */}
      {/* <CounterClass /> */}
      {/* <Counter /> */}
      <UsersList />
    </main>
  )
}

/**
 * using redux, create:
 * - store => configureStore() => app.js
 * - import and use Provider in index.js, store as props of store
 * - reducer => createSlice() => counterSlice.js
 * - use this in component:
 *    - useSelector => read data from store
 *    - useDispatch => to access action
 */