import { Component } from '@angular/core';


@Component({
  selector: 'app-greetingsection',
  templateUrl: './greetingsection.component.html',
  styleUrls: ['./greetingsection.component.scss'],
})
export class GreetingsectionComponent {
  toContact() {
    document.getElementById('contact')?.scrollIntoView({behavior:'smooth'});
  }
}
