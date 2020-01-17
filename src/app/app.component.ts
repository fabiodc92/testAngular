import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked, AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy, OnChanges, AfterViewChecked, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit {
  progress = 0;
  progress2 = 0;


  updateProgress(value: number): void {
    this.progress += value;
  }
  updateProgress2(value: number): void {
    this.progress2 += value;
  }

  /*Respond when Angular (re)sets data-bound input properties. The method receives a SimpleChanges object of current and previous property values.*/
  ngOnChanges(changes: SimpleChanges): void {
    console.log('OnChanges App component');
  }

  /*Initialize the directive/component after Angular first displays the data-bound properties and sets the directive/component's input properties.*/
  ngOnInit(): void {
    console.log('OnInit App component');
  }

  /*Detect and act upon changes that Angular can't or won't detect on its own.*/
  ngDoCheck(): void {
    console.log('Do Check App Component');
  }

  /*Respond after Angular projects external content into the component's view / the view that a directive is in.*/
  ngAfterContentInit(): void {
    console.log('After content init App Component');
  }

  /*Respond after Angular checks the content projected into the directive/component.*/
  ngAfterContentChecked(): void {
    console.log('After content checked App Component');
  }

  /*Respond after Angular initializes the component's views and child views / the view that a directive is in.*/
  ngAfterViewInit(): void {
    console.log('After view init App Component');
  }

  /*Respond after Angular checks the component's views and child views / the view that a directive is in.*/
  ngAfterViewChecked(): void {
    console.log('After View Checked App component');
  }

  /*Cleanup just before Angular destroys the directive/component. */
  ngOnDestroy(): void {
    console.log('OnDestroy App component');
  }

}
