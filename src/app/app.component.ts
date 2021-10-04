import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'learning-angular-events';
  evenList: number[] = [];
  oddList: number[] = [];

  onStartGame(number: number) {
    if (number % 2 === 0) {
      this.evenList.push(number);
    }
    else {
      this.oddList.push(number);
    }
  }

  onEndGame() {
    
  }

}
