import { Inject, Injectable, inject } from '@angular/core';
import { AI_API_CLIENT, IAIClient } from '../../services/iai.service';
import { sendResquestImage, sendResquestImageFailed, sendResquestImageSucces, sendResquestMessage, sendResquestMessageFailed, sendResquestMessageSucces } from '../actions/chat.action';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, of, switchMap } from 'rxjs';

@Injectable()
export class AiChatEffects {
  private actions: Actions = inject(Actions);
  constructor(@Inject(AI_API_CLIENT) private readonly aiApi: IAIClient) {}

  public sendResquestMessage$ = createEffect(() =>
    this.actions.pipe(
      ofType(sendResquestMessage),
      switchMap((action) => {
        return this.aiApi.chat(action.request).pipe(
          switchMap((response) => {
            return of(sendResquestMessageSucces({ response: response.message }));
          }),
          catchError((error:any) => of(sendResquestMessageFailed({ error : error.message })))
        );
      })
    )
  );
  public sendResquestImage$ = createEffect(() =>
    this.actions.pipe(
      ofType(sendResquestImage),
      switchMap((action) => {
        return this.aiApi.sendImage(action.request).pipe(
          switchMap((response) => {
            return of(sendResquestImageSucces({ response: response.message }));
          }),
          catchError((error:any) => of(sendResquestImageFailed({ error : error.message })))
        );
      })
    )
  );
}
