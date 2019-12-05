import {Component, NgZone, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../providers';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  title = 'Otus Randomization';

  constructor(private router: Router, private ngZone: NgZone, private authenticationService: AuthenticationService) {
    this.ngZone.run(() => this.router.navigate(['dashboard/projects'])).then();
  }

  ngOnInit() {
    this.ngZone.run(() => this.router.navigate(['dashboard/projects'])).then();
  }

}
