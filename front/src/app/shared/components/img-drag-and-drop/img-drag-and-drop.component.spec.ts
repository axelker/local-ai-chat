import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgDragAndDropComponent } from './img-drag-and-drop.component';

describe('ImgDragAndDropComponent', () => {
  let component: ImgDragAndDropComponent;
  let fixture: ComponentFixture<ImgDragAndDropComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImgDragAndDropComponent]
    });
    fixture = TestBed.createComponent(ImgDragAndDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
