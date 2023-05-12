// creates the Redux store instance
// configure store

import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import usersReducer from '../features/users/usersSlice'
import logger from 'redux-logger'
import authSlice from '../features/auth/authSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: usersReducer,
    // Tambahkan builder.addcase, untuk case pending, fulfilled dan rejected.
    // Bila sudah jangan untuk mendaftarkan authSlice ini ke dalam app/store.js
    // ?????
    auth: authSlice,
  },
  // add Redux Logger
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})
