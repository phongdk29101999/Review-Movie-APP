import React from 'react';
import '../../app.css';
import Cards from './cards/Cards';
import Welcome from './welcome/Welcome';
import Footer from './footer/Footer';

function Home() {
  return (
    <>
      <Welcome />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;