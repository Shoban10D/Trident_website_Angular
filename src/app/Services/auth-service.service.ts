import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { }

  getToken():any{
    return localStorage.getItem('SessionUser');
  }

  getAdminToken():any{
    return localStorage.getItem('SessionUser');
  }

 
}
