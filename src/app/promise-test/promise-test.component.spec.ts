import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromiseTestComponent } from './promise-test.component';

describe('PromiseTestComponent', () => {
  let component: PromiseTestComponent;
  let fixture: ComponentFixture<PromiseTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromiseTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromiseTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
