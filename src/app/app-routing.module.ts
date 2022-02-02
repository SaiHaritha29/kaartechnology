import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'**', redirectTo:`s1/404`},
  {
    path:'service',
    component:LayoutComponent,
    children:[
      {
        path: '',
        loadChildren:() => import('./customer/customer.module').then(m=>m.CustomerModule)
      }    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
