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

  log(state:any) {
    console.log(state);
  }
}
