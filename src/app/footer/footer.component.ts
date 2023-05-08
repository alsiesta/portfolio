import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  activeLink:string = "";

  sendMail() {
    "mailto:as@daslizenzatelier.de?Subject=Hello&nbsp;body=MoinAlexander";
    console.log('sent mail');
    
  }

  
  toHome() {
    document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
    this.activeLink = "";

  }
}
