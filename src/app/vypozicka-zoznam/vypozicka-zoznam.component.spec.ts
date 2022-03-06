import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VypozickaZoznamComponent } from './vypozicka-zoznam.component';

describe('VypozickaZoznamComponent', () => {
  let component: VypozickaZoznamComponent;
  let fixture: ComponentFixture<VypozickaZoznamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VypozickaZoznamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VypozickaZoznamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
