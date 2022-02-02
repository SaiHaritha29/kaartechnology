import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesorderComponent } from './salesorder/salesorder.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'salesorder',
    component: SalesorderComponent
  },
  {
    path:'invoice',
    component: InvoiceComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent
  },
]

@NgModule({
  declarations: [
    SalesorderComponent,
    InvoiceComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class CustomerModule { }
