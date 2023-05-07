import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  activeLink:string = "";

  toHome() {
    document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
    this.activeLink = "";
  }
}
