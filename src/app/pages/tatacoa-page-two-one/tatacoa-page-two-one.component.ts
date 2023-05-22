import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tatacoa-page-two-one',
  templateUrl: './tatacoa-page-two-one.component.html',
  styleUrls: ['./tatacoa-page-two-one.component.css']
})
export class TatacoaPageTwoOneComponent {
  commentUser: string = ""
  @Input() userName: string = "";

  ngOnInit() {
    this.commentUser = this.userName;
  }
}
