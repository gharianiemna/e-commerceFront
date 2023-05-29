import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesCarosselComponent } from './images-carossel.component';

describe('ImagesCarosselComponent', () => {
  let component: ImagesCarosselComponent;
  let fixture: ComponentFixture<ImagesCarosselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagesCarosselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImagesCarosselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
