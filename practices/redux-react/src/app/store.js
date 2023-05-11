// creates the Redux store instance
// configure store

import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import usersReducer from '../features/users/usersSlice'
import logger from 'redux-logger'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: usersReducer,
  },
  // add Redux Logger
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})
