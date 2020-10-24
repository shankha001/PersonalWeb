import React from "react";
import "./home.styles.scss";
import { useQuery, gql } from "@apollo/client";
import { ReactComponent as ProfilePic } from "../../assets/profile.svg";
import Typical from "react-typical";
function Home() {
  return (
    <div className="home__container">
      <div className="home__me">
        <h1>Hi,</h1>
        <h1>I'm Shankha</h1>

        <h1>
          I'm a{" "}
          <Typical
            steps={[
              "B.Tech(CSE) Student",
              1000,
              "Coder",
              1000,
              "Web Developer",
              1000,

              "Data Science Enthusiast",
              1000,
            ]}
            loop={Infinity}
            wrapper="b"
          />
        </h1>
      </div>
      <div className="home__photo">
        <ProfilePic style={{ width: "50%", height: "50%" }} />
      </div>
    </div>
  );
}

// const EXCHANGE_RATES = gql`
//   query G {
//     books {
//       title
//       author
//     }
//   }
// `;

// function Home() {
//   const ExchangeRates = () => {
//     const { loading, error, data } = useQuery(EXCHANGE_RATES);
//     if (loading) return <p>Loading...</p>;
//     if (error) return <p>Error :(</p>;

//     return data.books.map(({ title, author }) => (
//       <div key={title}>
//         <p>
//           {title}: {author}
//         </p>
//       </div>
//     ));
//   };
//   return (
//     <div className="home__container">
//       <div>Home</div>
//       <ExchangeRates />
//     </div>
//   );
// }

export default Home;
