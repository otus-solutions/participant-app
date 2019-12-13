import {Component, NgZone, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {AuthenticationService} from '../../providers';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  title = 'Otus Randomization';
  private action: string;

  constructor(private router: Router, private ngZone: NgZone, private route: ActivatedRoute) {
    this.ngZone.run(() => this.router.navigate(['dashboard/tasks'])).then();
  }

  ngOnInit() {
    this.ngZone.run(() => this.router.navigate(['dashboard/tasks'])).then();
  }

}
