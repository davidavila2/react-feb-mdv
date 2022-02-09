import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'

const intialState = {
  count: 0
}

function counterReducer(state = intialState, action: any) {

  switch (action.type) {
    case 'INCREMENT':
      return {count: state.count + 1}
    case 'DECREMENT':
      return {count: state.count - 1}
    default:
      return state
  }
}

function Counter() {
  const dispatch = useDispatch()
  const counter = useSelector((state: any) => state?.counter?.count);

  return (
    <>
      <p>{counter}</p>

      <div className="action-buttons">
        <button onClick={() => dispatch({ type: 'DECREMENT' })}>-1</button>
        <button onClick={() => dispatch({ type: 'INCREMENT' })}>+1</button>
      </div>

      <Link to="/">Home</Link>
    </>
  );
}

export { Counter, counterReducer };