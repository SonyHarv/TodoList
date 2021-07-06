import { crearTodoHtml } from "../js/components";

export class Todo{

  static fromJsom({id,tarea,completado,creado}) {
    const tempTodo = new Todo(tarea);

    tempTodo.id = id;
    tempTodo.completado= completado;
    tempTodo.creado = creado;

    return tempTodo;
  };

  constructor(tarea){

    this.tarea = tarea;
    this.id = new Date().getTime();//154515638
    this.completado = false;
    this.creado = new Date();
  }
}