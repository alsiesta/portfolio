import { Component, ElementRef, ViewChild } from '@angular/core';
import { User } from '../../user';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  userModel = new User('', '', '');
  @ViewChild('contactForm') contactForm!: ElementRef;
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;
  @ViewChild('sendButton') sendButton!: ElementRef;
  isSending: boolean = false;
  display: boolean = false;


  async sendMail() {
    this.isSending = true; // disable form fields

    let fd = new FormData();
    fd.append('name', this.userModel.username);
    fd.append('email', this.userModel.email);
    fd.append('message', this.userModel.message);

    await fetch(
      'https://alexander-schoenfeld.developerakademie.net/portfolio/send_mail.php',
      {
        method: 'POST',
        body: fd,
      }
    );

    // success message

    this.isSending = false; // enable form fields again
  }

  // getData() {
  //   this.fd.append('name', this.userModel.username);
  //   this.fd.append('email', this.userModel.email);
  //   this.fd.append('message', this.userModel.message);
  //   return this.fd;
  // }

  validateEmail() {
    const regex =
      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    const email = this.userModel.email;
    if (regex.test(email)) {
      return true;
    } else {
      return false;
    }
  }
}
