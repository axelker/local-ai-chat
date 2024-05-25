// angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatAiComponent } from './components/chat-ai/chat-ai.component';

const routes: Routes = [
  {
    path: '',
    component: ChatAiComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatRoutingModule {}
