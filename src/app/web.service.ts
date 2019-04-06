import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscriber } from 'rxjs';
import { tap, map, filter } from 'rxjs/operators';
//import 'rxjs/Rx';
@Injectable({
  providedIn: 'root'
})
export class WebService {

  constructor(private http : HttpClient) { }
  getrestcountries() {
  
    return this.http.get("https://restcountries.eu/rest/v2/all");
  }
}
