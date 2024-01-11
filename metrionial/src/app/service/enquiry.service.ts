import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnquiryService {
   httpOption =  {
    headers: new HttpHeaders({
      'Cntent-Type': 'text',
})
   }

  constructor(private http:HttpClient) { }

  url:string = "https://localhost:7239/api/Enquries"


  postEnquiryService(data:any):Observable<any>{
    return this.http.post(`${this.url}`,data,this.httpOption)
  }

  getEnquiryService():Observable<any>{
    let data =  this.http.get(`${this.url}`)
   return data
  }

  DeleteEnquiryService(id:number):Observable<any>{
    return this.http.delete(`${this.url}/${id}`)
  }


}
