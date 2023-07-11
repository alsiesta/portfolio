import { Component } from '@angular/core';

@Component({
  selector: 'app-frontend-dev',
  templateUrl: './frontend-dev.component.html',
  styleUrls: ['./frontend-dev.component.scss']
})
export class FrontendDevComponent {
  public headlines = ['Portfolio', 'Contact',];
  public subheadlines = ['Find below some case references from the last two years.', 'Please reach out to me if you need to refine your User Interface, an evaluation of your actual customer journey, proof of concept or pure frontend development support.' ];
  public fxAlignStart = "center start";
  public fxAlignEnd = "center end";
}
