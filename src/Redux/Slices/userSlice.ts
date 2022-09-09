import { createSlice } from '@reduxjs/toolkit'
import { Action } from 'history'
import { Token } from '../../models/types'
import initialState, { cartState } from '../state'

export const userKey="Token"

export const PersistUser=(key:string, value:string)=>{
    localStorage.setItem(key,value)
}

export const ClearUser=(key:string)=>{
  localStorage.removeItem(key)
}

export const userSlice = createSlice({
  name: 'user',
  initialState:localStorage.getItem(userKey)?(localStorage.getItem(userKey) as string):initialState,
  reducers: {
    adUser: (state,action)=> {
      const res1={...action.payload}
      PersistUser(userKey,action.payload)
      return res1
    }
    ,
    reset:()=>{
      ClearUser(userKey)
      return initialState
    }
  },
})

export const cartSlice=createSlice({
  name:"carrito",
  initialState:cartState,
  reducers:{
    oneMore:(state,action)=>{
        const res={...state,carrito:action.payload}  
        return res
    }
  }
})

// asi me lo pide el  typescript :c
// en las otras que pide bearer si funciona c:
// eso funciona con el bearer, con el token
// uy
// :c

export const { adUser, reset } = userSlice.actions

export const { oneMore } = cartSlice.actions

export default userSlice.reducer