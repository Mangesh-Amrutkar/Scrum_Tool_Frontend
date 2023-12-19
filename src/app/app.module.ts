import { NgModule, createComponent } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CreateComponent } from './create/create.component'
import { Route, RouterModule, Routes } from '@angular/router';

const routes: Routes=[
  {
    component:UserloginComponent,
    path:'login'
  },

  {
    component:CreateComponent,
    path:'create'
  }
];
@NgModule({
  declarations: [
    AppComponent,
    UserloginComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent],

  exports: [RouterModule],
})
export class AppModule { }
