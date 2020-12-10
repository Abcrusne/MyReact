import React from 'react';
import Footer from '../component/Footer';
import MainContent from '../component/MainContent';
import Header from '../component/Header';
import Contactcard from './ContactCard';
import Joke from './Joke';

function App() {
  const name = 'bob';
  const date = new Date();
  const hours = date.getHours();
  let timeOfDay;
  const styles = {
    backgroundColor: 'black',
    fontSize: '100px',
  };
  if (hours < 12) {
    timeOfDay = 'morning';
    styles.color = 'orange';
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = 'afternoon';
    styles.color = 'pink';
  } else {
    timeOfDay = 'night';
    styles.color = 'blue';
  }

  return (
    <div>
      <h1 style={styles}>
        Good {timeOfDay} {name} !{' '}
      </h1>
      <Header />
      <MainContent />
      <Footer />
      <Contactcard contact={{name="Bobas", phone="8765" ,email="agsda@hnjnf.lt"}} />
      <Contactcard contact={{name="Bobas", phone="8765", email="agsda@hnjnf.lt"}} />
      <Contactcard contact={{name="Bobas" ,phone="8765", email="agsda@hnjnf.lt"}} />
    <Joke
    question="???" answer="ats" />
    </div>
  );
}
export default MyInfo;
