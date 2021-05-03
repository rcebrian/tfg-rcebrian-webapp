import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NbAuthService } from '@nebular/auth';

@Injectable()
export class JWTInterceptorService implements HttpInterceptor {

  bearerToken: string;

  constructor(private authService: NbAuthService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let request = req;

    // get token from NbAuthService
    this.authService.getToken().subscribe(token => {
      this.bearerToken = token.getValue();
    })

    if (this.bearerToken) {
      request = req.clone({
        setHeaders: {
          authorization: `Bearer ${this.bearerToken}`,
          // 'Content-Type': 'application/json'
        }
      });
    }

    return next.handle(request);
  }
}

