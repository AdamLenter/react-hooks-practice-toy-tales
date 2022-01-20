import React, { useState }  from "react";

function ToyForm( {addNewToy} ) {
  const [toyName, setToyName] = useState(""); 
  const [toyImageURL, setToyImageURL] = useState("");

  function handleToyName(event) {
    setToyName(event.target.value);
  }

  function handleToyImageURL(event) {
    setToyImageURL(event.target.value);
  }

  function processNewToy(event) {
      event.preventDefault();
      const newToy = {
        name: toyName,
        image: toyImageURL, 
        likes: 0
      }
      
      addNewToy(newToy);

      setToyName("");
      setToyImageURL("");
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={processNewToy}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value={toyName}
          onChange={handleToyName}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={toyImageURL}
          onChange={handleToyImageURL}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
