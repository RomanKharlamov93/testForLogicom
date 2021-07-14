import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StolotoGameFieldComponent } from './stoloto-game-field.component';

describe('StolotoGameFieldComponent', () => {
  let component: StolotoGameFieldComponent;
  let fixture: ComponentFixture<StolotoGameFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StolotoGameFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StolotoGameFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
