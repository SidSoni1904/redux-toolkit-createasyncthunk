import { useDispatch, useSelector } from 'react-redux';
import { FetchTodos } from './Slices/TodoSlice';
import './App.css';

function App() {
  const dispatch = useDispatch()
  const state = useSelector(state => state)
  if (state.todo.isloading) {
    return <h1>Loading...</h1>
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo Web Fetcher</h1>
        <button onClick={e => dispatch(FetchTodos())}>Click to Fetch Todos </button>
        {
          state.todo.data && 
          state.todo.data.map(e => (
            <li>{e.title}</li>
          ) )
        }
      </header>
    </div>
  );
}

export default App;
