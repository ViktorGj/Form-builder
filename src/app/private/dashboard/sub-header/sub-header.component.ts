import { Component, OnInit, Input } from '@angular/core';
import { ToggleService } from '../../../services/toggle.service';

@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.scss']
})
export class SubHeaderComponent implements OnInit {

  constructor(private toggleService: ToggleService) { }
  @Input() title: any;
  @Input() total: any;
  ngOnInit() {
  }

}
