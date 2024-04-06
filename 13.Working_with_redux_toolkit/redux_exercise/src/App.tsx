import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './store/counter'; 
import { RootState, AppDispatch } from './store/index'; 

const Counter: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const counter = useSelector<RootState, number>((state) => state.counter.value); 
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>{counter}</h1>
      <div style={{ display: "flex", gap: "12px" }}>
        <button onClick={() => dispatch(decrement())}>کم کن</button>
        <button onClick={() => dispatch(increment())}>اضافه کن</button>
      </div>
    </div>
  );
};

function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

export default App;
