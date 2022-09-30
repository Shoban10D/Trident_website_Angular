import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  logout(){
    localStorage.removeItem('SessionUser');
    localStorage.removeItem('UserData');
    this.route.navigate(['/login']);
  }
  changePWD(){
    this.route.navigate(['/Pages/change-pwd',{access:'true'}]);
  }

}
