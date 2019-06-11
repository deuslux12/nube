import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotoundPageComponent } from './notound-page.component';

describe('NotoundPageComponent', () => {
  let component: NotoundPageComponent;
  let fixture: ComponentFixture<NotoundPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotoundPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotoundPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
