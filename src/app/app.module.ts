import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PagesModule } from './pages/pages.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PasswordValidatorComponent } from './shared/password-validator/password-validator.component';
import { AuthServiceService } from './Services/auth-service.service';
import { SharedModule } from './shared/shared.module';
import { MaterialsModule } from './MATERIALMODULE/materials/materials.module';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { AdminHomeComponent } from './Admin/admin-home/admin-home.component';
import { AdminCarComponent } from './Admin/admin-car/admin-car.component';
import { AdminHeadphonesComponent } from './Admin/admin-headphones/admin-headphones.component';
import { AdminClothingComponent } from './Admin/admin-clothing/admin-clothing.component';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AdminHomeComponent,
    AdminCarComponent,
    AdminHeadphonesComponent,
    AdminClothingComponent,
  ],
  imports: [
    MaterialsModule,
    SharedModule,
    ModalModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    PagesModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore())
  ],
  providers: [AuthServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
