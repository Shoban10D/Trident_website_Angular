import { Component, OnInit } from '@angular/core';
import { UserdetailsService } from 'src/app/Services/userdetails.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  constructor(private service:UserdetailsService) { }

  ngOnInit(): void {
  }

  signout(){
    this.service.Signout();    
  }

}
