import {Component, ComponentFactoryResolver, Input, OnDestroy, OnInit, ViewContainerRef} from '@angular/core';
import {AlertService} from '../../../../../providers';
import {EventI} from '../event.interface';
import {Router} from '@angular/router';

@Component({
  selector: 'events-component-2',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
})

export class EventsComponent2 implements EventI, OnInit, OnDestroy {
  @Input() data: any;

  constructor(private router: Router,
              private componentFactoryResolver: ComponentFactoryResolver,
              public viewContainerRef: ViewContainerRef) {
  }

  ngOnInit() {
    console.log(this.data);
  }

  ngOnDestroy() {
  }

  callPreview() {
    window.location.href = "https://www.npmjs.com/" ;
  }
}
