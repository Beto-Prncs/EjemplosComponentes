import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  standalone: true,
  imports: [],
  templateUrl: './interpolation.component.html',
  styleUrl: './interpolation.component.css'
})
export class InterpolationComponent {
 userName:string= " Beto :D"; 
 isMenuVisible = true;
  menuWidth = 200;
  menuBackgroundColor = 'lightblue';
  toggleMenu() {
    this.isMenuVisible = !this.isMenuVisible;
  }
  changeMenuColor() {
    const randomColor = this.getRandomColor();
    this.menuBackgroundColor = randomColor;
  }
  private getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}
