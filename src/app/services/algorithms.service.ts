import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlgorithmsService {

  constructor(private http:HttpClient) {

   }
   getOrder(): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/api/getOrder')

}

}
