import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from '@angular/cdk/layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { GreetingsectionComponent } from './routing/greetingsection/greetingsection.component';
import { MainpaneComponent } from './mainpane/mainpane.component';
import { AboutmeComponent } from './routing/aboutme/aboutme.component';
import { MyskillsComponent } from './routing/myskills/myskills.component';
import { HeadlineComponent } from './shared/headline/headline.component';
import { PortfolioCaseComponent } from './shared/portfolio-case/portfolio-case.component';
import { PortfolioComponent } from './routing/portfolio/portfolio.component';
import { ContactComponent } from './routing/contact/contact.component';
import { SocialLinksComponent } from './shared/social-links/social-links.component';
import { AipaneComponent } from './routing/aipane/aipane.component';
import { BlogComponent } from './routing/blog/blog.component';
import { FrontendDevComponent } from './routing/frontend-dev/frontend-dev.component';
import { ConnectWithMeComponent } from './routing/connect-with-me/connect-with-me.component';
import { IntroFrontendComponent } from './routing/intro-frontend/intro-frontend.component';
import { BlogHeadComponent } from './routing/blog-head/blog-head.component';
import { BlogPostComponent } from './shared/blog-post/blog-post.component';

@NgModule({
  declarations: [
    routingComponents,
    AppComponent,
    FooterComponent,
    HeaderComponent,
    GreetingsectionComponent,
    MainpaneComponent,
    AboutmeComponent,
    MyskillsComponent,
    HeadlineComponent,
    PortfolioCaseComponent,
    PortfolioComponent,
    ContactComponent,
    SocialLinksComponent,
    AipaneComponent,
    BlogComponent,
    FrontendDevComponent,
    ConnectWithMeComponent,
    IntroFrontendComponent,
    BlogHeadComponent,
    BlogPostComponent,
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
