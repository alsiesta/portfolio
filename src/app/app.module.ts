import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { HeaderComponent } from './header/header.component';
import { GreetingsectionComponent } from './routing/greetingsection/greetingsection.component';
import { MainpaneComponent } from './mainpane/mainpane.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { AboutmeComponent } from './routing/aboutme/aboutme.component';

@NgModule({
  declarations: [AppComponent, FooterComponent, HeaderComponent,GreetingsectionComponent, MainpaneComponent, AboutmeComponent, ],
  imports: [BrowserModule, AppRoutingModule, MatToolbarModule, MatIconModule, MatButtonModule,MatMenuModule, LayoutModule, MatSidenavModule, MatListModule,],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    AboutmeComponent
  ],
})
export class AppModule {}
