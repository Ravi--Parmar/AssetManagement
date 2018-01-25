import { Injectable } from '@angular/core';
import {Http, Response, Headers,RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { errorHandler } from '@angular/platform-browser/src/browser';
import {Asset} from '../asset';

@Injectable()
export class AssetService {
  private baseUrl:string='http://localhost:8081/api';
  private headers=new Headers({'Content-Type':'application/json'});
  private options = new RequestOptions({headers:this.headers});
  private asset:Asset;

  constructor(private _http:Http) { }
  getAssets(){
    console.log(this.baseUrl);
    return this._http.get(this.baseUrl+'/assets', this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
  }
  getAsset(id:Number){
    return this._http.get(this.baseUrl+'/asset/'+id, this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
  }
  deleteAsset(id:Number){
    return this._http.delete(this.baseUrl+'/asset/'+id, this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
  }
  addAsset(asset:Asset){
    return this._http.post(this.baseUrl+'/asset',JSON.stringify(asset),this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
  }
  updateAsset(asset:Asset){
    return this._http.put(this.baseUrl+'/asset',JSON.stringify(asset),this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
  }
  errorHandler(error:Response){
   return Observable.throw(error || "SERVER ERROR"); 
  }
  setter(asset:Asset){
    this.asset=asset;
  }
  getter(){
    return this.asset;
  }

}

