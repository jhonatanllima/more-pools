import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Main from "./pages/Main";
import Catalog from "./pages/Catalog";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Main} />
      <Route path="/catalog" component={Catalog} />
    </BrowserRouter>
  );
};

export default Routes;
