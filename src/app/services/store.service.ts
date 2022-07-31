import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class StoreService {

    constructor(private http: HttpClient) {
    }

    allstores(): Observable<any> {
        return this.http.get('http://127.0.0.1:8000/api/warehouses/index')

    }

    createStore(obj: any): Observable<any> {
        let object = {
            district: 'homs',
            address: "homs-babaAmr",
            total_space: 500,
            longitude: 200.13,
            latitude: 234,
            avg_sales: null
        }
        return this.http.post('http://127.0.0.1:8000/api/warehouses',object)
    }
  deleteStore(id: number): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/api/warehouses/delete/' + id)
  }
  editStore(id: number, obj: any) {

    let object = {
        district: 'alepoo',
        address: "aleppo453",
        total_space: 300,
        longitude: 200.13,
        latitude: 234,
        avg_sales: null
    }
    return this.http.post('http://127.0.0.1:8000/api/warehouses/' + id, object)

  }
}



