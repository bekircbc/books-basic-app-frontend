import { useFetch } from "../hooks/useFetch";

export const PageBooks = () => {
  const { items: books, itemTotal: totalBooks } = useFetch(
    "http://localhost:4433/book"
  );

  return (
    <div className="page_books">
      <h2>There are {totalBooks} books.</h2>

      <ul>
        {books.map((book) => {
          return <li key={book.id}>{book.title}</li>;
        })}
      </ul>
    </div>
  );
};
