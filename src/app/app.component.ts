import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  progress = 0;
  progress2 = 0;


  updateProgress(value: number): void {
    this.progress += value;
  }
  updateProgress2(value: number): void {
    this.progress2 += value;
  }
}
