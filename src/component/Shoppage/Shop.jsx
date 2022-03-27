import React from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function Shop() {
  return (
    <div>
      <h1>Shop</h1>

      {getAuth().currentUser && <h2>{getAuth().currentUser.email}</h2>}
    </div>
  );
}

export default Shop;
