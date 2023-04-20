import { Component } from '@angular/core';

@Component({
  selector: 'app-mainpane',
  templateUrl: './mainpane.component.html',
  styleUrls: ['./mainpane.component.scss']
})
export class MainpaneComponent {
  public headlines = ['Portfolio', 'Contact'];
  public subheadlines = ['Portfolio subline. Lorem ipsum dolor sit amet consec tetur adipisicing elit. Voluptates culpa iste in aspernatur cupiditate nihil voluptate magni eveniet doloribus dolores inventore.', 'Contact subline. Lorem ipsum dolor sit amet consec tetur adipisicing elit. Voluptates culpa iste in aspernatur cupiditate nihil voluptate magni eveniet doloribus dolores inventore.'];
  public fxAlignStart = "center start";
  public fxAlignEnd = "center end";
}
