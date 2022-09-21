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

@NgModule({
  declarations: [
    HomeComponent,
    ChangepwdComponent,
    HeaderComponent,
  ],
  imports: [
    SharedModule,
    MaterialsModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    PagesRoutingModule,
    ToastrModule.forRoot()
  ]
})
export class PagesModule { }
