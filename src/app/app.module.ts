import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';


import { HeaderComponent } from './header/header.component';
import { GreetingsectionComponent } from './routing/greetingsection/greetingsection.component';
import { MainpaneComponent } from './mainpane/mainpane.component';
import { LayoutModule } from '@angular/cdk/layout';
import { AboutmeComponent } from './routing/aboutme/aboutme.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Header2Component } from './header2/header2.component';
import { MyskillsComponent } from './routing/myskills/myskills.component';
import { HeadlineComponent } from './shared/headline/headline.component';
import { PortfolioCaseComponent } from './shared/portfolio-case/portfolio-case.component';
import { PortfolioComponent } from './routing/portfolio/portfolio.component';
import { ContactComponent } from './routing/contact/contact.component';
import { FormsModule } from '@angular/forms';
import { ImprintComponent } from './routing/imprint/imprint.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    GreetingsectionComponent,
    MainpaneComponent,
    AboutmeComponent,
    Header2Component,
    MyskillsComponent,
    HeadlineComponent,
    PortfolioCaseComponent,
    PortfolioComponent,
    ContactComponent,
    ImprintComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    LayoutModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [AboutmeComponent],
})
export class AppModule {}
