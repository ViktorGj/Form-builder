import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  isAuthenticated: boolean;
  role: string;

  constructor(
    public router: Router) { }


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    this.role = JSON.parse(localStorage.getItem('user-role'));
    if (this.role == "Admin") {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false
    }
  }
}
