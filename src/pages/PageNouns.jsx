import { useFetch } from "../hooks/useFetch";

export const PageNouns = () => {
  const { items: nouns, itemTotal: totalNouns } = useFetch(
    "http://localhost:4433/nouns"
  );

  // 	const createMarkup = () => {
  // return {_html:{}}
  // 	}

  console.log(nouns);

  return (
    <div className="page_welcome">
      <h2>Nouns</h2>
      <h2>There are {totalNouns} nouns.</h2>
      <p>Explore the nouns in german on this site.</p>
      {/* <div dangerouslySetInnerHTML={{ _html: { nouns } }}></div> */}
      <div>{nouns}</div>
    </div>
  );
};
