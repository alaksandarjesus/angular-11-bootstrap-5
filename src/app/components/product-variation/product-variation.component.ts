import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-variation',
  templateUrl: './product-variation.component.html',
  styleUrls: ['./product-variation.component.scss']
})
export class ProductVariationComponent implements OnInit {

  @Input() variation;
  
  constructor() { }

  ngOnInit(): void {
  }

}
