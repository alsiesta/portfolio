import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Portfolio Alexander Schönfeld';
  opened = false;

  sideNaviClick($event: boolean) {
    this.opened = $event;
    this.opened = !this.opened;
  }

  isSideNaviOpen= false;

  log(state:any) {
    console.log(state);
  }

  toHome() {
    document.getElementById('home')?.scrollIntoView({behavior:'smooth'});
  }
  toAbout() {
    document.getElementById('about')?.scrollIntoView({behavior:'smooth'});
  }
  toSkills() {
    document.getElementById('skills')?.scrollIntoView({behavior:'smooth'});
  }
  toPortfolio() {
    document.getElementById('portfolio')?.scrollIntoView({behavior:'smooth'});
  }
  toContact() {
    document.getElementById('contact')?.scrollIntoView({behavior:'smooth'});
  }
}
