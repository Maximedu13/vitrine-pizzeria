import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MockPizzaComponent } from './mock-pizza.component';

describe('MockPizzaComponent', () => {
  let component: MockPizzaComponent;
  let fixture: ComponentFixture<MockPizzaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MockPizzaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MockPizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
