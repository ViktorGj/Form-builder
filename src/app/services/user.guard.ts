import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {

  allow: boolean = false;
  role: any;

  constructor(
    public router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    this.role = JSON.parse(localStorage.getItem('user-role'));
    if (this.allow) {
      this.allow = false;
      return true;
    }
    else {
      if (this.role == 'Admin') {
        this.router.navigate(['dashboard']);
      }
      else {
        this.router.navigate(['login'])
      }
      return false;
    }
  }
}
