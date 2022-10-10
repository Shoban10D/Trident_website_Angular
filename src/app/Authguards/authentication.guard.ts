import { Injectable } from '@angular/core';
import {CanActivate} from '@angular/router';
import { AuthServiceService } from '../Services/auth-service.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(private AuthService:AuthServiceService,private route:Router){}

  canActivate():boolean {
    if(!this.AuthService.getToken()){
      this.route.navigate(['/login']);
    }     
      return this.AuthService.getToken();
  }
      
 
  
  
}
