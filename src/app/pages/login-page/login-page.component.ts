import { Component } from '@angular/core';
import { UserservicesService } from 'src/app/services/userservices.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  useremail: string = "";
  userpassword: string = "";

  constructor(private Userservice: UserservicesService) { }

  login() {

    this.Userservice.login(this.useremail, this.userpassword)

    console.log("email: ", this.useremail)
    console.log("password: ", this.userpassword);
  }
}
