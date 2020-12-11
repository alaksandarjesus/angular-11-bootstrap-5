import { Component, OnInit, Input } from '@angular/core';
import {style, state, animate, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-trending-products',
  templateUrl: './trending-products.component.html',
  styleUrls: ['./trending-products.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [   // :enter is alias to 'void => *'
        style({opacity:0}),
        animate(1500, style({opacity:1})) 
      ]),
      transition(':leave', [   // :leave is alias to '* => void'
        animate(1500, style({opacity:0})) 
      ])
    ])
  ]
})
export class TrendingProductsComponent implements OnInit {

  @Input() items;
  titles = ['Best Sellers', 'Featured Products', 'On Sale'];
  show = this.titles[0];

  constructor() { }

  ngOnInit(): void {
  }

  onTabClick(title){
    this.show = title;
  }
}
