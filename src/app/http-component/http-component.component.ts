import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-http-component',
  templateUrl: './http-component.component.html',
  styleUrl: './http-component.component.scss',
  providers: [ApiService]
})
export class HttpComponentComponent {

  usersList:any;

  constructor(public apiService : ApiService){}


  callApiServiceGetData(){
    this.apiService.getData().subscribe((res)=>{
      console.log(res)
      this.usersList = res;
      console.log("21 line")
    })
    console.log("22 line")
  }


  
}
