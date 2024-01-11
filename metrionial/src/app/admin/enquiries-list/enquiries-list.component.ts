import { Component,OnChanges,OnInit, SimpleChanges } from '@angular/core';

import{EnquiryService}from '../../service/enquiry.service'

@Component({
  selector: 'app-enquiries-list',
  templateUrl: './enquiries-list.component.html',
  styleUrls: ['./enquiries-list.component.css']
})
export class EnquiriesListComponent implements OnInit, OnChanges{
  constructor(private getEnquiryData:EnquiryService) {
  
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.gettingEnquiryData()
  }
    ngOnInit(): void {  
      this.gettingEnquiryData()
    }
  
  
  enquiryData:any[] = []
  
  gettingEnquiryData(){
    this.getEnquiryData.getEnquiryService().subscribe((data:any) =>{
      this.enquiryData = data
      console.log(data)
    },
    err=>console.log(err)
    )
  }

     deleteEnquiryData(id:number){
    this.getEnquiryData.DeleteEnquiryService(id).subscribe(data =>{
      // console.log(data)
      this.gettingEnquiryData()
    },
    err=>console.log(err)
    )
    
  }


  
  }