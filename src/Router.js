import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Nav from './components/Nav/Header';

const Router = () => {
  return(
    <BrowserRouter>
      <Nav />
    </BrowserRouter>
  );
};

export default Router;