import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-best-selling-products',
  templateUrl: './best-selling-products.component.html',
  styleUrls: ['./best-selling-products.component.scss']
})
export class BestSellingProductsComponent implements OnInit {

 @Input() items;

  constructor() { }

  ngOnInit(): void {
    
  }

}
