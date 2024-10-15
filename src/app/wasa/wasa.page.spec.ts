import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WasaPage } from './wasa.page';

describe('WasaPage', () => {
  let component: WasaPage;
  let fixture: ComponentFixture<WasaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(WasaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
