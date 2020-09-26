/**
 * Action types
 */

 export enum ArticlesTypes {
    LOAD_REQUEST = '@articles/LOAD_REQUEST',
    LOAD_SUCCCES = '@articles/LOAD_SUCCCES',
    LOAD_FAILURE = '@articles/LOAD_FAILURE'
} ;

/**
 * Reducer
 */

 export interface Article {
    id: number
    title: string
    img: string
    text: string
 }
 

 /**
  * Action creators
  */

  export interface ArticleState {
        readonly data: Article[]
        readonly loading: boolean
        readonly error: boolean
  }