import { Component, OnInit } from '@angular/core';
import { ProductDataService } from 'src/app/Services/product-data.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private productService:ProductDataService,private route:Router,private toast:ToastrService) { 
  }
  ProductData:any;
  ProductDataPrice:any;
  ClothingData:any;
  ClothingDataPrice:any;
  SelectedItems:any=[];
  FromCart:boolean=false;
  BadgeCount:number=0; 

  ngOnInit(): void {
    //removedArrayofSelectedItemsfromCartComponent
    this.productService.RemovedList$.subscribe((data)=>{
      if(data){
        this.SelectedItems =  data;
        this.BadgeCount = this.SelectedItems.length;
        console.log(this.SelectedItems,'from cart');
        this.FromCart = true;
      }      
    })

    //Getting Earphones data
    this.productService.getProductdata().subscribe((data)=>{
      this.ProductData = data;
      this.ProductDataPrice = data;
      console.log(this.ProductData,'earphones data');
      console.log(this.ProductDataPrice,'Price');
    })

    //Getting Clothing data
    this.productService.getProductdata2().subscribe((data)=>{
      this.ClothingData = data;
    })
  }

  getBadgeCount(){
    for(let badgevalues of this.SelectedItems){
      this.BadgeCount += badgevalues.quantity;
    }
  }

  addTocart(item:any){
    if(this.FromCart==true){
      console.log("this data is from cart", this.SelectedItems);
    }

    //This section is for Quantity and Price Updating//
    let count:number=0;
    for(let values of this.SelectedItems){     
        if(item.subtitle==values.subtitle){
          count++;          
        }
    }
    if(count>0){
      this.toast.success('+1 Added cart');
      console.log("this selected item is added to card more than 1")
      item.quantity++;
      item.price+=item.DefaultPrice;
      console.log(item,'updated quantity value');
      console.log(this.SelectedItems);
    }else if(count==0){
      this.toast.success('Added to cart')
      this.SelectedItems.push(item);
    this.BadgeCount = this.SelectedItems.length;
    console.log(this.SelectedItems,'Items pushed');
    }
   
      
  }

  GotoCartPage(){
    this.productService.getSelectedItemsFromProduct(this.SelectedItems);
    this.route.navigate(['Pages/product/cart',{access:true}]);
    this.FromCart = false;
  }


}
