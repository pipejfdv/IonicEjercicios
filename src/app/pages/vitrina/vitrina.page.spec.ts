import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VitrinaPage } from './vitrina.page';

describe('VitrinaPage', () => {
  let component: VitrinaPage;
  let fixture: ComponentFixture<VitrinaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VitrinaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
