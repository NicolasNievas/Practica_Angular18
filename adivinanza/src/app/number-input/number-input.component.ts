import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-number-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './number-input.component.html',
  styleUrl: './number-input.component.css'
})
export class NumberInputComponent {
  @Output() guessMade = new EventEmitter<number>();
  guess : number | undefined;

  makeGuess() {
    this.guessMade.emit(this.guess);
    this.guess = undefined;
  }
}
