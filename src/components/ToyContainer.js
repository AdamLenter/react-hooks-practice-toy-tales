import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer( { toys, toysLoaded, deleteToy, updateLikes } ) {
  return (
    <div id="toy-collection">
      {toysLoaded ? toys.map((toy) => <ToyCard key = {toy.id} toy = {toy} deleteToy = {deleteToy} updateLikes = {updateLikes} />) : <p>Loading...</p>}
    </div>
  );
}

export default ToyContainer;
