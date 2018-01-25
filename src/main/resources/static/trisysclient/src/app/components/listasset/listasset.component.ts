import { Component, OnInit } from '@angular/core';
import {AssetService} from '../../services/asset.service';
import {Asset} from '../../asset';
import {Router} from '@angular/router';

@Component({
  selector: 'app-listasset',
  templateUrl: './listasset.component.html',
  styleUrls: ['./listasset.component.css']
})
export class ListassetComponent implements OnInit {

  private assets:Asset[];

  constructor(private assetService:AssetService, private router:Router) { }

  ngOnInit() {
    this.assetService.getAssets().subscribe((assets)=>{console.log(assets);this.assets =assets;},(error)=>{console.log(error);})
     
  }

  deleteAsset(asset:Asset){
    this.assetService.deleteAsset(asset.id).subscribe((data)=>{
      this.assets.splice(this.assets.indexOf(asset),1);
    },(error)=>{console.log(error)});
  }
  updateAsset(asset:Asset){
    this.assetService.setter(asset);
    this.router.navigate(['/crudoperations']);
  }
  addAsset(){
    let asset = new Asset();
    this.assetService.setter(asset);
    this.router.navigate(['/crudoperations']);
  }

}
