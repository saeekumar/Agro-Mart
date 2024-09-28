import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyngentaSeedsComponent } from './syngenta-seeds.component';

describe('SyngentaSeedsComponent', () => {
  let component: SyngentaSeedsComponent;
  let fixture: ComponentFixture<SyngentaSeedsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SyngentaSeedsComponent]
    });
    fixture = TestBed.createComponent(SyngentaSeedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
