import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ListassetComponent } from './components/listasset/listasset.component';
import { AssetFormComponent } from './components/asset-form/asset-form.component';
import { RouterModule, Routes} from '@angular/router';
import {AssetService} from './services/asset.service';
import {HttpModule } from '@angular/http';
import {FormsModule} from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';

import {LoginUserService} from './services/login-user.service';

const appRoutes : Routes=[
  {path:'listassets',component:ListassetComponent},
  {path:'crudoperations',component:AssetFormComponent},
  { path: '',  component: LoginComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    ListassetComponent,
    AssetFormComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    HttpModule,
    FormsModule,
    BrowserModule
  ],
  providers: [AssetService,LoginUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }