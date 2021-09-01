import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklydataComponent } from './weeklydata.component';

describe('WeeklydataComponent', () => {
  let component: WeeklydataComponent;
  let fixture: ComponentFixture<WeeklydataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeeklydataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklydataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
