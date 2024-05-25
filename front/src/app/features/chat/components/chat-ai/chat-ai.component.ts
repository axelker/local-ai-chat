import { Component, OnInit } from '@angular/core';
import { Observable, EMPTY, Subscription } from 'rxjs';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { selectAIChatError, selectAIChatLoading, selectAIChatMessage } from '../../state/selectors/ai-chat.selectors';
import { sendResquestImage, sendResquestMessage } from '../../state/actions/chat.action';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-chat-ai',
  templateUrl: './chat-ai.component.html',
  styleUrls: ['./chat-ai.component.scss'],
})
export class ChatAiComponent implements OnInit {
  sub: Subscription[] = [];
  messageResponse: Observable<string> = EMPTY;
  loading: Observable<boolean> = EMPTY;
  error: Observable<string | null> =EMPTY;
  form!: FormGroup;
  constructor(private readonly store: Store, private fb: FormBuilder, private messageService: MessageService) {}
  ngOnInit(): void {
    this.messageResponse = this.store.select(selectAIChatMessage);
    this.loading = this.store.select(selectAIChatLoading);
    this.error = this.store.select(selectAIChatError);
    this.initSubDisplayError();
    this.form = this.fb.group({
      'chat-input': new FormControl('', { validators: [Validators.required], nonNullable: true }),
    });
  }
  sendMessage(): void {
    this.store.dispatch(sendResquestMessage({ request: this.form.get('chat-input')?.value }));
  }
  initSubDisplayError(): void {
    this.sub.push(this.error.subscribe((err)=>  {
      if (err) {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: err });
      }
    }))
  }
  sendImg(event:File): void {
    this.store.dispatch(sendResquestImage({request:event}))
  }
}
