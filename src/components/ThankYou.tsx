import thankYou from '../assets/illustration-thank-you.svg';

const ThankYou = ({ rating }: { rating: number }) => {
  return (
    <>
      <img src={thankYou} alt="thank you" />
      <p className="highlight">You selected {rating} out of 5</p>
      <h1>Thank you!</h1>
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </>
  );
};

export default ThankYou;
