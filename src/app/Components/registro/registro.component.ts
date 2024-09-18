import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
nombre: string = '';
email: string = '';

registrar() {
  console.log(`Nombre: ${this.nombre}, Email: ${this.email}`);
}
}
