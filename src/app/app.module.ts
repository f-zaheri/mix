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
import { PageComponent } from './page/page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CardsComponent } from './cards/cards.component';
import { PageoneComponent } from './pageone/pageone.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SelectostanComponent,
    LoginComponent,
    CodeComponent,
    ReportComponent,
    ReportDefectComponent,
    PageComponent,
    NavbarComponent,
    FooterComponent,
    CardsComponent,
    PageoneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
