import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http:HttpClient) { }

  url:string = "https://localhost:7239/api/person/getDetails"
  headers = { 'content-type': 'application/json'}

  getPerson():Observable<any>{
   return this.http.get(`${this.url}`,{'headers':this.headers})
  };

}
