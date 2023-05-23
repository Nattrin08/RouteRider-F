import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-home-page-one',
  templateUrl: './home-page-one.component.html',
  styleUrls: ['./home-page-one.component.css']
})

export class HomePageOneComponent {
  heightDevice: number;
  //Crea o asigna los valores que se estan asignando en la clase
  constructor() {
    this.heightDevice = window.innerHeight;
  }
  @HostListener('window:resize', ['$event'])
  //oR - ejecuta lo que se determina en el decorador   
  onResize(event: any) {
    //event.target.innerHeight = define el alto de la ventana en la que se esta presentando
    this.heightDevice = event.target.innerHeight;
  }
}
