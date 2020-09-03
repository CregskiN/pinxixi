import { Component, OnInit } from '@angular/core';

import { channels } from '../../../data';

export interface Channel {
  id: number;
  icon: string;
  title: string;
  link: string; // 跳转 URL
}

@Component({
  selector: 'app-horizontal-grid',
  templateUrl: './horizontal-grid.component.html',
  styleUrls: ['./horizontal-grid.component.css']
})
export class HorizontalGridComponent implements OnInit {
  channels: Channel[] = channels;  

  constructor() { }

  ngOnInit(): void {
    
  }

}
