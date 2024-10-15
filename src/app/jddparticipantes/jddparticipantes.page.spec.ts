import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JddparticipantesPage } from './jddparticipantes.page';

describe('JddparticipantesPage', () => {
  let component: JddparticipantesPage;
  let fixture: ComponentFixture<JddparticipantesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(JddparticipantesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
