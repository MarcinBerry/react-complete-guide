import QuoteList from "../components/quotes/QuoteList";
import LoadingSpinner from '../components/UI/LoadingSpinner';
import NoQuotesFound from '../components/quotes/NoQuotesFound';
import useHttp from '../hooks/use-http';
import { getAllQuotes } from '../lib/api';

const AllQuotes = () => {
  const {sendRequest, status, data: loadedQuotes, error } = useHttp(
    getAllQuotes,
    true
  );
useEffect(() => {
  sendRequest();
  ), [sendRequest]);
  
if)status === 'pending') {
  return (
    <div className='centered'>
      <LoadingSpinner />
    </div> 
    );

  if(error) {
    return <p className='centered focused'>{error}</p>; 
  }
  if(status === 'completed' && (!loadingQuotes || loadedQuotes.length === 0)) {
    return <NoQuotesFound />
      
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
