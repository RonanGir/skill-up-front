import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StorageService } from './service/storage.service';

@Injectable()
export class XhrInterceptor implements HttpInterceptor {

  constructor(private store: StorageService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let modifiedReq = req;
    const userToken = this.store.getItem('token');
    if (userToken !== null) {
      modifiedReq = req.clone({
        headers: req.headers.set('Authorization', 'Basic ' + userToken),
      });
    }

    return next.handle(modifiedReq);
  }
}
