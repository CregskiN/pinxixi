import { Component } from '@angular/core';


import { TopMenu } from './components';
import { topMenus } from './data';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pinduoduo';
  topMenus: TopMenu[] = topMenus;

  handleTabSelected(menu: TopMenu): void {
    console.log(menu);
    
  }
}
