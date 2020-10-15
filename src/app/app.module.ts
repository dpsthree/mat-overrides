import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { FormFieldDemoComponent } from './form-field-demo/form-field-demo.component';
import { DateTimeDemoComponent } from './date-time-demo/date-time-demo.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { TimePickerComponent } from './time-picker/time-picker.component';
import { DateTimePickerComponent } from './date-time-picker/date-time-picker.component';
import { MatNativeDateModule } from '@angular/material/core';

const routes: Routes = [
  { path: '', redirectTo: 'basic-form-field', pathMatch: 'full' },
  {
    path: 'basic-form-field',
    component: FormFieldDemoComponent,
    pathMatch: 'full',
  },
  { path: 'date-time', component: DateTimeDemoComponent, pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    FormFieldDemoComponent,
    DateTimeDemoComponent,
    DatePickerComponent,
    TimePickerComponent,
    DateTimePickerComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
