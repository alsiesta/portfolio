import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isSideNaviOpen = false;
  // @Input() sidenav: any;
  @Output() naviClick: EventEmitter<boolean> = new EventEmitter<boolean>();

  toggleMenu(): void {
    this.naviClick.emit(this.isSideNaviOpen);
    this.isSideNaviOpen = !this.isSideNaviOpen
  }
}
