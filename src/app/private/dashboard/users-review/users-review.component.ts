import { Component, OnInit } from '@angular/core';
import { IForms } from '../../../model/forms';
import { FormService } from '../../../services/form.service';
import { ActivatedRoute, Router } from '@angular/router';

export enum QuestionType {
  checkbox = 1,
  radio = 2,
  text = 3
}
@Component({
  selector: 'app-users-review',
  templateUrl: './users-review.component.html',
  styleUrls: ['./users-review.component.scss']
})
export class UsersReviewComponent implements OnInit {
  questions: any;
  forma: any;
  userName: string;
  isSelected: boolean;
  totalScored: any;
  totalFormPoints: any;
  formIdAdmin: string;
  submissionId: string;
  formId: string;
  formTitle: string;
  username: string;

  constructor(private _formService: FormService,
    private activeRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.getSubmissionId();
    this.getFormData();
    this.getFormPoints();
  }
  getSubmissionId() {
    this.submissionId = this.activeRoute.snapshot.params.submissionId;
    this.formId = this.activeRoute.snapshot.params.formId;
  }
  getFormData() {
    this._formService.getFormByIdAdmin(this.formId, this.submissionId).subscribe((data: IForms) => {
      this.questions = data.payload;
    });
  }
  getFormPoints() {
    this._formService.getPoints(this.formId, this.submissionId).subscribe((data: any) => {
      this.totalScored = data.payload.scoredFormPoints;
      this.totalFormPoints = data.payload.totalFormPoints;
      this.formTitle = data.payload.title
      this.username = data.payload.username;
    });
  }

  navigateBackToStatistics(formId) {
    this.router.navigate(['dashboard/statistics/' + formId]);
  }
  
}
