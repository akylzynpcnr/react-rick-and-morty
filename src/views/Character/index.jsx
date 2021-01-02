import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CONSTANTS } from "../../constants";
import CharacterDetail from "../../components/CharacterDetail";

const Character = props => {
  const [template, setTemplate] = useState();
  let { id } = useParams();

  const getDetail = () => {
    fetch(`${CONSTANTS.ENDPOINT}/character/${id}`)
      .then(response => response.json())
      .then(data => {
        setTemplate(createTemplate(data));
      });
  };

  const createTemplate = detail => {
    return (
      <div className="col-md-6 offset-md-3">
        <CharacterDetail detail={detail} />
      </div>
    );
  };

  useEffect(getDetail, []);

  return (
    <div className="container mt-5 mb-5">
      <div className="row">{template}</div>
    </div>
  );
};

export default Character;
