import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';

export const authGuardGuard: CanActivateFn = (route, state) => {
  return inject(AuthService).isLoggedIn()? true : inject(Router).navigate(['/login']);
};
