import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JklComponent } from './jkl.component';

describe('JklComponent', () => {
  let component: JklComponent;
  let fixture: ComponentFixture<JklComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JklComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JklComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
