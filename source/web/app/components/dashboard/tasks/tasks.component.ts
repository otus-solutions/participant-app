import {Component, OnInit, OnDestroy} from '@angular/core';
import {AlertService} from '../../../providers';
import {EventService} from '../../../providers/event.service';

@Component({
  selector: 'tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})

export class TasksComponent implements OnInit, OnDestroy {
  participantEvents = [];
  private eventList: Object;

  constructor(private alertService: AlertService, private eventService: EventService) {
    this.eventList = this.eventService.getEventComponents();
  }

  ngOnInit() {
    this.participantEvents = [
      {
        _id: '789',
        objectType: 'ActivityAutoFillEvent',
        activityId: 123,
        participant: 456,
        name: 'ACTIMETRIA ATIVAÇÃO',
        acronym: 'ACT',
        description: 'description',
        status: {
          objectType: 'StatusEvent',
          label: 'WAITING',
          statusDate: '2019-12-11T18:01:15.129Z'
        }
      }
    ];
  }

  ngOnDestroy() {
  }

}
