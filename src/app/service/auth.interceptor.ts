import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { environment } from 'src/environments/environment.development';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private router: Router, private authService: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token = sessionStorage.getItem("app.token");
    if (token) {
        request = request.clone({
            setHeaders: {
                Authorization: `Bearer ${token}`
            },
        });
    }
    request = request.clone({
        url: `${environment.apiUrl + request.url}`
    });
    return next.handle(request).pipe(
        catchError((error: HttpErrorResponse) => this.handleErrorRes(error))
    );
}

private handleErrorRes(error: HttpErrorResponse): Observable<never> {
    this.router.navigate(['/error'], { queryParams: {msg: error.statusText, code: error.status} });
    return throwError(() => error);
}
}
