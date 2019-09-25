import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';
import { Router } from '@angular/router';
import { FormService } from '../../services/form.service';
import { UserGuard } from '../../services/user.guard';

@Component({
  selector: 'app-submit-popup',
  templateUrl: './submit-popup.component.html',
  styleUrls: ['./submit-popup.component.scss']
})
export class SubmitPopupComponent implements OnInit {

  role: string;

  constructor(
    public bsModalRef: BsModalRef,
    private router: Router,
    private _formService: FormService,
    private guard: UserGuard
  ) { }

  ngOnInit() {
    this.getRole();
  }

  submitForm() {
    this._formService.submitForm().subscribe(res => {
    },
      error => {
        console.log('error', error);
      });
    if (this.role == 'Admin') {
      this.router.navigate(['dashboard/shared']);
    } else {
      localStorage.removeItem('access-token');
      localStorage.removeItem('user-role');
      this.guard.allow = true;
      this.router.navigate(['/finished']);
    }
  }

  getRole() {
    this.role = JSON.parse(localStorage.getItem('user-role'));
  }
}
