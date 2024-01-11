import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import {PersonService} from '../service/person.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
 
 
 constructor(private http:PersonService) {
  
  
 }
    

    imageArrey = ["../../assets/image1.webp","../../assets/image12.jpg","../../assets/image13.webp","../../assets/image14.jpg","../../assets/image15.jpg"]
    imgIndex:number = 0;
    private autoChangeInterval: any
    members:any[] = [];

    ngOnInit():void{
      this.setImage(this.imgIndex)
      this.autoChangeInterval = setInterval(()=> this.changeImage(), 3000)
      this.getMember()
    }

    ngOnDestroy(): void {
      clearInterval(this.autoChangeInterval)
    }
  

    changeImage(){
      this.imgIndex = (this.imgIndex + 1) % this.imageArrey.length
     
    }
    
     setImage(Index:number)
    {
       this.imgIndex = Index;
      }

  // Fetching Members Details Here


  getMember(){
    const data = this.http.getPerson().subscribe((data)=>{

    for(let x=0; x<=5; x++){
        this.members.push(data[x])
      }
      console.log(data)
      console.log(this.members)
    },
    err => console.log(err)
    )

  }
   

}
