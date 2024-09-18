import { Component } from '@angular/core';

@Component({
  selector: 'app-event',
  standalone: true,
  imports: [],
  templateUrl: './event.component.html',
  styleUrl: './event.component.css'
})
export class EventComponent {
  mensaje: string = '';

  handleClick(){
    this.mensaje = '¡Hola! Has hecho clic en el botón.';
  }
  
}
