import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { GoogleAuthProvider } from 'firebase/auth';
import { ProductDataService } from './product-data.service';

@Injectable({
  providedIn: 'root'
})
export class UserdetailsService {
  dbUserInfo$: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  LoginData:any=[];
  AllUserData:any=[];

  constructor(private fireAuth:AngularFireAuth, private route:Router, private toast:ToastrService,
              private ProductService:ProductDataService, private store:AngularFirestore) { }

  TempBH$: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  //getUser'sData
  getUserData(email:string,pwd:string){
    this.ProductService.getAlluserData().subscribe((data)=>{
      this.AllUserData = data.map((items:any)=>{
        let data = items.payload.doc.data();
        return data;
      })
      //setting userdata in local storage
      for(let i=0;i<this.AllUserData.length;i++){
        if(this.AllUserData[i].Email == email && this.AllUserData[i].Password == pwd){
          console.log(this.AllUserData[i])
          localStorage.setItem('UserData',JSON.stringify(this.AllUserData[i]));
          break;
        }
       }
   
    })    

  }

   //register
   registerUser(email:string,pws:string,Userdata:any){
    this.fireAuth.createUserWithEmailAndPassword(email,pws).then(()=>{
      alert("registration succesful");
      this.route.navigate(['/login']);
      return this.store.collection('/UserData').add(Userdata);
      
    },err=>{
      alert("Registration Failed");
    })      
  }


  //Login
  loginUser(email:string,pwd:string){
    this.fireAuth.signInWithEmailAndPassword(email,pwd).then(()=>{
     this.getUserData(email,pwd);
     
      localStorage.setItem('SessionUser',email);
      // localStorage.setItem('UserData',JSON.stringify(this.LoginData));
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
      localStorage.removeItem('UserData');
      localStorage.removeItem('GoogleToken');
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

    //ResetPasswordLink
    Resetpwd(email:string){
      this.fireAuth.sendPasswordResetEmail(email).then(()=>{
        this.toast.info('Reset password link has been sent to your e-mail');
        localStorage.removeItem('SessionUser');
        localStorage.removeItem('UserData');        
        this.route.navigate(['/login']);
      }, err=>{
        this.toast.error(err.message);
      })
    }

    //Google Login
    GoogleLogin(){
      this.fireAuth.signInWithPopup(new GoogleAuthProvider).then(res=>{
        this.route.navigate(['Pages/home']);
        localStorage.setItem('SessionUser','GoogleUser');
        localStorage.setItem('GoogleToken',JSON.stringify(res.user?.uid));
      })
    }
   
}
