import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadModule } from 'primeng/fileupload';
import { SharedRoutingModule } from './shared-routing.module';
import { ImgDragAndDropComponent } from './components/img-drag-and-drop/img-drag-and-drop.component';


@NgModule({
  declarations: [
    ImgDragAndDropComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FileUploadModule
  ],
  exports: [ImgDragAndDropComponent]
})
export class SharedModule { }
