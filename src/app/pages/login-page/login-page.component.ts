import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserservicesService } from 'src/app/services/userservices.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  useremail: string = "";
  userpassword: string = "";
  

  constructor(private Userservice: UserservicesService, private router:Router) { }
  ngOnInit(){
    console.log("email: ", this.useremail)
    console.log("password: ", this.userpassword);
  }
   

  login() {

    this.Userservice.login(this.useremail, this.userpassword)

    console.log("email: ", this.useremail)
    console.log("password: ", this.userpassword);

  }
  // cancelSign(){
  //   this.router.navigate(['']);
  // }
}
