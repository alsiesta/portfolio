import { AfterViewInit, Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit {

  sideNavOpenIcon = "./assets/svg/close.svg";
  sideNavClosedIcon = "./assets/svg/burger.svg";
  activeLink:string = "";
  
  constructor(private scroller: ViewportScroller, private route: ActivatedRoute, private router: Router){}
  
  //testing Variable state after page load
  ngAfterViewInit(): void {
    console.log('sidenaviopen: ',this.isSideNaviOpen);
  }

  @Output() naviClick: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() isSideNaviOpen: boolean | undefined;


  toggleMenu() {
    console.log('toggle was clicked Header and SideNaviOpen status is: ',this.isSideNaviOpen);    
    this.naviClick.emit(this.isSideNaviOpen);
  }

  toHome() {
    document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
    this.activeLink = "";
  }

  toAi () {
    this.router.navigateByUrl('/ai');
    this.activeLink = 'ai';
  }

  toConnect () {
    this.router.navigateByUrl('/connect');
    this.activeLink = 'aboutme';
    setTimeout(() => {
      document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
    },  250);
  }

  // toAbout() {
  //   document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  //   this.activeLink = "aboutme"; 
  // }

  toSkills() {
    document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
    this.activeLink = "myskills"; 
  }

  toPortfolio() {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
    this.activeLink = "portfolio";
  }

  toContact () {
    this.router.navigateByUrl('/connect');
    this.activeLink = "contact";   
    setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    },  250);
  }


  toFrontEndDev () {
    this.router.navigateByUrl('/frontend-dev');
    this.activeLink = 'frontend-dev';
    setTimeout(() => {
      document.getElementById('frontend-dev')?.scrollIntoView({ behavior: 'smooth' });
    },  250);
  }

  getLocation() {
    let url = window.location.href;
    let location = url.substring(url.lastIndexOf(('/')));
    return location;
  }

}
