import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  listas: Lista[] = [];

  constructor() {
    console.log('Servicio inicializado');
    this.cargarStorage();
  }

  // Funcion para crear lista
  crearLista( titulo: string ) {

    const nuevaLista = new Lista(titulo);
    this.listas.push( nuevaLista );
    this.guardarStorage();

    // Devolvemos el id de la lista para navegar
    return nuevaLista.id;

  }

  // Borrar la lista seleccionada
  borrarLista( lista: Lista ) {
    this.listas = this.listas.filter( listaData => listaData.id !== lista.id );
    this.guardarStorage();
  }

  // Cargamos los items de la lista creada
  cargarLista( id: string | number ) {
    id = Number(id);
    return this.listas.find(  listaData => listaData.id === id );
  }

  // Guardar los valores en el Storage
  guardarStorage() {
    localStorage.setItem('data', JSON.stringify(this.listas) );
  }

  // Al cargar la App, comprueba si hay algo grabado en el Storage
  cargarStorage() {
    if ( localStorage.getItem('data') ) {
      this.listas = JSON.parse( localStorage.getItem('data') );
    } else {
      this.listas = [];
    }
  }

}
