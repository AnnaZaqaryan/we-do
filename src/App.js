import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Ardibuk from './components/Ardibuk';
import ArdibukAdvantages from './components/ArdibukAdvantages';
import ProductsServices from './components/ProductsServices';
import Ardipen from './components/Ardipen';

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Ardibuk/>
      <ArdibukAdvantages/>
      <ProductsServices/>
      <Ardipen/>
    </div>
  );
}

export default App;
