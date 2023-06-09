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
      description: 'A simple Kanban Tool with contact library, drag-and-drop style and User Registration.',
      links: true,
      linkWebCase: 'https://alexander-schoenfeld.developerakademie.net/join/',
      linkGitCase:'https://github.com/alsiesta/join',
    },
    {
      id: 1,
      name: 'Pokedex',
      img: './assets/img/portfolio-case-pokedex.png',
      expertise: 'JavaScript| HTML | CSS | Api',
      description: 'Based on the PokeAPI a simple library that provides and catalogues pokemon information.',
      links: true,
      linkWebCase: 'https://alexander-schoenfeld.developerakademie.net/pokedex/',
      linkGitCase:'https://github.com/alsiesta/pokedex',
    },
    {
      id: 2,
      name: 'Pollo Loco',
      img: './assets/img/portfolio-case-elpolloloco.png',
      expertise: 'JavaScript| HTML | CSS',
      description: 'A 2D jump and run game in vanilla javascript.',
      links: true,
      linkWebCase: 'https://alexander-schoenfeld.developerakademie.net/polloloco/',
      linkGitCase:'https://github.com/alsiesta/PolloLoco',
    },
    {
      id: 3,
      name: '100+ Corporate Websites',
      img: './assets/img/portfolio-case-sbd.png',
      expertise: 'Frontend Design | 30+ languages | UX | Project Owner',
      description: 'During the past 6 years I was the project owner of the relaunch, lift & shift system migration and the conception of various brand websites of Stanley Black & Decker Corporation in Europe. From E-Commerce integration, outbound connection of Cloud Services, PIM integration to Mobile App development for autonomous lawn robots.',
      links: false,
      linkWebCase: '#',
      linkGitCase:'#',
    },
    {
      id: 4,
      name: 'Platzhalter',
      img: './assets/img/portfolio-case-crm.png',
      expertise: 'Platzhalter Copy',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum tempore iste ut nihil nemo eveniet.',
      links: false,
      linkWebCase: '#',
      linkGitCase:'#',
    }
  ];
}
