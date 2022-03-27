import React from "react";
import { motion } from "framer-motion";
import "./modal.css";

import { useState, useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useHistory } from "react-router-dom";

//firebase imports
import fire from "../firebase";
import { db } from "../firebase";

import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import { collection, addDoc, doc, setDoc } from "firebase/firestore";

export default function Modal({ closemodal }) {
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signup, setSignup] = useState(false);
  const [signuptitle, setSignuptitle] = useState(false);
  const [uid, setuid] = useState();
  let history = useHistory();

  function setupSignup() {
    setSignup(true);
    setSignuptitle(true);
  }

  const auth = getAuth();

  async function submitHandle() {
    if (signup === false) {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;

          closemodal(false);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);
        });
    } else if (signup === true) {
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          setDoc(doc(db, "user", userCredential.user.uid), {
            email: email,
            name: name,
          });

          closemodal(false);

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);
          // ..
        });
    }
  }

  return (
    <div className="modal">
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{
          type: "spring",
          stiffness: 800,
          ease: "easeOut",
          duration: 0.4,
        }}
        exit={{ opacity: 0.2 }}
        className="register"
      >
        {signup ? (
          <div className="modalc">
            <div className="close">
              <CloseIcon
                className="closeicon"
                onClick={() => closemodal(false)}
              />
            </div>

            <div className="modaltitle">
              <h1>Sign up</h1>
            </div>

            <div className="inputs inp">
              <input
                type="email"
                className="email"
                placeholder="Enter Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="inputs">
              <input
                type="password"
                className="password"
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="inputs">
              <input
                type="text"
                className="name"
                placeholder="Enter your name"
                onChange={(e) => setname(e.target.value)}
              />
            </div>

            <button className="signinbtn" onClick={submitHandle}>
              sign up
            </button>

            <div className="signdiv">
              <p>
                Not having an account?
                <span className="signup-span" onClick={() => setSignup(false)}>
                  sign up
                </span>
              </p>
            </div>
          </div>
        ) : (
          <div className="modalc">
            <div className="close">
              <CloseIcon
                className="closeicon"
                onClick={() => closemodal(false)}
              />
            </div>

            <div className="modaltitle">
              <h1>Sign in</h1>
            </div>

            <div className="inputs inp">
              <input
                type="email"
                className="email"
                placeholder="Enter password"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="inputs">
              <input
                type="password"
                className="password"
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button className="signinbtn" onClick={submitHandle}>
              sign in
            </button>

            <div className="signdiv">
              <p>
                Not having an account?
                <span className="signup-span" onClick={() => setupSignup()}>
                  sign up
                </span>
              </p>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
