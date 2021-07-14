import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public showtime = false;
  public showThirdTempl = false;
  public listOfNumbers = [];

  constructor() {}

  ngOnInit(): void { }


  public showContent(): void {
    this.showtime = true;
  }

  public fieldsSelected(event: boolean) {
    this.showThirdTempl = event;
  }

  public getNumbers(event) {
    this.listOfNumbers = event;
  }

  public clearState(event: boolean) {
    if (event) {
      this.listOfNumbers = [];
      this.showThirdTempl = false;
      this.showtime = false;
    }
  }
}
