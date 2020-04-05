import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArhsCoreComponent } from './arhs-core.component';

describe('ArhsCoreComponent', () => {
  let component: ArhsCoreComponent;
  let fixture: ComponentFixture<ArhsCoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArhsCoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArhsCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
