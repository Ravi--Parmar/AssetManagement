import { Component, OnInit } from '@angular/core';
import{Asset} from '../../asset';
import {AssetService} from '../../services/asset.service';
import{Router} from '@angular/router';
import {LoginUserService} from '../../services/login-user.service';

@Component({
  selector: 'app-asset-form',
  templateUrl: './asset-form.component.html',
  styleUrls: ['./asset-form.component.css']
})
export class AssetFormComponent implements OnInit {
  private asset:Asset;
  private errorMsg:string;

  constructor(private assetService:AssetService,private loginUserService:LoginUserService, private router:Router) { }

  ngOnInit() {
    this.asset= this.assetService.getter();
  }
  processForm(){
    if(this.asset==undefined || this.asset.name==undefined ||this.asset.description==undefined || this.asset.status==undefined ){
      this.errorMsg = "All fields are mandatory";
      this.router.navigate(['/crudoperations']);
      return ;
    }
    if(this.asset.id==undefined){
      this.asset.createdDateTime = new Date();
      this.asset.createdBy=this.loginUserService.getter().emailId;
      this.asset.deleted=false;
      this.assetService.addAsset(this.asset).subscribe((asset)=>{
        console.log(asset);
        this.router.navigate(['/listassets']);
      },(error)=>{
        console.log(error);
      });
    }
    else {
      this.asset.updatedDateTime = new Date();
      this.asset.updatedBy=this.loginUserService.getter().emailId;
      this.asset.deleted=false;
      this.assetService.updateAsset(this.asset).subscribe((asset)=>{
        console.log(asset);
        this.router.navigate(['listassets']);
      },(error)=>{
        console.log(error);
      });
    }
  }

}
