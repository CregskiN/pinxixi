import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appAgo'
})
export class AgoPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    if (value) {
      // 获取秒差 // Date不能直接减
      const seconds = Math.floor((+new Date() - +new Date(value)) / 1000)
      if (seconds < 30) {
        return '刚刚';
      } else {
        const intervals = {
          年: 3600 * 24 * 365,
          月: 3600 * 24 * 30,
          周: 3600 * 24 * 7,
          天: 3600 * 24 * 1,
          小时: 3600,
          分钟: 60,
          秒: 1,
        };
        let counter = 0;
        for (let unitName in intervals) {
          const unitValue = intervals[unitName];
          counter = Math.floor(seconds / unitValue);
          if (counter > 0) {
            return `${counter} ${unitName} 前`;
          }
        }
        return value;
      }
    }
  }
}