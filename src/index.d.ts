enum Languages {
  es = "es",
  en = "en",
  fr = "fr",
  de = "de",
}

type BookLanguages = keyof typeof Languages;

export interface Book {
  title: string;
  author: string;
  year: number;
  pages: number;
  language: BookLanguages;
}

export type Books = Book[];

export enum BookReducerActions {
  ADD_BOOK = "ADD_BOOK",
  REMOVE_BOOK = "REMOVE_BOOK",
  EDIT_BOOK = "EDIT_BOOK",
}

export type ActionTypes =
  | { type: BookReducerActions.ADD_BOOK; payload: Book }
  | { type: BookReducerActions.REMOVE_BOOK; payload: string }
  | { type: BookReducerActions.EDIT_BOOK; payload: Book };
