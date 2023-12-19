import { Component } from '@angular/core';
import { User } from '../user';
import { LoginuserService } from '../loginuser.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})


export class UserloginComponent {
  user:User = new User();

  constructor(private loginuserservice: LoginuserService){}

  ngOnInit(): void{

  }

  userLogin(){
    console.log(this.user);
    this.loginuserservice.loginUser(this.user).subscribe(data=>{
      alert("Login Successfully");
    },error=>alert("Invalid credintials"));
    
  }
}
