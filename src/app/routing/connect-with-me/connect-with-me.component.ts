import { Component } from '@angular/core';

@Component({
  selector: 'app-connect-with-me',
  templateUrl: './connect-with-me.component.html',
  styleUrls: ['./connect-with-me.component.scss']
})
export class ConnectWithMeComponent {
  public headlines = ['Portfolio', 'Contact',];
  public subheadlines = ['Find below some case references from the last two years.', 'Please reach out to me if you need to refine your User Interface, an evaluation of your actual customer journey, proof of concept or pure frontend development support.' ];
  public fxAlignStart = "center start";
}
