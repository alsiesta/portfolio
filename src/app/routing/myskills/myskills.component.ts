import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-myskills',
  templateUrl: './myskills.component.html',
  styleUrls: ['./myskills.component.scss']
})
export class MyskillsComponent {
  activeLink:string = "";
  arr: any = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  constructor (private router: Router) { }
  
  toContact () {
    this.router.navigateByUrl('/connect');
    this.activeLink = "contact";   
    setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    },  250);
  }
  
  skills: any = [
    {
      name: 'JavaScript',
      img: 'javascript' + '.svg'
    },
    {
      name: 'TypeScript',
      img: 'typescript' + '.svg'
    },
    {
      name: 'Angular',
      img: 'angular' + '.svg'
    },
    {
      name: 'Material',
      img: 'material' + '.svg'
    },
    {
      name: 'Firebase',
      img: 'firebase' + '.svg'
    },
    {
      name: 'HTML',
      img: 'html' + '.svg'
    },
    {
      name: 'CSS',
      img: 'css' + '.svg'
    },
    {
      name: 'API',
      img: 'api' + '.svg'
    },
    {
      name: 'Github',
      img: 'github' + '.svg'
    },
    {
      name: 'Scrum',
      img: 'scrum' + '.svg'
    },
    {
      name: 'Bootstrap',
      img: 'bootstrap' + '.svg'
    },
    {
      name: 'Adobe Cloud',
      img: 'adobe-cloud' + '.svg'
    },
    
  ]
}
