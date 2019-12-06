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
import {AppAlertComponent, DashboardComponent, ErrorPageComponent, LoginComponent} from './components';
import { environment } from '../environments/environment';
import {SanitizeHtmlPipe} from './utils/sanitize-html/sanitize-html.pipe';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import {CreateAccountComponent} from './components/account/create-account/create-account.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AppAlertComponent,
    DashboardComponent,
    ErrorPageComponent,
    SanitizeHtmlPipe,
    CreateAccountComponent
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
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
