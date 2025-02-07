import React from 'react'; //Para que funcione el React.Fragment tenemos que importar react
import { TodoEncabezado } from './TodoEncabezado';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreteTodoButton';
import './App.css';

const defaultTodos = [
  { text: 'Empezar el curso de introducción a React.js de Platzi', completed: false},
  { text: 'Leer 20 minutos mi libro de "Muchas vidas, muchos maestros"', completed: true},
  { text: 'Continuar el proyecto de challenge de amigo secreto con js de Alura Latam', completed: false},
  { text: 'Continuar con el curso de Foco: Enfocarse trae más resultados para el día a día de Alura Latam', completed: false},
  { text: 'Revisar el documento de Ingles', completed: false}

];

function App() {
  return (
    <React.Fragment> {/* Servirá para renderizar un elemento unicamente al App y estaría modo "invisible dentro del html" */}
      <TodoEncabezado completed={25} total={26}/>

      <TodoSearch/>
      <TodoList>
          {defaultTodos.map(todo => ( //Estoy generando un array apartir de otro array y  renderizando por cada elemento de la lista
            <TodoItem key={todo.text} text={todo.text} completed={ todo.completed }/> //Key: lo estamos utilizando cuando queremos renderizar diferentes elementos de un array
          ))}
      </TodoList>

      <CreateTodoButton/>

    </React.Fragment>
  );
}


export default App;
