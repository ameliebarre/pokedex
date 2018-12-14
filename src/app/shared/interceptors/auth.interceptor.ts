import { HttpInterceptor } from '@angular/common/http';

@Injectable
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private authService: AuthService
  )

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');

    if (token) {
      if ( !this.authService.isLoggedIn() ) {
        this.authService.logout();
      } else {
        const cloned = req.clone({
          headers: req.headers.set('Authorization', 'Bearer ' + token)
        });

        return next.handle(cloned);
      }
    } else {
      return next.handle(req);
    }
  }
}
