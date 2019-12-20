import {Component, Input, ViewContainerRef} from '@angular/core';
import {EventI} from '../event.interface';

@Component({
  selector: 'activity-autofill-event',
  templateUrl: './activity-autofill-event.component.html',
  styleUrls: ['./activity-autofill-event.component.css'],
})

export class ActivityAutofillEventComponent implements EventI {
  @Input() data: any;

  constructor(public viewContainerRef: ViewContainerRef) {
  }

  callPreview() {
    window.location.href = 'http://143.54.83.45:51001/#/?activity=survey.json&token=123&callback=http://143.54.83.45:8081' ;
  }
}
