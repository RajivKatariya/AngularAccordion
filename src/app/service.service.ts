import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";



@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private baseApiUrl="http://localhost:3000/Data";

  constructor(private http:HttpClient) { }

  getData(){
    return this.http.get(`${this.baseApiUrl}`);
  }
}
