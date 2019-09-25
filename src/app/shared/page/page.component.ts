import { Component, OnInit } from '@angular/core';
import { ToggleService } from '../../services/toggle.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  toggle: boolean;

  constructor(
    private toggleService: ToggleService
  ) { }

  ngOnInit() {
    this.getState();
  }

  getState() {
    this.toggleService.getMessage().subscribe(
      state => {
        this.toggle = state;
      }
    );
  }

}
