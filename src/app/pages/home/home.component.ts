import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppModule } from 'src/app/app.module';
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
    let AdminUSer = localStorage.getItem('SessionUser');
    let googleUser = localStorage.getItem('GoogleToken');
    if(googleUser){
      alert("Google users cannot change your password here!")
    }else if(AdminUSer=='shobanraj49@gmail.com'){
      alert('Admin cannot change password');      
    }else{
      this.route.navigate(['/Pages/change-pwd',{access:'true'}]);
    }
  
  }

}
