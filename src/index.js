import React, { createElement } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Books } from "./Books";
import { Book } from "./Book";




function BookList() {

  // func presently not in use
  
  const Dhundho = (id) => {
    const p = Books.find((p) => p.id === id)
    console.log(p)
  }

  return (
    <div>
    <h1> {"Today's Bestsellers"}</h1>
    <section className='booklist'>
      {/* <Myfnc /> */}
      {Books.map((b, index) => {
        console.log(b);
        return (<Book {...b} findfunc={Dhundho} key={b.id} number={index}/>);
      })}
    </section>
    </div>
  );
}


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />); //allways close it
