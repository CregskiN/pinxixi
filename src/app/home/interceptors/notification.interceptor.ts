import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

/**
 * 对 Http response 做拦截
 */
@Injectable()
export class NotificationInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(req).pipe(
      tap(event => {
        // 对响应数据拦截
        if (event instanceof HttpResponse && event.status >= 200 && event.status < 300) {
          console.log('请求成功 弹窗', event);
        }
        return;
      })
    )
  }
}
