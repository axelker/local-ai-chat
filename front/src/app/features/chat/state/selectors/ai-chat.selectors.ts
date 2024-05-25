import { createSelector } from '@ngrx/store';
import { selectChatState } from './chat.selector';

//Selecteur pour obtenir le ai chat state
export const selectAIChat = createSelector(selectChatState, (state) => state.aiChat);

export const selectAIChatMessage = createSelector(selectAIChat, (state) => state.message);
export const selectAIChatLoading = createSelector(selectAIChat, (state) => state.loading);
export const selectAIChatError = createSelector(selectAIChat, (state) => state.error);
