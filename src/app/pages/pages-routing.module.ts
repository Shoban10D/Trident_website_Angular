import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthenticationGuard } from '../authentication.guard';
import { ChangepwdComponent } from './changepwd/changepwd.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [{path:'Pages/home',component:HomeComponent,canActivate:[AuthenticationGuard]},
                        {path:'Pages/ChangePwd',component:ChangepwdComponent},
                        {path:'Pages/product', component:ProductComponent},
                        {path:'Pages/product/cart',component:CartComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
