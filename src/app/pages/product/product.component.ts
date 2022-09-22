import { Component, OnInit } from '@angular/core';
import { ProductDataService } from 'src/app/Services/product-data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private productService:ProductDataService,private route:Router) { 
    interface TableContents{
    
    }
  }
  ProductData:any;
  ClothingData:any;
  SelectedItems:any=[];
  BadgeCount:number=0;

  

  ngOnInit(): void {
    //removedArrayofSelectedItemsfromCartComponent
    this.productService.RemovedList$.subscribe((data)=>{
      if(data){
        this.SelectedItems =  data;
        this.BadgeCount = this.SelectedItems.length
        console.log(this.SelectedItems,'from cart');
      }
      
    })
    //Getting Earphones data
    this.productService.getProductdata().subscribe((data)=>{
      this.ProductData = data;
      console.log(this.ProductData,'earphones data');
    })

    //Getting Clothing data
    this.productService.getProductdata2().subscribe((data)=>{
      this.ClothingData = data;
    })
  }

  addTocart(item:any){
    this.SelectedItems.push(item);
    this.BadgeCount = this.SelectedItems.length;
    console.log(this.SelectedItems);    
  }

  GotoCartPage(){
    this.productService.getSelectedItemsFromProduct(this.SelectedItems);
    this.route.navigate(['Pages/product/cart',{access:true}]);
  }


}
