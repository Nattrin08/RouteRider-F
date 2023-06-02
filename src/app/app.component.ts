import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  listoocu = false;
  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      //
      if (event instanceof NavigationEnd) {
        this.listoocu = event.url === "/"
      }
    });    
  }

  // Verificar si el ancho del viewport para mostrar la vista movil o la desktop
  get isMobileView(): boolean {
    return window.innerWidth <= 992;
  }
}
