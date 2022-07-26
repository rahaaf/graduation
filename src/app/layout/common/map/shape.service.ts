import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShapeService {
  constructor(private http: HttpClient) { }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  getStateShapes() {
    return this.http.get('');
  }
}
