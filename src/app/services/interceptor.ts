import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap';
import { UserService } from './user.service';

@Injectable()
export class Interceptor implements HttpInterceptor {
  bsModalRef: any;

  constructor(
      private router: Router
    ) { }


  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let myToken = localStorage.getItem("access-token");
    if (myToken) {
      request = request.clone({
        setHeaders: {
          'Authorization': `Bearer ${myToken}`
        }
      });
    }
    return next.handle(request).pipe(catchError((err: HttpErrorResponse) => {
      if (err.status == 401) {
        localStorage.removeItem("access-token");
        this.router.navigate(["login"]);
      }
      return throwError(err.statusText);
    }))
  }

}

