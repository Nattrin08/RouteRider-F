import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mobile-header',
  templateUrl: './mobile-header.component.html',
  styleUrls: ['./mobile-header.component.css']
})
export class MobileHeaderComponent {
  constructor(private router: Router) {};

  routesRedirection() {
    this.router.navigate(['/routes']);
  }
}
