import { RouterReducerState } from '@ngrx/router-store';
import { createFeatureSelector } from '@ngrx/store';

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
export const selectRouter = createFeatureSelector<RouterReducerState<any>>('router');
