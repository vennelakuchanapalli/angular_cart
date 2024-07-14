import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(public httpClient: HttpClient){}

  getData(){
    return this.httpClient.get("https://jsonplaceholder.typicode.com/users");
  }
}

//dependanc