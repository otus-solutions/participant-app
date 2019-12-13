import {Component, ComponentFactoryResolver, Input, OnDestroy, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {AlertService} from '../../../../providers';
import {EventsComponent2} from './events2/events.component';
import {AddEventDirective} from '../../../../directves/addEvent.directive';

@Component({
  selector: 'events-component',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})

export class EventsComponent implements OnInit {
  @Input() public event: any;
  public data: Object;

  constructor(private alertService: AlertService, public viewContainerRef: ViewContainerRef, private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnInit() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.event);

    const componentRef = this.viewContainerRef.createComponent(componentFactory);
    (<EventsComponent>componentRef.instance).data = this.event;
  }
}
