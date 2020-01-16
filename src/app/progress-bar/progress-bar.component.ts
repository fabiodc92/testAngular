import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {
  @Input() progress: number;
  @Input() progress2: number;

  @Output() progressChange = new EventEmitter<number>();
  @Output() progressChange2 = new EventEmitter<number>();

  increment = 15;

  ngOnInit() {
  }

  onClickButton(event: MouseEvent) {
    const delta = 100 - this.progress;
    if (delta > this.increment) {
      this.progressChange.emit(this.increment);
    } else {
      this.progressChange.emit(delta);
    }
  }

  onClickButton2(event: MouseEvent) {
    const delta = 100 - this.progress2;
    if (delta > this.increment) {
      this.progressChange2.emit(this.increment);
    } else {
      this.progressChange2.emit(delta);
    }
  }
}
