import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordValidatorComponent } from './password-validator/password-validator.component';
import { MaterialsModule } from '../MATERIALMODULE/materials/materials.module';

@NgModule({
  declarations: [PasswordValidatorComponent],
  imports: [CommonModule,MaterialsModule],
  exports:[PasswordValidatorComponent]
})
export class SharedModule { }
