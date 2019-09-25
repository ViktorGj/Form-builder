import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { FormService } from '../../services/form.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  error: string;

  constructor(private formBuild: FormBuilder,
              private _userService: UserService,
              private router: Router,
              private _formService: FormService,
              private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.formBuilder();
    this.checkRole();
  }

  formBuilder() {
    this.form = this.formBuild.group({
      username: ['', Validators.required],
      password: ['']
    });
  }

  onSubmit() {
    this._userService.authLogin(this.form.value).subscribe(data => {
      this._userService.getLoginInfo(data);
      if (data.token) {
        if (data.payload.roles[0].name === 'Admin') {
          localStorage['access-token'] = data.token;
          const formId = this._formService.formId;
          const submissionId = this._formService.idSubmissions;
          if (formId) {
            this.router.navigate([`user-view/${formId}/${submissionId}`]);
          }
          else {
            this.router.navigate(['dashboard/shared']);
          }
        } else {
          localStorage['access-token'] = data.token;
          const formId = this._formService.formId;
          const submissionId = this._formService.idSubmissions;
          this.router.navigate([`user-view/${formId}/${submissionId}`]);
        }
      }
    },
      error => {
        this.toastr.error("The username and password you entered don`t match.")
        this.error = error;
        console.log(error);
        console.log(error.error.messages[0].message);
      });
  }

  checkRole() {
    const role = JSON.parse(localStorage.getItem('user-role'));
    if (role) {
      localStorage.removeItem('access-token');
      localStorage.removeItem('user-role');
    }
  }
  
}
