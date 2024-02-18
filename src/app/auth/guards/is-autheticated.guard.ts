import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

import { AuthService } from '../services/auth.service';
import { AuthStatus } from '../interfaces';

export const isAutheticatedGuard: CanActivateFn = (route, state) => {

  // console.log('is authenticated guard:');
  // console.log({route, state});

  const authService = inject(AuthService);
  const router      = inject(Router);

  if( authService.authStatus() === AuthStatus.authenticated ){
    return true;
  }

  // if( authService.authStatus() === AuthStatus.checking ){
  //   return false;
  // }

  // const url = state.url;
  // localStorage.setItem('path', url);

  router.navigateByUrl('/auth/login');
  return false;

};
