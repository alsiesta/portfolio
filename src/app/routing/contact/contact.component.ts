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

  validateEmail() {
    const regex =
      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    const email = this.userModel.email;
    if (regex.test(email)) {
      console.log('email is valid');
      
      return true;
    } else {
      console.log('email NOT valid');
      return false;
    }
  }
}
