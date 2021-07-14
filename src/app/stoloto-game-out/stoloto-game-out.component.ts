import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-stoloto-game-out',
  templateUrl: './stoloto-game-out.component.html',
  styleUrls: ['./stoloto-game-out.component.scss']
})
export class StolotoGameOutComponent implements OnInit {
  @Input() selectedNumbers: Array<any>;
  @Output() clearState: EventEmitter<boolean>;

  public title = 'Угадали 4 числа в поле 1 и 4 в поле 2, это суперприз!';
  public text = 'Представьте себе на сколько это редкое явление? Вы угадали все числа.' +
    'Боимся представить, каков был бы ваш выйгрышь, но это суперприз!';
  public btnText = 'Купить настоящий билет "Спортлото 4 из 20';

  constructor() {
    this.clearState = new EventEmitter<boolean>();
  }

  ngOnInit() {
  }

  submit() {
    console.log('THIS IS THE EEEND MYYY OOONLYY FRIEEEND THE EEEND');
    this.clearState.emit(true);
  }
}
