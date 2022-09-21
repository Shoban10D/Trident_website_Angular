import { Component, OnInit} from '@angular/core';
import { AbstractControl, FormBuilder,FormGroup, Validators} from '@angular/forms';
import { UserdetailsService } from '../Services/userdetails.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  Register!:FormGroup;
  pwdChecker:string='';
  SubmitHide:boolean = false;
  hide1 = true;
  hide2 = true;


  constructor(private fb:FormBuilder,private service:UserdetailsService,private route:Router) { 
  }

  ngOnInit(): void {
    this.Register = this.fb.group({
      FirstName:['',Validators.required],
      Surname:['',Validators.required],
      Email:['',[Validators.required,Validators.email]],
      Password:['',[Validators.required]],
      ConfirmPassword:['',[Validators.required]]
    },{validator:this.ConfirmPasswordChecker})
    
  }
  ConfirmPasswordChecker(control:AbstractControl):{[key:string]:boolean}|null{
    const pwd = control.get('Password');
    const Cpwd = control.get('ConfirmPassword');
    return pwd && Cpwd && pwd.value != Cpwd.value?{'MisMatch':true}:null;
  }

  get f(): { [key: string]: AbstractControl } {
    return this.Register.controls;
  }
  PasswordChanged(event:any){
    this.pwdChecker = this.Register?.get('Password')?.value;
  }
  MainPassword(data:any){
    console.log(data,'from password-validator');
    if(data.length==true && data.digits==true && data.lower==true && data.upper==true && data.nonWords==true && data.nospace==false){
      this.SubmitHide = true;      
    }else{
      this.SubmitHide = false;
    }
  }
  onSubmit(UserData:any){
    this.route.navigate(['/login']);
    this.service.dbUserInfo$.next(UserData);
  }


}
