import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReligiousService {

  url:string = "https://localhost:7239/api/Riligious"
  constructor(private http:HttpClient) { }

  getPersonalDetailsById(personId:number):Observable<any>{
    return this.http.get(`${this.url}/${personId}`)
  }
  
}
