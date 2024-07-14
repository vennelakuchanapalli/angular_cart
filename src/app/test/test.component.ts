import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss',
  providers : [ApiService]
})
export class TestComponent {

constructor(public apiservice : ApiService){}

userslist : any;

show(){
  this.apiservice.getData().subscribe((output)=>{
    this.userslist = output ;  
  })
}
}
