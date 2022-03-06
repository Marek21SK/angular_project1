import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VypozickaStrankaComponent } from './vypozicka-stranka.component';

describe('VypozickaStrankaComponent', () => {
  let component: VypozickaStrankaComponent;
  let fixture: ComponentFixture<VypozickaStrankaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VypozickaStrankaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VypozickaStrankaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
