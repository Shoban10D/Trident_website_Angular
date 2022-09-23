import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductDataService } from 'src/app/Services/product-data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private ActiveRoute:ActivatedRoute,private ProductService:ProductDataService) { }
  CartItems:any = [];
  TotalValue:number=0;

  ngOnInit(): void {
    let Access = this.ActiveRoute.snapshot.paramMap.get('access');
    if(Access){
      this.CartItems = this.ProductService.ToCart();
      console.log(this.CartItems);
      this.TotalValue=0;
      this.total();
    }        
  }

  QuantityInput(QuantityInput:any,item:any){
    
    let temp = Number(QuantityInput);
      item.price = item.DefaultPrice*temp;
    item.quantity = temp;
    this.ProductService.RemovedList$.next(this.CartItems);
    this.TotalValue = 0;
    this.total();
    
  }
  

  total(){
    for(let values of this.CartItems){
      this.TotalValue += values.price;
    }
    console.log(this.TotalValue);
  }

  RemoveFromCart(RemoveItem:any){
      this.CartItems.splice(this.CartItems.indexOf(RemoveItem),1);
      this.ProductService.RemovedList$.next(this.CartItems);
      this.TotalValue=0;
      this.total();      
  }

  AddQuantity(AddItem:any){
    AddItem.quantity+=1;
    AddItem.price+=AddItem.DefaultPrice;
    this.ProductService.RemovedList$.next(this.CartItems);
    this.TotalValue=0;
      this.total();
  }

  ReduceQuantity(ReduceItem:any){
    console.log(ReduceItem.quantity);
    if(ReduceItem.quantity<=1){
      this.CartItems.splice(this.CartItems.indexOf(ReduceItem),1);
      this.ProductService.RemovedList$.next(this.CartItems);
    }else if(ReduceItem.quantity>1){
      ReduceItem.quantity-=1;
      ReduceItem.price-=ReduceItem.DefaultPrice;
      this.ProductService.RemovedList$.next(this.CartItems);
    }
    this.TotalValue=0;
    this.total();    
  }

}
