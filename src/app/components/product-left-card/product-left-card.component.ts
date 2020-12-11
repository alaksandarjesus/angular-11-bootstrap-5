import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-left-card',
  templateUrl: './product-left-card.component.html',
  styleUrls: ['./product-left-card.component.scss']
})
export class ProductLeftCardComponent implements OnInit {

  @Input() item;
  constructor() { }

  ngOnInit(): void {
    
  }

}
