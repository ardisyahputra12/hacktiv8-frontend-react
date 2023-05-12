import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoginPending: false,
  isLoginSuccess: false,
  errorMessage: '',
  user: {}
}

const callLoginApi = (email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === 'admin@login.com' && password === 'admin') {
        resolve({ email })
      } else {
        reject('Invalid email and password')
      }
    }, 1000)
  })
}

// function callLoginApi(email, password) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       if (email === 'admin@login.com' && password === 'admin') {
//         resolve({ email })
//       } else {
//         reject('Invalid email and password')
//       }
//     }, 1000)
//   })
// }

export const authLoginApi = createAsyncThunk('auth/login', async ({ email, password }) => {
  try {
    const response = await callLoginApi(email, password)
    return response.email
  } catch (err) {
    throw (err)
  }
})

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  // Tambahkan builder.addcase, untuk case pending, fulfilled dan rejected.
  // Bila sudah jangan untuk mendaftarkan authSlice ini ke dalam app/store.js
  extraReducers(builder) {
    builder
      .addCase(authLoginApi.pending, (state) => {
        state.isLoginPending = true
      })
      .addCase(authLoginApi.fulfilled, (state, action) => {
        console.log('fulfilled')
        console.log(action)
        const { email } = action.payload
        state.isLoginPending = false
        state.isLoginSuccess = true
        state.user = { email }
      })
      .addCase(authLoginApi.rejected, (state, action) => {
        console.log(action, 'rejected')
        state.isLoginPending = false
        state.isLoginSuccess = false
        state.errorMessage = action.error.message
      })
  }
})

export default authSlice.reducer