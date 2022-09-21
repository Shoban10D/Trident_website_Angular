import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthenticationGuard } from '../authentication.guard';
import { ChangepwdComponent } from './changepwd/changepwd.component';

const routes: Routes = [{path:'Pages/home',component:HomeComponent,canActivate:[AuthenticationGuard]},
                        {path:'Pages/ChangePwd',component:ChangepwdComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
