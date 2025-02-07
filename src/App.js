import logo from './platzi.webp';
import './App.css';

function App() {
  return (
    <div className="App">
      <TodoH1/>
      <TodoSearch/>
      <TodoList>
        <TodoItem/>
        <TodoItem/>
        <TodoItem/> 
      </TodoList>

      <CreateTodoButton/>

    </div>
  );
}


function TodoItem() {
  return(
    <li>
      <span>V</span>
      <p>Reír para no llorar</p>
      <span>X</span>
    </li>
  );
}

export default App;
