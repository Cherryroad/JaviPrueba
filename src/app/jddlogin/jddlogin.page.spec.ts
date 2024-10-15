import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JddloginPage } from './jddlogin.page';

describe('JddloginPage', () => {
  let component: JddloginPage;
  let fixture: ComponentFixture<JddloginPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(JddloginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
