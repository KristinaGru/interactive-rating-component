import { useState } from 'react';
import star from '../assets/icon-star.svg';
import ThankYou from './ThankYou';

const Rating = () => {
  const [rating, setRating] = useState<number>(0);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const renderButtons = () => {
    const buttons: React.ReactElement[] = [];
    for (let i = 1; i <= 5; i++) {
      buttons.push(
        <button
          type="button"
          className={`circle ${rating === i ? 'selected' : null}`}
          key={i}
          onClick={() => {
            setRating(i);
          }}>
          {i}
        </button>
      );
    }
    return buttons;
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className={`box ${submitted ? 'center' : null}`}>
      {!submitted ? (
        <form onSubmit={submit}>
          <span className="circle">
            <img src={star} alt="star" />
          </span>
          <h1>How did we do?</h1>
          <p>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
          <div className="row">{renderButtons()}</div>
          <button type="submit" className="submit" disabled={!rating}>
            SUBMIT
          </button>
        </form>
      ) : (
        <ThankYou rating={rating} />
      )}
    </div>
  );
};

export default Rating;
