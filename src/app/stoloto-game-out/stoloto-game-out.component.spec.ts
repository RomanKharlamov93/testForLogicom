import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StolotoGameOutComponent } from './stoloto-game-out.component';

describe('StolotoGameOutComponent', () => {
  let component: StolotoGameOutComponent;
  let fixture: ComponentFixture<StolotoGameOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StolotoGameOutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StolotoGameOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
