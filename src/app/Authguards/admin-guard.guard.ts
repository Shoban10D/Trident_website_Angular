import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from '../Services/auth-service.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardGuard implements CanActivate {
  constructor(private auth:AuthServiceService, private route:Router){}
  canActivate():boolean{
    let role = localStorage.getItem('SessionUser');    
    if(role!='Admin'){      
      alert('Stop trying to login as Admin or else your account will be de-activated');
      this.route.navigate(['/login']);
    }
    return this.auth.getAdminToken();
  } 
  
}
