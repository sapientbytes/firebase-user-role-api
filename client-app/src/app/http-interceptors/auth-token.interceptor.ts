import {AngularFireAuth} from '@angular/fire/auth';
import {Injectable} from '@angular/core';
import {HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HTTP_INTERCEPTORS} from '@angular/common/http';
import {Observable} from 'rxjs';
import {switchMap, take} from 'rxjs/operators';
import {HttpHeaders} from "@angular/common/http";

@Injectable({providedIn: 'root'})
export class AuthTokenHttpInterceptor implements HttpInterceptor {

  constructor(private auth: AngularFireAuth) {

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    console.log('INTERCEPTED ', req.url);

    return this.auth.idToken.pipe(
      take(1),
      switchMap(idToken => {
        let reqClone = req;

        if (idToken) {
          reqClone = reqClone.clone({
            headers: new HttpHeaders({
              Authorization: `Bearer ${idToken}`
            })
          });
        }

        //debugger;
        return next.handle(reqClone);
      })
    );

  }
}

export const AuthTokenHttpInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthTokenHttpInterceptor,
  multi: true
}
