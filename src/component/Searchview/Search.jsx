import React from "react";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { useEffect } from "react";
import { db } from "../firebase";

export default function Search({ q }) {
  async function getsearchData() {
    let post = [];
    const querySnapshot = await getDocs(collection(db, "item"));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      if (doc.data().name === q) {
        post.push(doc.data());
      }
      post.forEach((post) => {
        console.log(post.info);
      });
      //console.log(doc.id, " => ", doc.data().info);
    });
  }

  useEffect(() => {
    getsearchData();
  }, []);
  return (
    <div>
      <h1>{q}</h1>
    </div>
  );
}
