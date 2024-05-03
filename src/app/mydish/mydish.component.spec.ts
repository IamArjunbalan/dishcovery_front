import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MydishComponent } from './mydish.component';

describe('MydishComponent', () => {
  let component: MydishComponent;
  let fixture: ComponentFixture<MydishComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MydishComponent]
    });
    fixture = TestBed.createComponent(MydishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
