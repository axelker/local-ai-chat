import { combineReducers } from '@ngrx/store';
import { IChatState } from '../interfaces/ichat-state';
import { AiChatReducer, initialStateAiChat } from './aichat-reducer';

export const initialState: IChatState = {
  aiChat: initialStateAiChat,
};

export const ChatReducerCombined = combineReducers(
  {
    aiChat: AiChatReducer,
  },
  initialState
);
