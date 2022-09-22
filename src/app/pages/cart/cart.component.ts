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

  ngOnInit(): void {
    let Access = this.ActiveRoute.snapshot.paramMap.get('access');
    if(Access){
      this.CartItems = this.ProductService.ToCart();
      console.log(this.CartItems);
    }        
  }

  RemoveFromCart(RemoveItem:any){
    this.CartItems.splice(this.CartItems.indexOf(RemoveItem),1);
    this.ProductService.RemovedList$.next(this.CartItems);
  }

}
