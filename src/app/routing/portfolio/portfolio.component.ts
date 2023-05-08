import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  public fxDirectionRow: string = 'row';
  public fxDirectionRowRev: string = 'row-reverse';
  public portfolioCases = [
    {
      id: 0,
      name: 'Join',
      img: './assets/img/portfolio-case-join.png',
      expertise: 'JavaScript| HTML | CSS',
      description: 'Join app description.',
      linkWebCase: 'https://alexander-schoenfeld.developerakademie.net/join/',
      linkGitCase:'https://github.com/alsiesta/join',
    },
    {
      id: 1,
      name: 'Pokedex',
      img: './assets/img/portfolio-case-pokedex.png',
      expertise: 'JavaScript| HTML | CSS | Api',
      description: 'Based on the PokeAPI a simple library that provides and catalogues pokemon information.',
      linkWebCase: 'https://alexander-schoenfeld.developerakademie.net/pokedex/',
      linkGitCase:'https://github.com/alsiesta/pokedex',
    },
    {
      id: 2,
      name: 'Pollo Loco',
      img: './assets/img/portfolio-case-elpolloloco.png',
      expertise: 'JavaScript| HTML | CSS | Api',
      description: 'Based on the PokeAPI a simple library that provides and catalogues pokemon information.',
      linkWebCase: 'https://alexander-schoenfeld.developerakademie.net/polloloco/',
      linkGitCase:'https://github.com/alsiesta/PolloLoco',
    },
    {
      id: 3,
      name: 'Platzhalter',
      img: './assets/img/portfolio-case-crm.png',
      expertise: 'Platzhalter Copy',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum tempore iste ut nihil nemo eveniet.',
      linkWebCase: '#',
      linkGitCase:'#',
    }
  ];
}
