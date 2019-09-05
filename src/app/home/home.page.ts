import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  output: string;

  accumulator: number;

  lastOperator: string;

  hasStartedTyping: boolean;

  constructor() {
  }

  ionViewDidEnter() {
    this.hasStartedTyping = false;
    this.output = '0';
  }

  pushEquals() {
    switch (this.lastOperator) {
      case '+':
        this.output = '' + (this.accumulator + parseInt(this.output, 10));
        break;
      case '-':
        // TODO.
        break;
      default:
        alert('deze operator bestaat (nog) niet');
    }
    this.hasStartedTyping = false;
  }

  pushOperator(event) {
    // Na een operator kiezen kan de gebruiker een nieuw getal gaan intikken.
    this.hasStartedTyping = false;

    const currentOperator = event.target.innerHTML;
    this.accumulator = parseInt(this.output, 10);
    this.lastOperator = currentOperator;
  }

  push(event) {
    const currentDigit = event.target.innerHTML;
    if (this.hasStartedTyping) {
      this.output += currentDigit;
    } else {
      this.output = currentDigit;
      this.hasStartedTyping = true;
    }
  }

  clear() {
    this.output = '0';
  }
}
