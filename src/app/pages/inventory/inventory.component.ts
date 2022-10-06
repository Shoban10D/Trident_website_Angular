import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore';
@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

        Inventory!:FormGroup;

  constructor(private fb:FormBuilder, private storage:AngularFirestore) { }

  ngOnInit(): void {
    this.Inventory = this.fb.group({
      email:[''],
      name:['']
    })
  }
  submit(vale:any){
    vale.id = this.storage.createId();
    return this.storage.collection('/Products').add(vale);    
  }
}
