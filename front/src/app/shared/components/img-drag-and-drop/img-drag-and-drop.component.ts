import { Component, EventEmitter, Output } from '@angular/core';
import { UploadEvent } from '../../interfaces/UploadEvent';


@Component({
  selector: 'app-img-drag-and-drop',
  templateUrl: './img-drag-and-drop.component.html',
  styleUrls: ['./img-drag-and-drop.component.scss']
})
export class ImgDragAndDropComponent {
  @Output() uploadImage : EventEmitter<File> = new EventEmitter<File>();
  uploadedFiles:any [] = [];
  maxFileSize: number = 1000000;

  onUploadHandler(event:UploadEvent) {
    this.uploadImage.emit(event.files[0]);
  }
}
