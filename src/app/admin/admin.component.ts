import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ProductDataService } from 'src/app/Services/product-data.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private fb:FormBuilder, private toast:ToastrService, private store:AngularFirestore, private service:ProductDataService) { }
  ProductAdd!:FormGroup;
  ProductAdd2!:FormGroup;
  EarphonesShow:boolean = false;
  earPhoneArray:any=[];
  panelOpenState = false;

  ngOnInit(): void {

    //Getting earphone dataBase
    this.getEarPhone();
   



    //Earphones
    this.ProductAdd = this.fb.group({
      id:[''],
      title:['',Validators.required],
      subtitle:['',Validators.required],
      price:['',Validators.required],
      DefaultPrice:[''],
      Description:['',Validators.required],
      quantity:[''],     
      img:['',Validators.required]
    })

    //Clothing
    this.ProductAdd2 = this.fb.group({
      id:[''],
      title:['',Validators.required],
      subtitle:['',Validators.required],
      price:['',Validators.required],
      DefaultPrice:[''],
      Description:['',Validators.required],
      quantity:[''],     
      img:['',Validators.required]
    })


  }

  getEarPhone(){
    this.service.getProductdata().subscribe((data)=>{
      this.earPhoneArray = data.map((items:any)=>{
        let data  = items.payload.doc.data()
        return data;
      })
    })
  }

  //delete from earphone database
 

  //earphone submit
  submit1(data:any){
    this.ProductAdd.controls['DefaultPrice'].setValue(data.price);
    this.ProductAdd.controls['quantity'].setValue(1);
    this.ProductAdd.controls['id'].setValue(this.store.createId());
    console.log(this.ProductAdd.value);
    this.toast.success('Earphone Product pushed succesfully');  
    return this.store.collection('/neckband').add(this.ProductAdd.value);   
  }

  //clothing submit
  submit2(data:any){
    this.ProductAdd2.controls['DefaultPrice'].setValue(data.price);
    this.ProductAdd2.controls['quantity'].setValue(1);
    this.ProductAdd2.controls['id'].setValue(this.store.createId());
    this.toast.success('Clothing Product pushed succesfully'); 
    return this.store.collection('/clothing').add(this.ProductAdd2.value);  
  }


}
