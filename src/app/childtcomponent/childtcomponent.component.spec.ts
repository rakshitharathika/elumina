import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildtcomponentComponent } from './childtcomponent.component';

describe('ChildtcomponentComponent', () => {
  let component: ChildtcomponentComponent;
  let fixture: ComponentFixture<ChildtcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildtcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildtcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
