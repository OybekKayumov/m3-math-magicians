import './pages.css';

const Quote = () => {
  const quoteText = '"Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking."';
  const quoteAuthor = '- Steve Jobs';

  return (
    <div className="quote-container">
      <p>{quoteText}</p>
      <span>{quoteAuthor}</span>
    </div>
  );
};

export default Quote;
