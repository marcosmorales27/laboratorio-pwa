import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Tarea {
  nombre: string;
  completada: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  
  titulo = 'Gestor de Actividades PWA';

  nuevaTarea = '';

  conectado = navigator.onLine;

  // clave para LocalStorage
  private readonly STORAGE_KEY = 'tareasPWA';

  tareas: Tarea[] = [
    { nombre: 'Examen de componentes web', completada: false },
    { nombre: 'Entrega deber base de datos', completada: true },
    { nombre: 'Presentacion pag web', completada: false },
    { nombre: "Entrega documentos PPP", completada: false}
  ];

  ngOnInit(): void {

    console.log('[APP] Aplicación iniciada');

    console.log(
      this.conectado
        ? '[APP] Tiene conxeion a internet'
        : '[APP] Sin conexion'
    );

    // Cargar tareas guardadas
    this.cargarTareas();
  }

  @HostListener('window:online')
  online() {
    this.conectado = true;
    console.log('[APP] Devuelta en linea');
  }

  @HostListener('window:offline')
  offline() {
    this.conectado = false;
    console.log('[APP] Sin conexion a internet');
  }

  agregar() {

    if (this.nuevaTarea.trim()) {

      this.tareas.push({
        nombre: this.nuevaTarea,
        completada: false
      });

      this.guardarTareas();

      console.log('[APP] Tarea agregada');

      this.nuevaTarea = '';

    }

  }

  cambiarEstado(tarea: Tarea) {

    tarea.completada = !tarea.completada;

    this.guardarTareas();

    console.log('[APP] Estado cambiado');

  }

  eliminar(i: number) {

    this.tareas.splice(i, 1);

    this.guardarTareas();

    console.log('[APP] Tarea eliminada');

  }
//funciones

  guardarTareas(): void {

    localStorage.setItem(
      this.STORAGE_KEY,
      JSON.stringify(this.tareas)
    );

    console.log('[APP] Tareas guardadas');

  }

  cargarTareas(): void {

    const datos = localStorage.getItem(this.STORAGE_KEY);

    if (datos) {

      this.tareas = JSON.parse(datos);

      console.log('[APP] Tareas cargadas desde LocalStorage');

    }

  }

}