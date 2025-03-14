import React from 'react';
import countryFacts from "../api/countryData.json";

export const About = () => {
  return (
    <section className='section-about container'>
      <h2 className='container-title'> Here is the intesresting facts
        <br />We are proud of.
      </h2>
      <div className='gradient-cards'>
        {
          countryFacts.map((country) => {
            const { id, name, capital, population, area, tourist_place, interesting_fact } = country; // Fixed destructuring keys
            return (
              <div className="card" key={id}>
                <div className="container-card bg-blue-box">
                  <p className='card-title'>{name}</p>
                  <p><span className='card-description'>Capital:</span> {capital}</p>
                  <p><span className='card-description'>Population:</span> {population}</p>
                  <p><span className='card-description'>Area:</span> {area}</p>
                  <p><span className='card-description'>Tourist Place:</span> {tourist_place}</p>
                  <p><span className='card-description'>Interresting Fats:</span> {interesting_fact}</p>
                </div>
              </div>
            );
          })
        }
      </div>
    </section>
  );
};
