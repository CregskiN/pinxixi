import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

@Injectable()
export class ParamInterceptor implements HttpInterceptor {
  intercept<T = any, P = any>(req: HttpRequest<T>, next: HttpHandler): Observable<HttpEvent<P>> {
    const modifiedReq = req.clone({
      setParams: {
        icode: environment.icode
      }
    });
    return next.handle(modifiedReq);
  }
}