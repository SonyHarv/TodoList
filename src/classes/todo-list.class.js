import { Todo } from "./todo.class";


const taskCount = document.querySelector('strong');

export class TodoList{

  constructor(){
    // this.todos = [];
    this.cargarLocalStorage();
  }

  nuevoTodo (todo){
    this.todos.push(todo);
    this.counterTask(this.todos);
    this.guardarLocalStorage();
  }

  eliminarTodo(id){
    this.todos = this.todos.filter(todo  => todo.id != id);
    this.counterTask(this.todos);
    this.guardarLocalStorage();
  }

  marcarCompletado(id){
    for(const todo of this.todos){
      if(todo.id == id){
        todo.completado = !todo.completado;
        this.counterTask(this.todos);
        this.guardarLocalStorage();
        break;
      }
    }
  }

  eliminarCompletados(){
        this.todos = this.todos.filter(todo  => !todo.completado)
        this.counterTask(this.todos);
        this.guardarLocalStorage();
  }

  guardarLocalStorage(){

localStorage.setItem('todo',JSON.stringify(this.todos));

  }

  cargarLocalStorage(){

    /* if(localStorage.getItem('todo')){
      this.todos = JSON.parse(localStorage.getItem('todo'));
      console.log('cargar local: ', this.todos);
      console.log(typeof(this.todos));
    }else{
      this.todos = [];
    } */

    this.todos = ((localStorage.getItem('todo'))
                  ?(JSON.parse(localStorage.getItem('todo')))
                  :[]);

    // console.log(this.todos);

    this.counterTask(this.todos);

    this.todos = this.todos.map(obj  => Todo.fromJsom(obj));
    // this.todos = this.todos.map(Todo.fromJsom); //otra forma de map cuando solo hay un solo argumento

  }

  counterTask(){
    let pendientes = 0;
    this.todos.forEach(todo => {
      if(!(todo.completado)){
        pendientes++;
      }
      return taskCount.innerText = pendientes;
    });
  }

}
