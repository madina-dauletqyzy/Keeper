import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";
export default function App() {
  return (
    <div>
  <Header />
  {notes.map(props=>(
    <Note 
      title = {props.title}
      content = {props.content}
    />
  ))}
 
  <Footer />
  </div>);
}
