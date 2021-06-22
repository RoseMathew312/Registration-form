import React from "react";

import Buttonstyle from "./Buttonstyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAppleAlt } from "@fortawesome/free-solid-svg-icons/faAppleAlt";
import { faEye } from "@fortawesome/free-solid-svg-icons/faEye";
function App() {
  return (
    <div>
      <Buttonstyle primary>Primary Button</Buttonstyle>
      <Buttonstyle outline color="blue">
        Outline Button
      </Buttonstyle>
      <Buttonstyle pill color="red">
        Pill Button
      </Buttonstyle>
      <Buttonstyle square color="black">
        Square Button
      </Buttonstyle>
      <Buttonstyle disabled>Disabled Button</Buttonstyle>
      <Buttonstyle>
        <FontAwesomeIcon icon={faAppleAlt} />
        Buttonstyle
      </Buttonstyle>
      <Buttonstyle pill>
        <FontAwesomeIcon icon={faEye} />
        Buttonstyle
      </Buttonstyle>
    </div>
  );
}

export default App;
