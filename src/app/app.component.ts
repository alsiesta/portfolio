import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Portfolio Alexander Schönfeld';
  opened = false;
  sideNaviIsOpen= false;

  sideNaviClick($event: boolean) {
    console.log($event);
    this.opened = $event;
    this.opened = !this.opened;
    this.sideNaviIsOpen = this.opened;
  }


  log(state:any) {
    console.log(state);
  }

  toHome() {
    document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
  }
  toAbout() {
    document.getElementById('about')?.scrollIntoView({behavior:'smooth'});
    this.sideNaviIsOpen = !this.sideNaviIsOpen;
  }
  toSkills() {
    document.getElementById('skills')?.scrollIntoView({behavior:'smooth'});
    this.sideNaviIsOpen = !this.sideNaviIsOpen;
  }
  toPortfolio() {
    document.getElementById('portfolio')?.scrollIntoView({behavior:'smooth'});
    this.sideNaviIsOpen = !this.sideNaviIsOpen;
  }
  toContact() {
    document.getElementById('contact')?.scrollIntoView({behavior:'smooth'});
    this.sideNaviIsOpen = !this.sideNaviIsOpen;
  }
}
