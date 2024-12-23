import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './redux/slices/counterSlice.js'
function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value)
  return (
    <div className="App">
      <button onClick={() => dispatch(increment())}> increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <br />
      <div>count={count}</div>
    </div>
  );
}

export default App;
