import { Component, OnInit } from '@angular/core';
import {HomeService} from '../../services/home.service';
import { Item } from '../../models/item';
import { Story } from '../../models/story';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  bestSellers = [];
  items:Item[] = [];
  stories:Story[] = [];

  constructor(private srv: HomeService) { }

  ngOnInit(): void {
    this.getBestSellers();
    this.getItems();
    this.getStories();
  }

  getBestSellers(){
    this.srv.bestSellers().subscribe((res:Item[]) => this.bestSellers = res);
  }
  
  getItems(){
    this.srv.items().subscribe((res:Item[]) => this.items = res);
    
  }
  
  getStories(){
    this.srv.stories().subscribe((res:Story[]) => this.stories = res);
    
  }

}
