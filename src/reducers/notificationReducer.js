import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  message: null,
  visible: false
}

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    displayNotification(state, action) {
      state.message = action.payload.message
      state.visible = true
    },
    hideNotification(state) {
      state.visible = false;
    }
  },
})


const { displayNotification, hideNotification } = notificationSlice.actions

export const setNotification = (message, duration) => {
  return async dispatch => {
    dispatch(displayNotification({ message }))
    setTimeout(() => {
      dispatch(hideNotification())
    }, duration * 1000)
  }
}

export default notificationSlice.reducer