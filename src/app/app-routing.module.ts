import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminCarComponent } from './Admin/admin-car/admin-car.component';
import { AdminClothingComponent } from './Admin/admin-clothing/admin-clothing.component';
import { AdminHeadphonesComponent } from './Admin/admin-headphones/admin-headphones.component';
import { AdminHomeComponent } from './Admin/admin-home/admin-home.component';
import { AdminGuardGuard } from './Authguards/admin-guard.guard';
import { AuthenticationGuard } from './Authguards/authentication.guard';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [ 
  {path:'',redirectTo:'register',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'admin-home',component:AdminHomeComponent,canActivate:[AdminGuardGuard]},
  {path:'admin-clothing',component:AdminClothingComponent},
  {path:'admin-earphone',component:AdminHeadphonesComponent},
  {path:'admin-car',component:AdminCarComponent},
  {path:'Pages',loadChildren: () =>import('/home/decoders/Desktop/Angular/AngularEcommerce/src/app/pages/pages.module').then((m) => m.PagesModule),}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
