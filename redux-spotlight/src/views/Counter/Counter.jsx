import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './counterSlice';

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div className="counter">
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        -
      </button>
      <span>{count}</span>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
