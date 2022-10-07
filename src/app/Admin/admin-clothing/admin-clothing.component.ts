import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ProductDataService } from 'src/app/Services/product-data.service';

@Component({
  selector: 'app-admin-clothing',
  templateUrl: './admin-clothing.component.html',
  styleUrls: ['./admin-clothing.component.css']
})
export class AdminClothingComponent implements OnInit {

  constructor(private fb:FormBuilder, private toast:ToastrService, private store:AngularFirestore, private service:ProductDataService) { }
  ProductAdd2!:FormGroup;


  ngOnInit(): void {
    this.ProductAdd2 = this.fb.group({
      title:['',Validators.required],
      subtitle:['',Validators.required],
      price:['',Validators.required],
      DefaultPrice:[''],
      Description:['',Validators.required],
      quantity:[''],     
      img:['',Validators.required]
    })
  }


  //clothing submit
  submit2(data:any){
    this.ProductAdd2.controls['DefaultPrice'].setValue(data.price);
    this.ProductAdd2.controls['quantity'].setValue(1);
   
    this.toast.success('Clothing Product pushed succesfully'); 
    return this.store.collection('/clothing').add(this.ProductAdd2.value);  
  }

}
