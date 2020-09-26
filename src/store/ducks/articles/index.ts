import { Reducer } from 'redux';
import { ArticleState, ArticlesTypes } from './types';

const INITIAL_STATE: ArticleState = {
  data: [],
  error: false,
  loading: false,
};

const reducer: Reducer<ArticleState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ArticlesTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case ArticlesTypes.LOAD_SUCCCES:
      return {
      ...state, loading: false, error: false, data: action.payload.data,
      };
    case ArticlesTypes.LOAD_FAILURE:
      return {
      ...state, loading: false, error: true, data: [],
      };
    default:
      return state;
  }
};

export default reducer;