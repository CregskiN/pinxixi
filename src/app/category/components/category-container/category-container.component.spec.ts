import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatagoryContainerComponent } from './category-container.component';

describe('CatagoryContainerComponent', () => {
  let component: CatagoryContainerComponent;
  let fixture: ComponentFixture<CatagoryContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatagoryContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatagoryContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
