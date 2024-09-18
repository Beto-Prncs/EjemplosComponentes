import { Component } from '@angular/core';

@Component({
  selector: 'app-sidemenu',
  standalone: true,
  imports: [],
  templateUrl: './sidemenu.component.html',
  styleUrl: './sidemenu.component.css'
})
export class SidemenuComponent {
userName:string = 'Alberto Castro';
theme:string = "";
widthMenu:number = 20;
visibleMenu:boolean = true;

alternateVisibility():void {
this.visibleMenu=!this.visibleMenu;
}
setTheme(color:string):void{
  this.theme=color;
}
setSize():void{
  this.widthMenu+=10;
  if(this.widthMenu>100){
  this.widthMenu=20;
  }
}

}
