import { Component, OnInit } from '@angular/core';
import {PersonService}from '../service/person.service'

@Component({
  selector: 'app-bride-list',
  templateUrl: './bride-list.component.html',
  styleUrls: ['./bride-list.component.css']
})
export class BrideListComponent implements OnInit {

constructor(private http:PersonService){}
members:any[] = []

ngOnInit(): void {
    this.getBrideList();
}  

  getBrideList(){
    this.http.getPerson().subscribe((data)=>{
      this.members = data;
      console.log(data)
    },
    err=>console.log(err)
    )

  }

  viewDetails(id:number){
   
    console.log(id)
    
  }


}
