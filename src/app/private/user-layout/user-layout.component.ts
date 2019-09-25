import { Component, OnInit } from '@angular/core';
import { FormService } from '../../services/form.service';
import { ActivatedRoute } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { SubmitPopupComponent } from '../../shared/submit-popup/submit-popup.component';

export enum QuestionType {
  checkbox = 1,
  radio = 2,
  text = 3
}

@Component({
  selector: 'app-user-layout',
  templateUrl: './user-layout.component.html',
  styleUrls: ['./user-layout.component.scss']
})
export class UserLayoutComponent implements OnInit {

  questions = [];
  text: string;
  title: string;
  bsModalRef: BsModalRef;
  submitBtn = false;
  error: any;
  valid = true;
  isFormSubmitted: false;
  showBtn: boolean = false;

  constructor(
    private _activeRoute: ActivatedRoute,
    private _formService: FormService,
    private _modalService: BsModalService,
  ) { }

  ngOnInit() {
    this.getID();
  }

  getID() {
    this._formService.formId = this._activeRoute.snapshot.params.formId;
    this._formService.idSubmissions = this._activeRoute.snapshot.params.submissionsId;
    this.checkSubmittedForm();
    this.getFormData();
  }

  checkSubmittedForm() {
    this._formService.getSubmittedForm().subscribe((res: any) => {
      this.isFormSubmitted = res.payload.submitted;
      this.title = res.payload.title;
    });
  }

  getFormData() {
    this._formService.getFormById().subscribe((data: any) => {
      this.questions = data.payload;
      this.checkSubmittedForm();
      this.submitBtn = true;
      this.showBtn = true;
    },
      error => {
        this.valid = false;
        if (error == "Bad Request") {
          this._formService.formId = null;
          this._formService.idSubmissions = null;
        }
        this.error = error.error.messages[0].message;
      });
  }

  onInput(question: string, answer: string, state: boolean) {
    const obj = {
      questionId: question,
      optionId: answer,
      toDelete: !state,
      text: null
    };
    this._formService.autoSave(obj).subscribe(res => {
    },
      error => {
        console.log('error', error);
      });
  }

  onFocusOut(question, answerId, textAnswer) {
    const obj = {
      questionId: question,
      optionId: answerId,
      toDelete: false,
      text: textAnswer
    };
    this._formService.autoSave(obj).subscribe(res => {
    },
      error => {
        console.log('error', error);
      });
  }

  openSubmitModal() {
    this.bsModalRef = this._modalService.show(SubmitPopupComponent);
    this.bsModalRef.content.okBtnName = 'Ok';
  }
}

