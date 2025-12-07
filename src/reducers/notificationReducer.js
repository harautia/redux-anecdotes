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

export const { displayNotification, hideNotification } = notificationSlice.actions
export default notificationSlice.reducer