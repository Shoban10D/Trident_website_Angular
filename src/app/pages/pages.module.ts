import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { ChangepwdComponent } from './changepwd/changepwd.component'
import { HeaderComponent } from '../shared/header/header.component';
import { ToastrModule } from 'ngx-toastr';
import { SharedModule } from '../shared/shared.module';
import { MaterialsModule } from '../MATERIALMODULE/materials/materials.module';
import { ProductComponent } from './product/product.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';

@NgModule({
  declarations: [
    HomeComponent,
    ChangepwdComponent,
    HeaderComponent,
    ProductComponent,
    CartComponent,
    PaymentComponent,
  ],
  imports: [
    SharedModule,
    IvyCarouselModule,
    MaterialsModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    PagesRoutingModule,
    ToastrModule.forRoot()
  ]
})
export class PagesModule { }
