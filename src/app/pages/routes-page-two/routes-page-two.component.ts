import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-routes-page-two',
  templateUrl: './routes-page-two.component.html',
  styleUrls: ['./routes-page-two.component.css']
})
export class RoutesPageTwoComponent {
  constructor(private router: Router) {};

  tatacoaRedirection() {
    this.router.navigate(['/routes/desierto-tatacoa']);
  }
}
