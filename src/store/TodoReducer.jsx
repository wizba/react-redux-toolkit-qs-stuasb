import {addTodo} from './TodoActions';
import {  createReducer } from '@reduxjs/toolkit'

const initialState = { value: [] }

export const counterReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addTodo, (state, action) => {
      console.log('action is ',action)
      state.value.push(action.payload);
    })

 
   
})

