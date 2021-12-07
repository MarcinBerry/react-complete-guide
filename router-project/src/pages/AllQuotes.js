import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  { id: "q1", author: "Max", text: "Learning React is Fun" },
  { id: "q2", author: "Maxim", text: "Learning React is Great" },
  { id: "q3", author: "Ma", text: "Learning React Fun" },
  { id: "q4", author: "Maxaw", text: "Learning is Fun" },
];

const AllQuotes = (props) => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
