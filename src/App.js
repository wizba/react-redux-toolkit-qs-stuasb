import React,{useEffect,useReducer } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {addTodo} from './store/TodoActions';
import {counterReducer} from './store/TodoReducer';
import './style.css';

import { increment, decrement } from './store/counterSlice';

export default function App() {
  const [state, dispatch] = useReducer(counterReducer);
  const count = useSelector((state) => state.counter.value);
  // const dispatch = useDispatch();

  useEffect(()=>{

   console.log('state ',state)
  },[state])
  return (
    <div>
      <div>{count}</div>
      <br />
      <button onClick={() => {
        console.log('clicked')
            try{
              dispatch(addTodo('hello'))
            }catch(error){
              console.error(error)
            }
        
        
        }}>increment</button>&nbsp;
      <button onClick={() => dispatch(decrement())}>decrement</button>
    </div>
  );
}
