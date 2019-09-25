import { Component, OnInit } from '@angular/core';
import { ToggleService } from '../../services/toggle.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  toggle: boolean;

  constructor(private toggleService: ToggleService) { }

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
