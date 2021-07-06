//Referencias en el Html

import { todoList } from "../index";
import { Todo } from "../classes";

const divTodoList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');
const btnBorrarComplet = document.querySelector('.clear-completed');

export const crearTodoHtml = (todo) => {

  const htmlTodo = `
          <li class="${(todo.completado)?'completed':''}" data-id="${todo.id}">
						<div class="view">
							<input class="toggle" type="checkbox" ${(todo.completado)? 'checked':''}>
							<label>${todo.tarea}</label>
							<button class="destroy"></button>
						</div>
						<input class="edit" value="Create a TodoMVC template">
					</li>`;
  const div = document.createElement('div');
  div.innerHTML = htmlTodo;

  divTodoList.append(div.firstElementChild);
  return div.firstElementChild;

}

//Eventos

txtInput.addEventListener('keyup', (event) => {
  if(event.keyCode === 13 && txtInput.value.length > 0){
    const nuevoTodo = new Todo(txtInput.value);
    console.log(txtInput.value);

    todoList.nuevoTodo(nuevoTodo);
    console.log(todoList);

    crearTodoHtml(nuevoTodo);
    txtInput.value = '';
  }
})

divTodoList.addEventListener('click', (event) => {

  const nombreElemento = event.target.localName; // nombre del elemento--input,label,buttom
  const todoElemento =  event.target.parentElement.parentElement;
  const todoId= todoElemento.getAttribute('data-id')

  if(nombreElemento.includes('input')){//click en el check

    todoList.marcarCompletado(todoId);
    todoElemento.classList.toggle('completed');
  }else if(nombreElemento.includes('button')){ //hay que borrar el todo

    todoList.eliminarTodo(todoId);
    divTodoList.removeChild(todoElemento);
  }

});

btnBorrarComplet.addEventListener('click', ()  => {

  todoList.eliminarCompletados();
  
  for(let i = divTodoList.children.length-1;i>=0;i--){

    const elemento = divTodoList.children[i];

    if(elemento.classList.contains('completed')){
      divTodoList.removeChild(elemento);
    }

  }

})