import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-trending-items',
  templateUrl: './trending-items.component.html',
  styleUrls: ['./trending-items.component.scss']
})
export class TrendingItemsComponent implements OnInit {

  @Input() items;
  constructor() { }

  ngOnInit(): void {
  }

}
