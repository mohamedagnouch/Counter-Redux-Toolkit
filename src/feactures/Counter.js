import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { increment, Decrement, reset,incremenByAmount } from "./counterSlise";
import { useState } from 'react';
const Counter = () => {
    const counter = useSelector((state) => state.counte.count);
    const dispatch =useDispatch()
    const [incremenAmount,setIncremenAmount]=useState(0);
    const addValue = Number(incremenAmount) || 0 ;

    const resetAll =()=>{
        setIncremenAmount(0)
        dispatch(reset());
    }

  return (
    <section>
      <p>{counter}</p>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>{" "}
        <button onClick={() => dispatch(Decrement())}>-</button>
      </div>
      <input
        type="text"
        value={incremenAmount}
        onChange={(e) => setIncremenAmount(e.target.value)}
      />
      <div>
        <button onClick={() => dispatch(incremenByAmount(addValue))}>
          Add Amount
        </button>
        <button onClick={resetAll}>
         Reset
        </button>
      </div>
    </section>
  );
}

export default Counter
