import { createAction, props } from '@ngrx/store';
import { ChatActionTypes } from '../enums/actions-ai-chat.enum';

export const sendResquestMessage = createAction(ChatActionTypes.SEND_REQUEST_MESSAGE, props<{ request: string }>());
export const sendResquestMessageSucces = createAction(
  ChatActionTypes.SEND_REQUEST_MESSAGE_SUCCESS,
  props<{ response: string }>()
);
export const sendResquestMessageFailed = createAction(
  ChatActionTypes.SEND_REQUEST_MESSAGE_FAILED,
  props<{ error: string }>()
);
export const sendResquestImage = createAction(ChatActionTypes.SEND_REQUEST_IMAGE, props<{ request: File }>());
export const sendResquestImageSucces = createAction(
  ChatActionTypes.SEND_REQUEST_IMAGE_SUCCESS,
  props<{ response: string }>()
);
export const sendResquestImageFailed = createAction(
  ChatActionTypes.SEND_REQUEST_IMAGE_FAILED,
  props<{ error: string }>()
);
