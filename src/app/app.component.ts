import { Component } from '@angular/core';

interface TopMenu {
  title: string;
  link: string;
}

interface Dict {

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pinduoduo';
  menus: TopMenu[] = [{ title: '热门', link: '#' }, { title: '男装', link: '#' }, { title: '手机', link: '#' }, { title: '热门', link: '#' }, { title: '男装', link: '#' }, { title: '手机', link: '#' }, { title: '热门', link: '#' }, { title: '男装', link: '#' }, { title: '手机', link: '#' },{ title: '热门', link: '#' }, { title: '男装', link: '#' }, { title: '手机', link: '#' },{ title: '热门', link: '#' }, { title: '男装', link: '#' }, { title: '手机', link: '#' }];

  add() {

  }
}
