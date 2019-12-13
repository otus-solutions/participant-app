import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule, MatCardModule, MatDatepickerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule, MatMenuModule, MatNativeDateModule, MatRadioModule, MatSidenavModule,
  MatToolbarModule,
} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import {AppAlertComponent, DashboardComponent, ErrorPageComponent, EventsComponent, LoginComponent, TasksComponent} from './components';
import { environment } from '../environments/environment';
import {SanitizeHtmlPipe} from './utils/sanitize-html/sanitize-html.pipe';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import {CreateAccountComponent} from './components/account/create-account/create-account.component';
import {EventService} from './providers/event.service';
import {EventsComponent2} from './components/dashboard/tasks/events/events2/events.component';
import {AddEventDirective} from './directves/addEvent.directive';


@NgModule({
  declarations: [
    EventsComponent,
    AppComponent,
    EventsComponent2,
    LoginComponent,
    AppAlertComponent,
    DashboardComponent,
    ErrorPageComponent,
    SanitizeHtmlPipe,
    CreateAccountComponent,
    TasksComponent,
    AddEventDirective
  ],
  entryComponents: [
    EventsComponent,
    EventsComponent2,
    AppComponent,
    LoginComponent,
    AppAlertComponent,
    DashboardComponent,
    ErrorPageComponent,
    CreateAccountComponent,
    TasksComponent
  ],
  imports: [
    BrowserModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FlexLayoutModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production}),
    MatMenuModule,
    MatSidenavModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,
    MatCardModule,
    MatDatepickerModule,
    MatRadioModule
  ],
  providers: [
    EventService,
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
