import { Component } from '@angular/core';

@Component({
  selector: 'app-aipane',
  templateUrl: './aipane.component.html',
  styleUrls: ['./aipane.component.scss']
})
export class AipaneComponent {
  public headlines = ['AI Training', 'Consulting','Coaching','Training'];
  public subheadlines = ['Ai Training Subline', 'Consulting Subline','Coaching Subline','Training Subline'];
  public fxAlignStart = "center start";
  public fxAlignEnd = "center end";

}