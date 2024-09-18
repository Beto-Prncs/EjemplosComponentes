import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InterpolationComponent } from './Components/interpolation/interpolation.component';
import { PropertyComponent } from './Components/property/property.component';
import { EventComponent } from './Components/event/event.component';
import { StyleComponent } from './Components/style/style.component';
import { RegistroComponent } from './Components/registro/registro.component';
import { SidemenuComponent } from './Components/sidemenu/sidemenu.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InterpolationComponent, PropertyComponent, EventComponent, StyleComponent, RegistroComponent, SidemenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  nombreUsuario = 'Nombre de Usuario'; // Reemplaza con el nombre real del usuario
}

