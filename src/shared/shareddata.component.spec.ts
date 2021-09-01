import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareddataComponent } from './shareddata.component';

describe('ShareddataComponent', () => {
  let component: ShareddataComponent;
  let fixture: ComponentFixture<ShareddataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShareddataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareddataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
