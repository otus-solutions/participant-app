import {Component, OnInit, OnDestroy} from '@angular/core';
import {AlertService} from '../../../providers';
import {EventService} from '../../../providers/event.service';
import {EventsComponent2} from './events/events2/events.component';

@Component({
  selector: 'tasks',
  templateUrl: 'tasks.component.html',
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
        name: 'event1'
      }
    ];
  }

  ngOnDestroy() {
  }

}
