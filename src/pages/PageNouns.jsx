import { useFetch } from "../hooks/useFetch";

export const PageNouns = () => {
  const { items: nouns } = useFetch("http://localhost:4433/nouns");

  return (
    <div className="page_nouns">
      <h2>Nouns</h2>
      <p>Explore the nouns in german on this site.</p>
      {/* <div dangerouslySetInnerHTML={{ _html: { nouns } }}></div> */}
      <ul>
        {nouns.map((noun) => {
          return (
            <li key={noun.id}>
              {noun.article} {noun.singular}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
