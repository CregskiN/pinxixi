import { Component } from '@angular/core';


import { TopMenu, ImageSlider } from './shared';
import { topMenus, imageSliders } from './data';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topMenus: TopMenu[] = topMenus;
  imageSliders: ImageSlider[] = imageSliders;
  username = '';
  
  handleTabSelected(menu: TopMenu): void {
    console.log(menu);

  }
}
