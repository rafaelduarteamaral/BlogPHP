
import { action } from 'typesafe-actions';
import { ArticlesTypes, Article } from './types';

export const loadRequest = () => action(ArticlesTypes.LOAD_REQUEST);

export const loadSuccess = (data: Article[]) => action(ArticlesTypes.LOAD_SUCCCES, { data });

export const loadFailure = () => action(ArticlesTypes.LOAD_FAILURE);