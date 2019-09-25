import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToggleService } from '../../services/toggle.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  role: string;
  toggle: boolean = false;

  constructor(
    private router: Router,
    private toggleService: ToggleService
  ) { }

  ngOnInit() {
    this.getRole();
  }

  newState() {
   if (this.toggle) {
     this.toggle = false;
   }
   else if (!this.toggle) {
     this.toggle = true;
   }
    this.toggleService.getNewState(this.toggle);
  }

  getRole() {
    this.role = JSON.parse(localStorage.getItem('user-role'));
  }

  logout() {
    localStorage.removeItem('access-token');
    localStorage.removeItem('user-role');
    this.router.navigate(['login']);
  }



}
