import { useFetch } from "../hooks/useFetch";

export const PageBooks = () => {
  const { items, itemTotal } = useFetch("http://localhost:4433/");

  console.log(items, itemTotal);

  return (
    <div className="page_books">
      <h2>There are {itemTotal} books.</h2>

      <ul>
        {items.map((book) => {
          return <li key={book.id}>{book.title}</li>;
        })}
      </ul>
    </div>
  );
};
