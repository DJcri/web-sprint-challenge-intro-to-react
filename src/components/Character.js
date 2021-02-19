// Write your Character component here
import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Character = (props) => {
  //deconstruct props and define needed variables
  const { data, getPlanet } = props;
  const [planet, setPlanet] = useState(null);

  //get planet on mount
  useEffect(() => {
    getPlanet(data.homeworld, setPlanet);
  }, [data, getPlanet]);

  //if planet is still being fetched display loading
  if (!planet) {
    return <CharacterCard>Loading</CharacterCard>;
  }

  //else attach data to card and return it
  return (
    <CharacterCard>
      <h2>{data.name}</h2>
      <div className="info-container">
        <Info className="gender">{`Gender: ${data.gender}`}</Info>
        <Info className="height">{`Height: ${data.height}cm`}</Info>
        <Info className="mass">{`Mass: ${data.mass}`}</Info>
        <Info className="skin-color">{`Skin Color: ${data.skin_color}`}</Info>
        <Info className="hair-color">{`Hair Color: ${data.hair_color}`}</Info>
        <Info className="eye-color">{`Eye Color: ${data.eye_color}`}</Info>
        <Info className="birthyear">{`Birth Year: ${data.birth_year}`}</Info>
        <Info className="homeworld">{`Home World: ${planet}`}</Info>
      </div>
    </CharacterCard>
  );
};

//export the component
export default Character;

//component styling
const CharacterCard = styled.div`
  margin: 30px 10px;
  padding: 10px;
  width: 200px;
  height: 280px;
  background: white;
  box-sizing: border-box;
`;

const Info = styled.p`
  margin: 0;
  text-transform: capitalize;
`;
