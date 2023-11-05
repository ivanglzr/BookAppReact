import { Books, ActionTypes, BookReducerActions } from "../index.d";

export const initialState: Books = [
  { title: "Hola", author: "a", year: 2020, pages: 100, language: "fr" },
];

export function booksReducer(state: Books, action: ActionTypes) {
  const { type, payload } = action;

  if (type === BookReducerActions.ADD_BOOK) {
    return [...state, payload];
  }

  if (type === BookReducerActions.REMOVE_BOOK) {
    const bookIndex = state.findIndex((e) => e.title === payload);

    return bookIndex !== -1 ? state.splice(bookIndex, 1) : state;
  }

  return state;
}
