import React, { useEffect, useState, useRef } from 'react';
import './QuotesScrollSection.css';

const QuotesScrollSection = () => {
  const [quotes, setQuotes] = useState([]);
  const quoteRefs = useRef([]);

  useEffect(() => {
    fetch('https://dummyjson.com/quotes?limit=5')
      .then(res => res.json())
      .then(data => setQuotes(data.quotes))
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('slide-in');
          }
        });
      },
      { threshold: 0.2 }
    );

    quoteRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      quoteRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [quotes]);

  return (
    <div className="quote-section">
      <div className="overlay-bg">
        <h1 className="main-title">Life Quotes</h1>
        <div className="quotes-wrapper">
          {quotes.map((quote, index) => (
            <div
              key={quote.id}
              ref={el => (quoteRefs.current[index] = el)}
              className="quote-card initial-hidden"
            >
              <p className="quote-text">“{quote.quote}”</p>
              <p className="quote-author">— {quote.author}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuotesScrollSection;
