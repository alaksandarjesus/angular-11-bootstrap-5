import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-rating',
  templateUrl: './product-rating.component.html',
  styleUrls: ['./product-rating.component.scss']
})
export class ProductRatingComponent implements OnInit {

  @Input() rating;
  rated:any = [];
  unrated:any = [];

  constructor() { }

  ngOnInit(): void {
  this.rated = new Array(this.rating);
  this.unrated = new Array(5-this.rating);

  }

}
