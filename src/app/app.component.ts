import { Component } from '@angular/core';


import { TopMenu, ImageSlider } from './shared';
import { topMenus, imageSliders } from './data';


import { channels } from './data';

export interface Channel {
  id: number;
  icon: string;
  title: string;
  link: string; // 跳转 URL
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topMenus: TopMenu[] = topMenus;
  imageSliders: ImageSlider[] = imageSliders;
  username = '';
  channels: Channel[] = channels;  
  
  handleTabSelected(menu: TopMenu): void {
    console.log(menu);

  }
}
