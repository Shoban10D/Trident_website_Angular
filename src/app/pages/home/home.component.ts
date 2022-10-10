import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserdetailsService } from 'src/app/Services/userdetails.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route:Router, private service:UserdetailsService) { }

  ngOnInit(): void {
  }

  logout(){
    this.service.Signout();
  }
  changePWD(){
    this.route.navigate(['/Pages/change-pwd',{access:'true'}]);
  }

}
