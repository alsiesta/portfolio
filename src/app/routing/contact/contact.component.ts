import { Component } from '@angular/core';
import { User } from '../../user';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  userModel = new User('', '', '')

  warning:string = ".mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__leading, .mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__notch, .mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing{\
    border-color: $purple !important;\
   }";
}
