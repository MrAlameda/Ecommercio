import { configureStore } from '@reduxjs/toolkit'
import { Token} from '../models/types'
import userReducer from "./Slices/userSlice"

import { cartSlice } from './Slices/userSlice'

export interface AppStore{
  user:Token
}

export const store = configureStore({
  reducer: {
    user:userReducer,
    carrito:cartSlice.reducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch