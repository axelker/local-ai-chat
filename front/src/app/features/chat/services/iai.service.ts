// angular
import { InjectionToken } from '@angular/core';

// thirds
import { Observable } from 'rxjs';
import { IChatResponse } from '../models/ichat-response';

export const AI_API_CLIENT = new InjectionToken<IAIClient>('AI_API_CLIENT');

export interface IAIClient {
  chat(input: string): Observable<IChatResponse>;
  sendImage(input: File): Observable<IChatResponse>;
}
