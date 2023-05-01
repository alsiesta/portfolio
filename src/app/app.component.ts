import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Portfolio Alexander Schönfeld';
  opened = false;
  sideNaviIsOpen = false;
  activeLink:string = "";

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
    document.getElementById('home')?.scrollIntoView({ behavior: 'smooth'});
  }

  toAbout() {
    document.getElementById('about')?.scrollIntoView({behavior:'smooth', block: "end"});
    // const element = document.getElementById('about');
    // const offset  = 80;
    // const elementPosition = element!.getBoundingClientRect().top;
    // const offsetPosition = elementPosition + window.pageYOffset + offset;
    // window.scrollTo({
    //   top: offsetPosition,
    //   behavior: "smooth"
    // });
    
    this.sideNaviIsOpen = !this.sideNaviIsOpen;
    this.activeLink = "aboutme";    
  }

  toSkills() {
    document.getElementById('skills')?.scrollIntoView({behavior:'smooth' });
    this.sideNaviIsOpen = !this.sideNaviIsOpen;
    this.activeLink = "myskills";    
  }
  toPortfolio() {
    document.getElementById('portfolio')?.scrollIntoView({behavior:'smooth' });
    this.sideNaviIsOpen = !this.sideNaviIsOpen;
    this.activeLink = "portfolio";    
  }
  toContact() {
    document.getElementById('contact')?.scrollIntoView({behavior:'smooth' });
    this.sideNaviIsOpen = !this.sideNaviIsOpen;
    this.activeLink = "contact";    
  }
  
}
