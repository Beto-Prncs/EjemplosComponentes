import { Component } from '@angular/core';

@Component({
  selector: 'app-sidemenu',
  standalone: true,
  imports: [],
  templateUrl: './sidemenu.component.html',
  styleUrl: './sidemenu.component.css'
})
export class SidemenuComponent {
  userName: string = 'Alberto Castro';
  theme: string = 'linear-gradient(180deg, #0080ff, #00d4ff)'; // Color original
  originalTheme: string = 'linear-gradient(180deg, #0080ff, #00d4ff)'; // Guardar el color original
  customTheme: string = 'red'; // Color personalizado
  isCustomTheme: boolean = false; // Variable para alternar el estado del color
  widthMenu: number = 20;
  visibleMenu: boolean = true;

  // Alternar visibilidad del menú
  alternateVisibility(): void {
    this.visibleMenu = !this.visibleMenu;
  }

  // Alternar entre el color original y el personalizado
  setTheme(): void {
    if (this.isCustomTheme) {
      this.theme = this.originalTheme; // Volver al color original
    } else {
      this.theme = this.customTheme; // Cambiar al color personalizado
    }
    this.isCustomTheme = !this.isCustomTheme; // Alternar estado del color
  }

  // Cambiar tamaño del menú
  setSize(): void {
    this.widthMenu += 10;
    if (this.widthMenu > 100) {
      this.widthMenu = 20;
    }
  }
}