// import redux
import Redux from 'redux'
const { createStore } = Redux

// buat initalState
const initialState = {
  counter: 0
}

// buat reducer
const counter = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { counter: state.counter + 1 }
    case 'DECREMENT':
      return { counter: state.counter - 1 }
    default:
      return state
  }
}

// panggil function createStore dan subscribe
let store = createStore(counter)     // sama aja hasilnya -> Redux(counter)
store.subscribe(() => console.log(store.getState()))

// panggil function dispatch
store.dispatch({ type: 'INCREMENT' })
store.dispatch({ type: 'INCREMENT' })
store.dispatch({ type: 'INCREMENT' })
store.dispatch({ type: 'INCREMENT' })
store.dispatch({ type: 'DECREMENT' })
store.dispatch({ type: 'DECREMENT' })