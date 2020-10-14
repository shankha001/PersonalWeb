import React from 'react';
import './home.styles.scss';
import { useQuery, gql } from '@apollo/client';

const EXCHANGE_RATES = gql`
  query G {
    books {
      title
      author
    }
  }
`;

function Home() {
  const ExchangeRates = () => {
    const { loading, error, data } = useQuery(EXCHANGE_RATES);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return data.books.map(({ title, author }) => (
      <div key={title}>
        <p>
          {title}: {author}
        </p>
      </div>
    ));
  };
  return (
    <div className="home__container">
      <div>Home</div>
      <ExchangeRates />
    </div>
  );
}

export default Home;
