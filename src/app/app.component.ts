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

}
