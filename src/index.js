
import './styles.css';

import {Todo,TodoList} from './classes';
import { crearTodoHtml } from './js/components';

// import { Todo } from './classes/todo.class';
// import { TodoList } from './classes/todo-list.class';

export const todoList = new TodoList();

// const tarea = new Todo('Aprender JavaScript!!!!');
// todoList.nuevoTodo(tarea);

// console.log(todoList);

// crearTodoHtml(tarea);

// localStorage.setItem('mi-key','ABC1243');

/* setTimeout(() => {
  localStorage.removeItem('mi-key');
},1500); */

todoList.todos.forEach(todo => {
  crearTodoHtml(todo);
});
// todoList.todos.forEach(crearTodoHtml); //otra forma de foreach cuando solo hay un solo argumento


// console.log('todos: ', todoList.todos);