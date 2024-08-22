import { CommonModule, NgClass } from '@angular/common';
import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-game-result',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game-result.component.html',
  styleUrl: './game-result.component.css'
})
export class GameResultComponent {
  @Input() guess : number | undefined;
  @Input() numberToGuess : number | undefined;
  result : string = "";

  ngOnChanges(change : SimpleChanges) {
    console.log(change);
    if(change["guess"] && this.guess !== undefined && this.numberToGuess !== undefined){
      if(this.guess == this.numberToGuess) {
        this.result = "You guessed right!";
      }
      else if(this.guess < this.numberToGuess) {
        this.result = "Try a higher number!";
      }
      else {
        this.result = "Try a lower number!";
      }
    }
  }
}
