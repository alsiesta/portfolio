import { AfterViewInit, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit {
  sideNavOpenIcon = "./assets/svg/close.svg";
  sideNavClosedIcon = "./assets/svg/burger.svg";
  activeLink:string = "";

  
  //nur um zu testen, welchen status die Variable nach dem Load der Seite hat
  ngAfterViewInit(): void {
    console.log('sidenaviopen: ',this.isSideNaviOpen);
  }

  @Output() naviClick: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() isSideNaviOpen: boolean | undefined;



  toggleMenu() {
    console.log('toggle was clicked Header and SideNaviOpen status is: ',this.isSideNaviOpen);    
    this.naviClick.emit(this.isSideNaviOpen);

    // this.isSideNaviOpen = !this.isSideNaviOpen
  }

  toHome() {
    document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
    this.activeLink = "";
  }

  toAbout() {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
    this.activeLink = "aboutme"; 
  }

  toSkills() {
    document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
    this.activeLink = "myskills"; 
  }

  toPortfolio() {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
    this.activeLink = "portfolio";
  }

  toContact() {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    this.activeLink = "contact"; 
  }

}
