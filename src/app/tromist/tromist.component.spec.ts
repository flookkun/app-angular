import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TromistComponent } from './tromist.component';

describe('TromistComponent', () => {
  let component: TromistComponent;
  let fixture: ComponentFixture<TromistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TromistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TromistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
