import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isSideNaviOpen = false;
sideNavOpenIcon = "./assets/svg/close.svg"
  sideNavClosedIcon = "./assets/svg/burger.svg"
  

  @Output() naviClick: EventEmitter<boolean> = new EventEmitter<boolean>();

  toggleMenu(): void {
    this.naviClick.emit(this.isSideNaviOpen);
    this.isSideNaviOpen = !this.isSideNaviOpen
  }
}
