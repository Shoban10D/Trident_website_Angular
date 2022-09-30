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
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    MaterialsModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    PagesModule
  ],
  providers: [AuthServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
