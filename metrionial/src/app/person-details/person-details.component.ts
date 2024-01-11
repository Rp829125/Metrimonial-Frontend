import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {FormGroup,FormControl, Validators} from '@angular/forms'


import {PersonService } from '../service/person.service'
import {PersonalService } from '../service/personal.service'
import {FamilyService } from '../service/family.service'
import {EducationService } from '../service/education.service'
import {ReligiousService } from '../service/religious.service'
import {LocationService } from '../service/location.service'
import {EnquiryService} from '../service/enquiry.service'
import { HttpBackend } from '@angular/common/http';




@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
})
export class PersonDetailsComponent implements OnInit {

  personId!:number 

  person:any ={};
  pesonalDetails:any ={};
  family:any ={};
  education:any ={};
  loaction:any ={}
  religion:any = {}

enquireshown:boolean = false



constructor(private route:ActivatedRoute, 
   private personService:PersonService,
   private personalService: PersonalService,
   private familyService: FamilyService,
   private educationServices: EducationService,
   private religionServices: ReligiousService,
   private LocationServices:LocationService,
   private enquiryService:EnquiryService
   ){}
  // ngOnChanges(changes: SimpleChanges): void {
  //   this.gettingIdFromRoute()
  //   this.getPersonById()
  //   this.getPersonalDetailsById()
  //   this.getFamilyDetailsById()
  //   this.getRiligionDetailsById()
  //   this.getLocationDetailsById()
  //   this.getEducationDetailsById()
  // }




ngOnInit(): void {
  this.gettingIdFromRoute()
  this.getPersonById()
  this.getPersonalDetailsById()
  this.getFamilyDetailsById()
  this.getRiligionDetailsById()
  this.getLocationDetailsById()
  this.getEducationDetailsById()
 
    }

gettingIdFromRoute(){
  
  let id = this.route.snapshot.paramMap.get("id");
  this.personId = Number(id);

}

getPersonById(){
 
  this.personService.getPersonDetailsById(this.personId).subscribe(data =>{
    this.person = data
      // console.log(data)
  },
  err => console.log(err)
  )
}

getPersonalDetailsById(){
  this.personalService.getPersonalDetailsById(this.personId).subscribe(data =>{
    this.pesonalDetails = data
    //  console.log(data)
  },
  err => console.log(err)
  )
}


getFamilyDetailsById(){
  this.familyService.getFamilyDetailsById(this.personId).subscribe(data =>{
    this.family = data
    // console.log(data)
  },
  err => console.log(err)
  )
}

getRiligionDetailsById(){
  this.religionServices.getPersonalDetailsById(this.personId).subscribe(data =>{
    this.religion = data
    //  console.log(data)
  },
  err => console.log(err)
  )
}

getLocationDetailsById(){
  this.LocationServices.getLocationDetailsById(this.personId).subscribe(data =>{
    this.loaction = data
    //  console.log(data)
  },
  err => console.log(err)
  )
}

getEducationDetailsById(){
  this.educationServices.getEducationDetailsById(this.personId).subscribe(data =>{
    this.education = data
    //  console.log(data)
  },
  err => console.log(err)
  )
}

intrestedClick(){
  this.enquireshown = true
  
}

enquiryForm = new FormGroup({
  name: new FormControl(''),
  phone: new FormControl(''),
  email: new FormControl(''),
  gender: new FormControl(''),
  city: new FormControl(''),

})




submitEnquireData(){
let data = {
      name:this.enquiryForm.value.name,
      phone:this.enquiryForm.value.phone,
      email:this.enquiryForm.value.email,
      gender:this.enquiryForm.value.gender,
      city:this.enquiryForm.value.city,
      intrestedProfileName:this.person.firstName,
      intrestedProfileId:this.person.id
    }

    // const jsonData = JSON.stringify(data) 

      console.log(data)

  this.enquiryService.postEnquiryService(data).subscribe(data =>console.log(data))
  this.enquireshown = false
  
}

cancelEnquireform(){
  this.enquireshown = false
}



}





