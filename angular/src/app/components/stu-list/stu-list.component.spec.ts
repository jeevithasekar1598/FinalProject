import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StuListComponent } from './stu-list.component';

describe('StuListComponent', () => {
  let component: StuListComponent;
  let fixture: ComponentFixture<StuListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StuListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StuListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
