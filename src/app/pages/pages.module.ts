import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { ChangepwdComponent } from './changepwd/changepwd.component'
import { HeaderComponent } from '../shared/header/header.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialsModule } from '../MATERIALMODULE/materials/materials.module';
import { ProductComponent } from './product/product.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';
import { InventoryComponent } from './inventory/inventory.component';
import { ToastrModule } from 'ngx-toastr';

// import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
// import { environment } from 'src/environments/environment';
// import { provideAuth,getAuth } from '@angular/fire/auth';
// import { provideDatabase,getDatabase } from '@angular/fire/database';
// import { provideFirestore,getFirestore } from '@angular/fire/firestore';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from 'src/environments/environment';
import { AfterpayComponent } from './afterpay/afterpay.component';



@NgModule({
  declarations: [
    HomeComponent,
    ChangepwdComponent,
    HeaderComponent,
    ProductComponent,
    CartComponent,
    PaymentComponent,
    InventoryComponent,
    AfterpayComponent,
  ],
  imports: [
    SharedModule,
    IvyCarouselModule,
    MaterialsModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    PagesRoutingModule,
    ToastrModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    FormsModule,ReactiveFormsModule,

    // provideFirebaseApp(() => initializeApp(environment.firebase)),
    // provideAuth(() => getAuth()),
    // provideDatabase(() => getDatabase()),
    // provideFirestore(() => getFirestore())
  ]
})
export class PagesModule { }
