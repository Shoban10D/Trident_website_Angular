import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductDataService {
  RemovedList$: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(private http:HttpClient) { }

  Items:any=[];
  
  getProductdata(){
    return this.http.get('http://localhost:3000/neckbands');
  }
  getProductdata2(){
    return this.http.get('http://localhost:3000/clothing')
  }
  
  getSelectedItemsFromProduct(selectedItem?:any){
    this.Items = selectedItem;
  }
  ToCart(){
    return this.Items;
  }

}
