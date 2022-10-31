import React from 'react';
// import Header from '../../shared/header';
import UncontrolledExample from '../../shared/carrossel';
import Article from '../../shared/article';
import NavbarDarkExample from '../../shared/dropdowns';

function Main() {
  return (
    <div>
      <NavbarDarkExample />
      {/* <Header /> */}
      <UncontrolledExample />
      <Article />
    </div>
  );
}

export default Main;