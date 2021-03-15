import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { SelectostanComponent } from './selectostan/selectostan.component';
import { LoginComponent } from './login/login.component';
import { CodeComponent } from './code/code.component';
import { ReportComponent } from './report/report.component';
import { ReportDefectComponent } from './report-defect/report-defect.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SelectostanComponent,
    LoginComponent,
    CodeComponent,
    ReportComponent,
    ReportDefectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
