import { createFeatureSelector } from '@ngrx/store';
import { IChatState } from '../interfaces/ichat-state';

export const selectChatState = createFeatureSelector<IChatState>('chat');
