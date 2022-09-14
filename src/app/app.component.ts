import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'generator-password';
  password = '';
  letter = false;
  symbols = false;
  number = false;
  errorMessage = '';
  length = 0;
  constructor() {
    this.password = '';
  }
  onChangeLength($event: any) {
    this.length = $event.target.value;
  }
  onChangeLetter() {
    this.letter = !this.letter;
  }
  onChangeSymbols() {
    this.symbols = !this.symbols;
  }
  onChangeNumber() {
    this.number = !this.number;
  }
  
  generatorPasswordClicked() {
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$%^&*()';

    let vaildChar = '';
    let result = '';
    // if (!this.letter || !this.symbols || !this.number) {
    //   this.errorMessage = 'Please select at least one';
    //   return
    // }

    if (this.letter) {
      vaildChar += letters;
    }
    if (this.number) {
      vaildChar += numbers;
    }
    if (this.symbols) {
      vaildChar += symbols;
    }
    for (let i = 0; i < this.length; i++) {
      result += vaildChar[Math.floor(Math.random() * vaildChar.length)];
    }
    this.password = result;
  }
}
