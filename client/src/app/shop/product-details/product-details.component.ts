import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/product';
import { ShopService } from '../shop.service';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  product? : Product;

  constructor(private productService : ShopService, private activatedRoute : ActivatedRoute, private bcService:BreadcrumbService) { }

  ngOnInit(): void {

    this.loadProduct()
  }

  loadProduct()
  {
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    if(id) this.productService.getProduct(+id).subscribe((result) => {
      this.product = result;
      this.bcService.set('@productDetails',this.product.name)
    } )

    
  }

}
