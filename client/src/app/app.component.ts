import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from './models/product';
import { Pagination } from './models/pagination';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title = 'Skinet';
  products: Product[] = [];
  constructor(private http:HttpClient){}

  ngOnInit(): void {
      this.http.get<Pagination<Product[]>>('http://localhost:5001/api/products?pageSize=50').subscribe((response:any)=> {
        this.products = response.data;
      },error=>
      {
        console.log(error);
      });
  }
}
