import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonalService {

  constructor(private http:HttpClient) { }

  url:string = "https://localhost:7239/api/PersonalDetails"

getPersonalDetailsById(personId:number):Observable<any>{
  return this.http.get(`${this.url}/${personId}`)
}


}