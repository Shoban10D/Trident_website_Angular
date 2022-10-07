import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ProductDataService } from 'src/app/Services/product-data.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-admin-headphones',
  templateUrl: './admin-headphones.component.html',
  styleUrls: ['./admin-headphones.component.css']
})
export class AdminHeadphonesComponent implements OnInit {

  constructor(private fb:FormBuilder, private toast:ToastrService, private store:AngularFirestore, private service:ProductDataService,private modalservice: BsModalService) { }
  ProductAdd!:FormGroup;
  ProductEdit!:FormGroup;
  EarphonesShow:boolean = false;
  earPhoneArray:any=[];
  panelOpenState = false;
  bsModalRef!:BsModalRef;
  title:any;
  price:number=0;

  

  ngOnInit(): void {

   
    //Getting earphone dataBase
    this.getEarPhone();

    //helllo
    

    //Earphones
    this.ProductAdd = this.fb.group({
      title:['',Validators.required],
      subtitle:['',Validators.required],
      price:['',Validators.required],
      DefaultPrice:[''],
      Description:['',Validators.required],
      quantity:[''],     
      img:['',Validators.required]
    })

    

    //editear
    // this.ForEdit();
  }
  EditForm:any={
      title:'',
      subtitle:'',
      price:0,
      DefaultPrice:0,
      Description:'',
      quantity:1,
      img:''
  }

  // ForEdit(data?:any){

  //   this.ProductEdit = this.fb.group({
  //     title:[data?data.title:'',Validators.required],
  //     subtitle:[data?data.subtitle:'',Validators.required],
  //     price:[data?data.price:'',Validators.required],
  //     DefaultPrice:[data?data.price:'',Validators.required],
  //     Description:[data?data.Description:'',Validators.required],
  //     quantity:[1],  
  //     img:[data?data.img:'',Validators.required],
     
  //   })

  // }

  getEarPhone(){
    this.service.getProductdata().subscribe((data)=>{
      this.earPhoneArray = data.map((items:any)=>{
        let data  = items.payload.doc.data();
        data.id = items.payload.doc.id;
        return data;
      })
    })
    console.log(this.earPhoneArray,"-----<<<<");
  }

    //delete from earphone database
    delete(data:any){
      return this.store.doc('/neckband/'+data.id).delete();
    }
  
    //edit for earphone 
    editEar(data:any,template:any){
      this.EditForm = data;
      console.log(this.EditForm);
      // this.ForEdit(data);
      this.bsModalRef = this.modalservice.show(template,{
        ignoreBackdropClick: false,
        class: 'modal-md custom-modal-content',
      })           
    }

     //earphone submit
  submit1(data:any){
    this.ProductAdd.controls['DefaultPrice'].setValue(data.price);
    this.ProductAdd.controls['quantity'].setValue(1);

    console.log(this.ProductAdd.value);
    this.toast.success('Earphone Product pushed succesfully');  
    return this.store.collection('/neckband').add(this.ProductAdd.value);   
  }


  //editSubmit
  Submit2(id:any){
    console.log(id,this.EditForm);
    this.store.doc('/neckband/'+id).update(this.EditForm);
 
  }
   

}
