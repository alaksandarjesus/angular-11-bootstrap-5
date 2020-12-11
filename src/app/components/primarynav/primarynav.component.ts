import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';
import { Menu } from '../../models/menu';
@Component({
  selector: 'app-primarynav',
  templateUrl: './primarynav.component.html',
  styleUrls: ['./primarynav.component.scss']
})
export class PrimarynavComponent implements OnInit {

  menus:Menu[] = [];
  constructor(private srv:AppService) { }

  ngOnInit(): void {
    this.getMenus();
  }

  getMenus(){
    this.srv.menus().subscribe((res:Menu[]) => this.menus = res)
  }

}
