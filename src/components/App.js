import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([]);
  const [toysLoaded, setToysLoaded] = useState(false);

  useEffect(()=> {
    fetch("http://localhost:3001/toys")
      .then((r)=>r.json())
      .then((toyList) => setToys(toyList))
      .then(()=>setToysLoaded(true))   
      }, [])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function addNewToy(newToy) {
    fetch("http://localhost:3001/toys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
        },
      body: JSON.stringify(newToy)
      })
    const newToyList = [...toys, newToy];
    setToys(newToyList);
  }

  function deleteToy(toyID) {
    fetch(`http://localhost:3001/toys/${toyID}`, {
      method: "DELETE"
    })

    const newToyList = toys.filter((toy)=>toy.id !== toyID);
    setToys(newToyList);
  }

  function updateLikes(toyId, numberOfLikes) {
    let newToy;

    const newToyList = toys.map((toy) => {
      if(toy.id === toyId) {
        newToy = toy;
        newToy.likes = numberOfLikes + 1;
        return newToy;
      }
      else {
        return toy;
      }
    })

    fetch(`http://localhost:3001/toys/${toyId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
        },
      body: JSON.stringify(newToy)
      })
    setToys(newToyList);
  }
  
  return (
    <>
      <Header />
      {showForm ? <ToyForm addNewToy = {addNewToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys = {toys} toysLoaded = {toysLoaded} deleteToy = {deleteToy} updateLikes = {updateLikes} />
    </>
  );
}

export default App;
