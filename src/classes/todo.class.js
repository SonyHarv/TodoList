export class Todo{

  constructor(tarea){

    this.tarea = tarea;
    this.id = new Date().getTime();//154515638
    this.completado = false;
    this.creado = new Date();
  }
}