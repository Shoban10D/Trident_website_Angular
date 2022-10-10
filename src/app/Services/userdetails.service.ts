import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class UserdetailsService {
  dbUserInfo$: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(private fireAuth:AngularFireAuth, private route:Router, private toast:ToastrService) { }

   //register
   registerUser(email:string,pws:string){
    this.fireAuth.createUserWithEmailAndPassword(email,pws).then(()=>{
      alert("registration succesful");
      this.route.navigate(['/login']);
      
    },err=>{
      alert("Registration Failed");
    })      
  }


  //Login
  loginUser(email:string,pwd:string){
    this.fireAuth.signInWithEmailAndPassword(email,pwd).then(()=>{
      localStorage.setItem('SessionUser',email);
      this.toast.success('Login successfull');
      this.route.navigate(['Pages/home']); 
    },err=>{
      alert('Username / password is wrong')

    })

  }

  //signout
  Signout(){
    this.fireAuth.signOut().then(()=>{
      localStorage.removeItem('SessionUser');
      this.route.navigate(['/login']);
      this.toast.success('Log out successfull');
    },err=>{
      alert(err.message);
    })
  }

  //Login as Admin
  LoginasAdmin(email:string,pwd:string){

    if(email=='shobanraj49@gmail.com'&&pwd=='Shoban@2022'){
      this.fireAuth.signInWithEmailAndPassword(email,pwd).then(()=>{
        localStorage.setItem('SessionUser','Admin');
        this.route.navigate(['/admin-home']);
        this.toast.success('WELCOME ADMIN');
      },err=>{
        alert('Invalid Admin credentials');
            })
    }else{
      alert('Invalid Admin credentials'); 
    }

    }
   
}
