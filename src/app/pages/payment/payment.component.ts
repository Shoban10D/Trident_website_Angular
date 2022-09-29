import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
Userdata:any;
RecieptName:string='';
TotalAmount:string='';
togglemode:boolean=false;
today: number = Date.now();
  constructor(private ActiveRoute:ActivatedRoute) { }

  ngOnInit(): void {
    //Setting Reciept Name
  let temp:any = localStorage.getItem('UserData');
  this.Userdata = JSON.parse(temp);
  this.RecieptName = this.Userdata.FirstName+" "+this.Userdata.Surname;
  console.log(this.Userdata);

  //Setting Total Payment
  let temp2:any = this.ActiveRoute.snapshot.paramMap.get('total');
  this.TotalAmount = temp2;
  console.log(temp2);

  //Setting Date
 
  }

}
