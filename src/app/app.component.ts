import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cart';
  username = 'Welcome Vennela!';
  productname: any = '';
  productcost: any = '';
  isshowenable = true;
  name1: any ='';
  cost1: any = '';
  cartListVariable: any = [];
  productList = [
    {
      name: "Mercedes",
      cost: "1 crore"
    },
    {
      name: "BMW",
      cost: "2 crore"
    },
    {
      name: "Audi",
      cost: "1.5 crore"
    },
    {
      name: "Lamborghini",
      cost: "5 crore"
    },
    {
      name: "Ferrari",
      cost: "4 crore"
    }
  ];
  isEditClicked: boolean =false;
  productIdx: any;
  addToProductlist() {
    this.productList.push(
      {
        name: this.productname,
        cost: this.productcost
      }
    );
  }
  update(){
    this.productList[this.productIdx].name= this.productname;
    this.productList[this.productIdx].cost= this.productcost;
    this.isEditClicked= false;
    this.productname= "";
    this.productcost = "";
  }
  edit(i:any){
    this.isEditClicked= true;
    this.productIdx= i;
    this.productname = this.productList[i].name;
    this.productcost =this.productList[i].cost
  }
  addToCart(i:any) {
    this.cartListVariable.push({
     name1: this.productList[i].name,
    cost1: this.productList[i].cost
    });
  }
  removeFromCart(i: any) {
    this.cartListVariable.splice(i, 1);
  }
}