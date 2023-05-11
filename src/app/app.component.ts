import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,NavigationEnd  } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Portfolio Alexander Schönfeld';
  opened = false;
  sideNaviIsOpen = false;
  activeLink: string = '';

  constructor(private activatedRout: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {

        const fragment = this.router.parseUrl(this.router.url).fragment;
        if (fragment) {
          setTimeout(() => {
            const element = document.querySelector('#' + fragment);
            
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }, 500); // Delay to ensure DOM rendering
        }
      }
    });
  }

  sideNaviClick($event: boolean) {
    console.log($event);
    this.opened = $event;
    this.opened = !this.opened;
    this.sideNaviIsOpen = this.opened;
  }

  log(state: any) {
    console.log(state);
  }

  toHome() {
    document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
  }

  toAbout() {
    this.sideNaviIsOpen = !this.sideNaviIsOpen;
    this.activeLink = 'aboutme';
  }

  toSkills() {
    document.getElementById('skills')?.scrollIntoView({behavior:'smooth' });
    this.sideNaviIsOpen = !this.sideNaviIsOpen;
    this.activeLink = 'myskills';
  }

  toPortfolio() {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
    this.sideNaviIsOpen = !this.sideNaviIsOpen;
    this.activeLink = 'portfolio';
  }

  toContact() {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    this.sideNaviIsOpen = !this.sideNaviIsOpen;
    this.activeLink = 'contact';
  }
}

