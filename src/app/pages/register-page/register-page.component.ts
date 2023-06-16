import { Component } from '@angular/core';
import { UserservicesService } from 'src/app/services/userservices.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {
  firstName!:string;
  lastName!:string;
  useremail!:string;
  userpassword!:string;
  // birthDate,
  // city,
  // mobile,
  // motorcycle,
  // brand,
  // model,
  // year,

  constructor(private Userservice:UserservicesService){}

  createUser():void{
    this.Userservice.create(this.firstName,this.lastName,this.useremail,this.userpassword);
    console.log("user created")
  }

}
