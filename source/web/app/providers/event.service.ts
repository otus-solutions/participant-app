import { Injectable } from '@angular/core';
import {ActivityAutofillEventComponent} from '../components/dashboard/tasks/events/activity/activity-autofill-event.component';
import {AccountClientService} from './rest/account-client.service';
import {CookieService} from 'ngx-cookie-service';
import {User} from '../model';
import {BehaviorSubject} from 'rxjs';
import {EventClientService} from './rest/event-client.service';

@Injectable()
export class EventService {

  constructor(private client: EventClientService) {
      }

  getEventComponents() {
    return {
      ActivityAutoFillEvent: ActivityAutofillEventComponent
    };
  }

  getParticipantEvents() {
      this.client.getEvents();
  }
}
