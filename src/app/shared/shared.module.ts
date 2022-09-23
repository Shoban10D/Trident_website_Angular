import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordValidatorComponent } from './password-validator/password-validator.component';
import { MaterialsModule } from '../MATERIALMODULE/materials/materials.module';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [PasswordValidatorComponent, FooterComponent],
  imports: [CommonModule,MaterialsModule],
  exports:[PasswordValidatorComponent,FooterComponent]
})
export class SharedModule { }
