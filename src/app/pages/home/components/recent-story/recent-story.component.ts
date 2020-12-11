import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recent-story',
  templateUrl: './recent-story.component.html',
  styleUrls: ['./recent-story.component.scss']
})
export class RecentStoryComponent implements OnInit {

  @Input() stories;
  
  constructor() { }

  ngOnInit(): void {
  }

}
