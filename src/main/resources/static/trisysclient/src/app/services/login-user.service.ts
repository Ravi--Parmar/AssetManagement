import { Injectable } from '@angular/core';
import {Http, Response, Headers,RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { errorHandler } from '@angular/platform-browser/src/browser';
import {LoginUser} from '../login-user';

@Injectable()
export class LoginUserService {
  private baseUrl:string='http://localhost:8081/api';
  private headers=new Headers({'Content-Type':'application/json'});
  private options = new RequestOptions({headers:this.headers});
  private loginUser:LoginUser;

  constructor(private _http:Http) { }
  getLoginUsers(){
    console.log(this.baseUrl);
    return this._http.get(this.baseUrl+'/loginusers', this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
  }
  errorHandler(error:Response){
   return Observable.throw(error || "SERVER ERROR"); 
  }
  setter(loginUser:LoginUser){
    this.loginUser=loginUser;
  }
  getter(){
    return this.loginUser;
  }

}



