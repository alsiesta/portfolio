import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-portfolio-case',
  templateUrl: './portfolio-case.component.html',
  styleUrls: ['./portfolio-case.component.scss']
})
export class PortfolioCaseComponent {
  @Input() case: any;
  @Input() fxDirection: string = '';
}
