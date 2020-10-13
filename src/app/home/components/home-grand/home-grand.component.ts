import { Component, OnInit, Injectable, Injector, InjectionToken } from '@angular/core';

/**
 * 产品
 */
@Injectable({
  providedIn: 'root'
})
class Product {
  private name: string;
  private color: string;
  constructor(name: string, color: string) {
    this.name = name;
    this.color = color;
  }
}

/**
 * 订单
 */
@Injectable()
class PurchaseOrder {
  private product: Product;
  private amount: number;
  constructor(product: Product) {
    this.product = product;
  }
}

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
  date: Date;
  price = 0.23;
  data = [1, 2, 3, 4, 5, 6, 7];

  constructor() { }

  ngOnInit(): void {
    this.date = this.minusDays(new Date(), 2);

    const token = new InjectionToken<string>('baseURL')
    // 创建一个容器，做为对象池 注入到
    const injector = Injector.create({
      providers: [{ // 对象池
        provide: Product, // 标识符
        // useClass: Product // constuctor 接收标识符时，直接 new class
        useFactory: () => { // constuctor 接收标识符时，做额外处理
          return new Product('大米手机', 'black');
        },
        // useExisting: new Product('大米手机', 'black'), // 使用已经实例化的东西
        // useValue:
        deps: [] // 描述对 对象池 中其他对象的依赖
      }, {
        provide: PurchaseOrder,
        useClass: PurchaseOrder,
        deps: [Product]
      }, {
        provide: token, // 字符串做为标识 容易引起冲突
        useValue: 'http://localhost'
      }]
    });
    console.log(injector.get(Product)); // Product {name: "大米手机", color: "black"}
    console.log(injector.get(PurchaseOrder)); // PurchaseOrder {product: Product}
    console.log(injector.get(token)); // http://localhost
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
