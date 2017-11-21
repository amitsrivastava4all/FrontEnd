import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router

} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    var promise:Promise<boolean>| Observable<boolean> = this.authService.isAuthenticated();
      promise.then(
        (authenticated: boolean) => {
          if (authenticated) {
            return true;
          } else {
            // return false; // to remain same on the current component
            this.router.navigate(['/']);
          }
        }
      );
    return promise;
  }


}
