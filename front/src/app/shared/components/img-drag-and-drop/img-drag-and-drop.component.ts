import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UploadEvent } from '../../interfaces/UploadEvent';


@Component({
  selector: 'app-img-drag-and-drop',
  templateUrl: './img-drag-and-drop.component.html',
  styleUrls: ['./img-drag-and-drop.component.scss']
})
export class ImgDragAndDropComponent {
  @Input() useSend: boolean = true;
  @Input() useCancel: boolean = true;
  @Output() sendImage : EventEmitter<File> = new EventEmitter<File>();
  uploadedFiles:any [] = [];
  maxFileSize: number = 1000000;

  onUploadHandler(event:UploadEvent) {
    this.sendImage.emit(event.files[0]);
  }
}
