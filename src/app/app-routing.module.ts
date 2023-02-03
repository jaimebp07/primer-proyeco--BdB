import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer-components/customer/customer.component';
import { RootPathComponent } from './root/root-path/root-path.component';

const routes: Routes = [
  // {path: '', component: }
  {path: '', component: RootPathComponent},
  {path: 'addcustomer', component: CustomerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
