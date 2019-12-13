import { Injectable } from '@angular/core';
import {EventsComponent} from '../components';
import {EventsComponent2} from '../components/dashboard/tasks/events/events2/events.component';

@Injectable()
export class EventService {
  getEventComponents() {
    return {
      event1: EventsComponent2
    };
  }
}
