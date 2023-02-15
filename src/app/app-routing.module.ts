import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer-components/customer/customer.component';
import { FinancialComponent } from './financial-components/financial/financial.component';
import { RootPathComponent } from './root/root-path/root-path.component';

const routes: Routes = [
  // {path: '', component: }
  {path: '', component: RootPathComponent},
  {path: 'addcustomer', component: CustomerComponent},
  {path: 'addcustomerfinancial', component: FinancialComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}