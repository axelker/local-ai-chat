import { createReducer, on } from '@ngrx/store';
import { AiChatState } from '../interfaces/ai-chat-state';
import { sendResquestImage, sendResquestImageFailed, sendResquestImageSucces, sendResquestMessage, sendResquestMessageFailed, sendResquestMessageSucces } from '../actions/chat.action';

export const initialStateAiChat: AiChatState = {
  message: '',
  error: null,
  loading: false,
};
export const AiChatReducer = createReducer(
  initialStateAiChat,
  on(sendResquestMessage, (state: AiChatState) => ({
    ...state,
    loading: true,
  })),
  on(sendResquestMessageSucces, (state: AiChatState, action) => ({
    ...state,
    loading: false,
    message: action.response,
    error:null
  })),
  on(sendResquestMessageFailed, (state: AiChatState, action) => ({
    ...state,
    loading: false,
    error: action.error,
  })),
  on(sendResquestImage, (state: AiChatState) => ({
    ...state,
    loading: true,
  })),
  on(sendResquestImageSucces, (state: AiChatState, action) => ({
    ...state,
    loading: false,
    message: action.response,
    error:null
  })),
  on(sendResquestImageFailed, (state: AiChatState, action) => ({
    ...state,
    loading: false,
    error: action.error,
  }))
);
