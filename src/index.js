import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from "./components/Nav/Header";
import Visual from "./components/Visual/Visual";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Header />
    <Visual />
  </div>
);
