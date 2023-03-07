import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';
@Injectable({
  providedIn: 'root'
})
export class ProductDataService {
  RemovedList$: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(private http:HttpClient, private store:AngularFirestore) { }

  Items:any=[];
  
  getProductdata(){

    // return this.http.get('http://localhost:3000/neckbands');
    return this.store.collection('/neckband').snapshotChanges();

  }
  getProductdata2(){
    return this.store.collection('/clothing').snapshotChanges();
    // return this.http.get('http://localhost:3000/clothing')
  }
  
  getSelectedItemsFromProduct(selectedItem:any){
    this.Items = selectedItem;
  }
  ToCart(){
    return this.Items;
  }

  getAlluserData(){
    return this.store.collection('/UserData').snapshotChanges();
  }


}
