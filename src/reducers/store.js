import { configureStore } from '@reduxjs/toolkit'
import dataSlice from 'slices/dataSlice'
import uiSlice from 'slices/uiSlice'

const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['data.localCart'],
      },
    }),
  reducer: {
    data: dataSlice,
    ui: uiSlice
  }
})

export default store
