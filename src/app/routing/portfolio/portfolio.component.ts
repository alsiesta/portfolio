import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {

  public portfolioCases = [
    {
      id: 0,
      name: 'Join',
      img: './assets/img/portfolio-case-join.png',
      expertise: 'JavaScript| HTML | CSS',
      description: 'Join app description.',
      livelink: '',
      githublink:'',
    },
    {
      id: 1,
      name: 'Pokedex',
      img: './assets/img/portfolio-case-pokedex.png',
      expertise: 'JavaScript| HTML | CSS | Api',
      description: 'Based on the PokeAPI a simple library that provides and catalogues pokemon information.',
      livelink: '',
      githublink:'',
    },
    {
      id: 2,
      name: 'Pollo Loco',
      img: './assets/img/portfolio-case-elpolloloco.png',
      expertise: 'JavaScript| HTML | CSS | Api',
      description: 'Based on the PokeAPI a simple library that provides and catalogues pokemon information.',
      livelink: '',
      githublink:'',
    },
    {
      id: 3,
      name: 'CRM',
      img: './assets/img/portfolio-case-crm.png',
      expertise: 'JavaScript| HTML | CSS | Api',
      description: 'Based on the PokeAPI a simple library that provides and catalogues pokemon information.',
      livelink: '',
      githublink:'',
    }
  ];
}
