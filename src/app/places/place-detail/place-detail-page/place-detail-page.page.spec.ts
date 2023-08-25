import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlaceDetailPagePage } from './place-detail-page.page';

describe('PlaceDetailPagePage', () => {
  let component: PlaceDetailPagePage;
  let fixture: ComponentFixture<PlaceDetailPagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PlaceDetailPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
