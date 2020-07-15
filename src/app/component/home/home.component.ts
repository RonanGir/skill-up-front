import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/service/dashboard.service';
import { Dashboard } from 'src/app/model/dashboard';
import { User } from 'src/app/model/user';
import { StorageService } from 'src/app/service/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  dashboard: Dashboard;
  user: User;

  constructor(private dash: DashboardService,
              private store: StorageService) { }

  ngOnInit() {
      this.user = this.store.getCurrentUser();
  }

  onGetDash() {
    this.dash.getDashboardUser(this.user).subscribe(
      (dashboard: Dashboard) => {
        this.dashboard = dashboard;
      }
    );
  }

}
