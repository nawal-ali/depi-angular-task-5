import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  baseUrl = 'https://full.faedg.com/public/api';
  constructor(private http : HttpClient) { }

  products(){
    return this.http.get(`${this.baseUrl}/products`)
  }
}
