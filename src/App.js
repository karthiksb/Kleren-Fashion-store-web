import "./App.css";
import { useState } from "react";
import Home from "./component/Homepage/Home";
import Shop from "./component/Shoppage/Shop";
import Header from "./component/Header";
import Modal from "./component/modal/Modal";
import Search from "./component/Searchview/Search";

import { Switch, Route } from "react-router-dom";

function App() {
  const [isModalopen, setIsModalopen] = useState(false);
  const [term, setTerm] = useState("");

  return (
    <div className="App">
      {isModalopen && <Modal closemodal={setIsModalopen} />}
      <Header hello={setIsModalopen} query={setTerm} />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/shop" component={Shop} />

        <Route path="/search">
          <Search q={term} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
