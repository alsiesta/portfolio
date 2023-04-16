import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {

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
