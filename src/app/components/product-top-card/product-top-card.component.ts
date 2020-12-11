import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-top-card',
  templateUrl: './product-top-card.component.html',
  styleUrls: ['./product-top-card.component.scss']
})
export class ProductTopCardComponent implements OnInit {

  @Input() item;
  
  constructor() { }

  ngOnInit(): void {
  }

}
