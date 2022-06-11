import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZbiorkaComponent } from './zbiorka.component';

describe('ZbiorkaComponent', () => {
  let component: ZbiorkaComponent;
  let fixture: ComponentFixture<ZbiorkaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZbiorkaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZbiorkaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
