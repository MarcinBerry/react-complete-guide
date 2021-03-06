import {Link, Route, Router, useParams, useRouteMatch} from "react-router-dom";

import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
const DUMMY_QUOTES = [
  { id: "q1", author: "Max", text: "Learning React is Fun" },
  { id: "q2", author: "Maxim", text: "Learning React is Great" },
  { id: "q3", author: "Ma", text: "Learning React Fun" },
  { id: "q4", author: "Maxaw", text: "Learning is Fun" },
];
const QuoteDetail = () => {
  const params = useParams();
  const match = useRouteMatch();
  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <p>No quote found</p>;
  }
  return (
    <>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${params.quoteId}`} exact>
        <div className='centered'>
          <Link className='btn--flat' to={`${match.url}/comments`}>Load Comments</Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </>
  );
};
export default QuoteDetail;
