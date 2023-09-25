import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, map } from 'rxjs';
import { AccountService } from '../_services/account.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private accountService: AccountService, private toastr: ToastrService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      //const accountService = inject(AccountService);
      //const toastr = inject(ToastrService);

      return this.accountService.$currentUser.pipe(
        map(user => {
          console.log(user)
          if(user) return true;
          else {
            this.toastr.error('you shall not pass!!!');
            return false;
          }
        })
      )
    }
  
}
