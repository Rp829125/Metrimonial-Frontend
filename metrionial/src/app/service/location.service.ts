import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  url:string = "https://localhost:7239/api/Location"
  constructor(private http:HttpClient) { }


  getLocationDetailsById(personId:number):Observable<any>{
    return this.http.get(`${this.url}/${personId}`)
  }


}
