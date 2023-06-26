import { Component } from '@angular/core';

@Component({
  selector: 'app-mainpane',
  templateUrl: './mainpane.component.html',
  styleUrls: ['./mainpane.component.scss']
})
export class MainpaneComponent {
  public headlines = ['Portfolio', 'Contact',];
  public subheadlines = ['Find below some case references from the last two years.', 'Please reach out to me if you need to refine your User Interface, an evaluation of your actual customer journey, proof of concept or pure frontend development support.' ];
  public fxAlignStart = "center start";
  public fxAlignEnd = "center end";
}
