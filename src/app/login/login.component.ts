import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder,FormGroup, Validators } from '@angular/forms';
import { UserdetailsService } from '../Services/userdetails.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Login!:FormGroup;
  user='1';
  constructor(private fb:FormBuilder,private service:UserdetailsService,private route:Router) { }
  LoginData:any=[];

  ngOnInit(): void {
  
    this.Login = this.fb.group({
      email:['',Validators.required],
      Password:['',Validators.required]
    })
  }
  get f():{[key:string]:AbstractControl}{
    return this.Login.controls;
  }
  Onsubmit(LogData:any){
    this.service.dbUserInfo$.subscribe((data)=>{
      this.LoginData = data;
      console.log(this.LoginData,'Login data from register');
    })
    if(this.LoginData.Email==LogData.email && this.LoginData.Password == LogData.Password){
      localStorage.setItem('SessionUser',this.user);  
      localStorage.setItem('UserData',JSON.stringify(this.LoginData));
      this.route.navigate(['/Pages/home']);
    }else{
      console.log('no');
    }
    
  }

  

}
