import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'

const intialState = {
  count: 0
}

enum counterActions {
  increment = 'INCREMENT',
  decrement = 'DECREMENT'
}

function counterReducer(state = intialState, action: any) {
  switch (action.type) {
    case counterActions.increment:
      return {count: state.count + 1}
    case counterActions.decrement:
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
        <button onClick={() => dispatch({ type: counterActions.decrement })}>-1</button>
        <button onClick={() => dispatch({ type: counterActions.increment })}>+1</button>
      </div>

      <Link to="/">Home</Link>
    </>
  );
}

export { Counter, counterReducer };