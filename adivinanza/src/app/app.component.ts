import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NumberInputComponent } from './number-input/number-input.component';
import { GameResultComponent } from './game-result/game-result.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NumberInputComponent, GameResultComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  guess : number | undefined;
  numberToGuess : number = 0;


  ngOnInit() {
    this.generateNumber();
    console.log(this.numberToGuess);
  }

  generateNumber() {
    this.numberToGuess = Math.floor(Math.random() * 10) + 1;
  }

  onGuessMade(guess: number) {
    this.guess = guess;
  }
}
