import { Component, OnInit} from '@angular/core';
import { FormBuilder,FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  Register?:FormGroup;
  hide1 = true;
  hide2 = true;

  constructor(private fb:FormBuilder) { 
  }

  ngOnInit(): void {
    this.Register = this.fb.group({
      FirstName:['',Validators.required],
      Surname:['',Validators.required],
      Email:['',Validators.required],
      Password:['',[Validators.required]],
      ConfirmPassword:['',[Validators.required]]
    })
    
  }

  PasswordChanged(event:any){
    console.log(event);
  }


}
