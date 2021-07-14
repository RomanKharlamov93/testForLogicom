import { Component, EventEmitter, HostBinding, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-stoloto-game-field',
    templateUrl: './stoloto-game-field.component.html',
    styleUrls: ['./stoloto-game-field.component.scss']
})
export class StolotoGameFieldComponent implements OnInit {
    @HostBinding ('class') flexGrow = 'flex-grow';
    @Input() minLengthOfArray: number;
    @Output() submitted: EventEmitter<boolean>;
    @Output() concatArrays: EventEmitter<any>;

    public title: string;
    public data = Array.from(Array(20), (d, i) => i + 1);
    public leftArr = [];
    public rightArr = [];
    public isSubmittedEnabled = false;
    public leftCheckedElements: boolean[] = [];
    public rightCheckedElements: boolean[] = [];

    constructor() {
      this.submitted = new EventEmitter<boolean>();
      this.concatArrays = new EventEmitter<any>();
    }

    ngOnInit(): void {
        this.title = `Отметьте не менее ${this.minLengthOfArray} чисел в каждом из полей`;
    }

    public onLeftListChange(event): void {
        if (event.target.checked) {
            this.leftArr.push(event.target.value);
        } else {
            this.leftArr = this.leftArr.filter((item) => item !== event.target.value);
        }
        this.counterHelper();
    }

    public onRightListChange(event): void {
        if (event.target.checked) {
            this.rightArr.push(event.target.value);
        } else {
            this.rightArr = this.rightArr.filter((item) => item !== event.target.value);
        }
        this.counterHelper();
    }

    public counterHelper(): void {
      this.isSubmittedEnabled = this.leftArr.length >= this.minLengthOfArray && this.rightArr.length >= this.minLengthOfArray;
    }

    public submit(): void {
        this.submitted.emit(true);
        const newArray = [
          [],
          []
        ];

        newArray[0] = this.leftArr.reduce((array, item) => {
          array.push(item);
          return array;
        }, []);

        newArray[1] = this.rightArr.reduce((array, item) => {
          array.push(item);
          return array;
        }, []);
        this.concatArrays.emit(newArray);
    }
}
