import { Component, OnInit } from '@angular/core';
import { StatisticsService } from '../../../services/statistics.service';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';


@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {
  totalItems: any;

  constructor(private getformService: StatisticsService,
              private activeRoute: ActivatedRoute,
              private router: Router) { }
  formStatistics: any;
  id: string;
  title: string;
  submissionId: string;
  ngOnInit() {
    this.getFormId();
    this.statistics(this.id);
    this.getQuestionaireTitle(this.id);
  }
  getFormId() {
  this.id = this.activeRoute.snapshot.params.id;
}
  statistics(id) {
    this.getformService.getForm(id).subscribe((res: any) => {
      this.formStatistics = res.payload;
    })
  }
  getQuestionaireTitle(id) {
    this.getformService.getFormData(id).subscribe((res: any) => {
      this.title = res.payload.name;
    })
  }
  navigateUserReview(submissionId){
    this.router.navigate(['dashboard/review/'+ submissionId +'/'+ this.id]);
  }
}
