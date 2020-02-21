import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandBandComponent } from './brand-band.component';

describe('BrandBandComponent', () => {
  let component: BrandBandComponent;
  let fixture: ComponentFixture<BrandBandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandBandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandBandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
