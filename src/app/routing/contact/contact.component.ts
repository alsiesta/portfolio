import { Component } from '@angular/core';
import { User } from '../../user';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  userModel = new User('', '', '')


}
