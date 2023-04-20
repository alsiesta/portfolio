import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule } from '@angular/material/form-field';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatInputModule,
    LayoutModule,
    MatSidenavModule,
    MatListModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
  ],
  providers: [{provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}}],
  bootstrap: [AppComponent],
  exports: [AboutmeComponent],
})
export class AppModule {}
