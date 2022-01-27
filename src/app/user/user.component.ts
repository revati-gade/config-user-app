import { Component, OnDestroy, OnInit } from '@angular/core';
import { AccessItem
 } from '../models/accessitem.model';
 import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
 
  accessArrList:AccessItem[]= [
    {id:1, itemName:'Transaction ID', enabled:true},
    {id:2, itemName:'Transaction Time', enabled:false},
    {id:3, itemName:'Original Transaction Id', enabled:false},
    {id:4, itemName:'Entity Name', enabled:false},
    {id:5, itemName:'Event Name', enabled:false},
    {id:6, itemName:'File Name', enabled:false},
    {id:7, itemName:'File Location', enabled:true},
    {id:8, itemName:'File Size', enabled:false},  
    {id:9, itemName:'Transaction State', enabled:false},
    {id:10, itemName:'Transaction Log', enabled:true},
    {id:11, itemName:'Transaction User Id', enabled:false},
    {id:12, itemName:'Transaction AMZ Request ID', enabled:false},
    {id:13, itemName:'Application Short Name', enabled:false},
    {id:14, itemName:'Asset ID', enabled:false},
    {id:15, itemName:'Protocol', enabled:false},
    {id:16, itemName:'Flow Direction', enabled:false},
    {id:17, itemName:'Pattern', enabled:true},
    {id:18, itemName:'Replay', enabled:false},
    {id:19, itemName:'Export', enabled:false}
  ];

  displayedColumns: string[] = ['select', 'module'];
  constructor() { }

  ngOnInit(): void {
  }

  updateAccessList(row:AccessItem){
    let updatedItem= this.accessArrList.find(this.findIndexToUpdate,row.id);
// let ind =this.accessArrList.indexOf(updatedItem);
// this.accessArrList[ind].enabled=row.enabled;


  }

  findIndexToUpdate(newItem:AccessItem) { 
    // return newItem.id === this;
}
onCancel() {

}

onSave() {

}
}
