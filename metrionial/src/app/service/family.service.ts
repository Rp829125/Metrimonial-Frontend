import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FamilyService {

  url:string = "https://localhost:7239/api/FamilyDetails"
  constructor(private http:HttpClient) { }


  getFamilyDetailsById(personId:number):Observable<any>{
    return this.http.get(`${this.url}/${personId}`)
  }
}


