// creates the Redux store instance
// configure store

import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import logger from 'redux-logger'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  // add Redux Logger
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})