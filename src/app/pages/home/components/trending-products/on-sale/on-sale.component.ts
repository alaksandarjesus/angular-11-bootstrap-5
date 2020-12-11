import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-on-sale',
  templateUrl: './on-sale.component.html',
  styleUrls: ['./on-sale.component.scss']
})
export class OnSaleComponent implements OnInit {

  @Input() items;

  constructor() { }

  ngOnInit(): void {
  }

}
