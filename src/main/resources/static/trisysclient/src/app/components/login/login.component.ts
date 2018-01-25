import { Component, OnInit } from '@angular/core';
import {LoginUserService} from '../../services/login-user.service';
import {LoginUser} from '../../login-user';
import {Router} from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private loginUsers:LoginUser[];
  private loginUser:LoginUser;
  private errorMsg:string;

  constructor(private loginUserService:LoginUserService, private router:Router) { }

  ngOnInit() {
    this.loginUser = new LoginUser();
    this.loginUserService.setter(this.loginUser);
    this.loginUserService.getLoginUsers().subscribe((loginUsers)=>{this.loginUsers =loginUsers;},(error)=>{console.log(error);})
  
  }
  login(user){
   
    var authenticatedUser = this.loginUsers.find(u => u.emailId === user.emailId);
    if (authenticatedUser && authenticatedUser.password === user.password){
      this.loginUserService.setter(authenticatedUser);
      this.router.navigate(['listassets']);      
      return true;
    }
    this.errorMsg="Failed to Login";
    return false;
 
  }
}
