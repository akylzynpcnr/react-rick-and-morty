import React, { useState, useEffect } from "react";
import { CONSTANTS } from "../constants";
import Card from "../components/Card";

const Home = props => {
  const [template, setTemplate] = useState();
  const characterList = [];

  const createTemplate = characters => {
    return characters.map((character, index) => {
      return (
        <div className="col-12 col-md-6 mt-4" key={index}>
          <Card
            id={character.id}
            name={character.name}
            image={character.image}
            status={character.status}
            human={character.human}
            location={character.location.name}
            species={character.species}
          />
        </div>
      );
    });
  };

  const getCharacters = () => {
    fetch(`${CONSTANTS.ENDPOINT}/character`)
      .then(response => response.json())
      .then(data => {
        setTemplate(createTemplate(data.results));
      });
  };

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <div className="container">
      <div className="row">{template}</div>
    </div>
  );
};

export default Home;
