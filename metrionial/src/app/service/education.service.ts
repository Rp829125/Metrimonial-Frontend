import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  url:string = "https://localhost:7239/api/EducationAndCarrier"

  constructor(private http:HttpClient) { }

  getEducationDetailsById(personId:number):Observable<any>{
    return this.http.get(`${this.url}/${personId}`)
  }
}


