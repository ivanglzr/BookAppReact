import "./App.css";

import { useReducer } from "react";

import { Book, BookReducerActions } from "./index.d";

import { booksReducer, initialState } from "./reducers/books";

export default function App() {
  const [books, dispatch] = useReducer(booksReducer, initialState);

  const handleClick = () =>
    dispatch({ type: BookReducerActions.ADD_BOOK, payload: initialState[0] });

  return (
    <>
      <h1>Hola mundo</h1>
      <button onClick={handleClick}>Click</button>
      {books.map((e: Book) => {
        return (
          <>
            <h1>{e.title}</h1>
            <h2>{e.author}</h2>
            <h2>{e.year}</h2>
          </>
        );
      })}
    </>
  );
}
