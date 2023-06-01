import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page-one',
  templateUrl: './home-page-one.component.html',
  styleUrls: ['./home-page-one.component.css']
})

export class HomePageOneComponent {
  heightDevice: number;
  videoPath: string ="assets/vid/video1.mp4";
  videoPath2: string ="assets/vid/video3.mp4";
  //Crea o asigna los valores que se estan asignando en la clase
  constructor(private router: Router) {
    this.heightDevice = window.innerHeight;
  }
  @HostListener('window:resize', ['$event'])
  //oR - ejecuta lo que se determina en el decorador   
  onResize(event: any) {
    //event.target.innerHeight = define el alto de la ventana en la que se esta presentando
    this.heightDevice = event.target.innerHeight;
  }
  //constructor para la funcion del boton hacia rutas
  routesRedirections() {
    this.router.navigate(['/routes']);
  }
  //constructor para la funcion del boton hacia inicio de sesion
  logInRedirections() {
    this.router.navigate(['/login']);
  }
  //constructor para la funcion del boton hacia registro
  signUpRedirections() {
    this.router.navigate(['/register']);
  }
  //constructor para la funcion del boton hacia contacto
  contactRedirections() {
    this.router.navigate(['/contact']);
  }
}
