import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatAiComponent } from './components/chat-ai/chat-ai.component';
import { ChatRoutingModule } from './chat-routing.module';
import { AI_API_CLIENT } from './services/iai.service';
import { CustomAiService } from './services/custom-ai.service';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { ChatReducerCombined } from './state/reducers/chat-reducer';
import { EffectsModule } from '@ngrx/effects';
import { CHAT_EFFECTS } from './state/effects/chat.effects';
import { HttpClientModule } from '@angular/common/http';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DisplayMessageComponent } from './components/display-message/display-message.component';
import { ToastModule } from 'primeng/toast';
import { MessageModule } from 'primeng/message';
import { MessageService } from 'primeng/api';
import { SharedModule } from 'src/app/shared/shared.module';
import { OverlayPanelModule } from 'primeng/overlaypanel';

@NgModule({
  declarations: [ChatAiComponent, DisplayMessageComponent],
  imports: [
    CommonModule,
    ChatRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forFeature('chat', ChatReducerCombined),
    EffectsModule.forFeature([...CHAT_EFFECTS]),
    SharedModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    ProgressSpinnerModule,
    ScrollPanelModule,
    InputTextareaModule,
    ToastModule,
    MessageModule,
    OverlayPanelModule
  ],
  providers: [
    {
      provide: AI_API_CLIENT,
      useClass: CustomAiService,
    },
    MessageService
  ],
})
export class ChatModule {}
