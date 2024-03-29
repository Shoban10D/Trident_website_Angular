import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserdetailsService } from '../../Services/userdetails.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-changepwd',
  templateUrl: './changepwd.component.html',
  styleUrls: ['./changepwd.component.css']
})
export class ChangepwdComponent implements OnInit {
EmailConfirm!:FormGroup;

  constructor(private fb:FormBuilder,private route:ActivatedRoute,private routing:Router,
     private toast:ToastrService, private UserService:UserdetailsService) { }

  UserData:any;
  read:boolean = false;
  user:string|any;
  TimerClick:number=0;
  Minute: number = 1;
  Seconds: number = 60;
  count: number = 0;
  interval: any;
  Hide:boolean = false;
  SWITCH:boolean = false;
  pwdhide1 = true;
  pwdhide2 = true;
  pwdChecker:string='';
  SubmitHide:boolean = false;
  Cpwd:string = '';

  ngOnInit(): void {
   let AccessFromHome = this.route.snapshot.paramMap.get('access');
   if(AccessFromHome){
   let JsonUserData:any = localStorage.getItem('UserData');
   this.UserData = JSON.parse(JsonUserData);
   console.log(this.UserData);
   this.user = this.UserData.FirstName+' '+this.UserData.Surname;
   this.read = true;
   }
   console.log(this.UserData,'UserDetails');

    this.EmailConfirm = this.fb.group({
      Username:[this.UserData?this.user:'',Validators.required],
      Email:[this.UserData?this.UserData?.Email:'',Validators.required]
    })
  }

  resetpwd(email:string){
    this.UserService.Resetpwd(email);    
  }

  // switch(OTP:any){
  //   if(OTP){
  //     this.SWITCH = true;
  //     clearInterval(this.interval);
  //   }else{
  //     // this.toast.error('OTP invalid')
  //   }
    
  // }
  // ConfirmPwd(value:any){
  //   this.Cpwd = value;
  // }

  // PasswordChanged(event:any){
  //   this.pwdChecker = event;
  //   console.log(this.pwdChecker);
  // }
  // onSubmit(){
  //   if(this.pwdChecker == this.Cpwd){
  //     if(this.SubmitHide==true){
  //       var FromLocalStorage = JSON.parse(localStorage.getItem("UserData")||'{}');
  //       FromLocalStorage.Password = this.pwdChecker;
  //       FromLocalStorage.ConfirmPassword = this.pwdChecker;        
  //       localStorage.setItem("UserData",JSON.stringify(FromLocalStorage));
  //       // this.toast.success('Password changed succesfully')
  //       this.routing.navigate(['/login']);
  //     }else{
  //       // this.toast.error('Please Satisfy the validation')
  //     }
      
  //   }else{
  //     // this.toast.error('Passwords do not match')
  //   }
  // }

  // MainPassword(data:any){
  //   console.log(data,'from password-validator');
  //   if(data.length==true && data.digits==true && data.lower==true && data.upper==true && data.nonWords==true && data.nospace==false){
  //         this.SubmitHide = true;        
  //   }else{
  //     this.SubmitHide = false;
  //   }
  // }

  // startTimer() {
  //   this.Hide = true;
  //   this.TimerClick++;

  //   if(this.TimerClick==1){
  //     this.interval = setInterval(() => {
  //       if (this.Minute > 0) {
  //         this.Seconds--;
  //         if (this.Seconds == 0) {
  //           this.Seconds = 60;
  //           this.Minute--;
  //         }
  //       } else if (this.Minute == 0) {
  //         console.log(this.count);
  //         if (this.count < 60) {
  //           this.Seconds--;
  //         } else {
  //           clearInterval(this.interval);
  //             alert("OTP expired")
  //           this.routing.navigate(['Pages/home']);
  //         }
  //         this.count++;
  //       }
  //     }, 10);
  //   }
    
  // }
  

}
