import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-grand',
  templateUrl: './home-grand.component.html',
  styleUrls: ['./home-grand.component.css']
})
export class HomeGrandComponent implements OnInit {
  obj = {
    name: 'Cregskin',
    age: 20,
    job: ['student', 'frontend engineer']
  }
  date = this.minusDays(new Date(), 2);
  price = 0.23;
  data = [1, 2, 3, 4, 5, 6, 7];

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * minus day
   * @param date 
   * @param days 
   * @return res
   */
  public minusDays(date: Date, days: number) {
    const res = new Date(date);
    res.setDate(res.getDate() - days);
    return res;
  }

}
