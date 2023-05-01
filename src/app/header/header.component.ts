import { AfterViewInit, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    console.log('sidenaviopen: ',this.isSideNaviOpen);
  }
  sideNavOpenIcon = "./assets/svg/close.svg"
  sideNavClosedIcon = "./assets/svg/burger.svg"
  
  

  @Output() naviClick: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() isSideNaviOpen: boolean | undefined;


  toggleMenu() {
    console.log('toggle was clicked Header and SideNaviOpen status is: ',this.isSideNaviOpen);    
    this.naviClick.emit(this.isSideNaviOpen);
    this.isSideNaviOpen = !this.isSideNaviOpen
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
