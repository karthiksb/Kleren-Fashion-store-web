import React, { useEffect } from "react";
import "./header.css";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { Link, useHistory } from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "./firebase";

import { useState } from "react";

export default function Header(props) {
  var history = useHistory();

  const [isLoggedin, setIsLoggedin] = useState();
  const [displayname, setdisplayname] = useState();

  function handleSearch() {
    history.push("/search");
  }

  const auth = getAuth();

  useEffect(() => {
    try {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const uid = user.uid;
          setIsLoggedin(user);
          get();
        } else {
          console.log("log out");
        }
      });
    } catch (e) {}
  }, [isLoggedin]);

  async function get() {
    var ref = doc(db, "user", isLoggedin.uid);
    const docnap = await getDoc(ref);

    var sref = doc(ref, "cart", "product");
    const nap = await getDoc(sref);

    setdisplayname(docnap.data().name);
  }

  function signout() {
    signOut(auth)
      .then(() => {
        history.push("/");
        setIsLoggedin(null);
      })
      .catch((error) => {
        // An error happened.
      });
  }

  return (
    <div className="header">
      <div className="left">
        <h1>Kleren</h1>
      </div>

      <div className="center">
        <div className="search">
          <input
            type="text"
            className="searchquery"
            onChange={(e) => props.query(e.target.value)}
          />
        </div>
        <button onClick={handleSearch}>search</button>
      </div>

      <div className="right">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            {" "}
            <Link to="/shop">Shop</Link>
          </li>
          <li>{isLoggedin && <p>{displayname}</p>}</li>

          {isLoggedin && <button onClick={signout}>sign out</button>}

          <li>
            <ShoppingBagOutlinedIcon onClick={() => props.hello(true)} />
          </li>
        </ul>
      </div>
    </div>
  );
}
