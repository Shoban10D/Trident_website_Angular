import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthenticationGuard } from '../Authguards/authentication.guard';
import { ChangepwdComponent } from './changepwd/changepwd.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';
import { InventoryComponent } from './inventory/inventory.component';
import { AfterpayComponent } from './afterpay/afterpay.component';

const routes: Routes = [{path:'Pages/home',component:HomeComponent,canActivate:[AuthenticationGuard]},
                        {path:'Pages/change-pwd',component:ChangepwdComponent},
                        {path:'Pages/product', component:ProductComponent},
                        {path:'Pages/product/cart',component:CartComponent},
                        {path:'Pages/product/cart/payment',component:PaymentComponent},
                        {path:'Pages/inventory',component:InventoryComponent},
                         {path:'after-pay',component:AfterpayComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
