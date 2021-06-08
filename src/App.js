import React from 'react';
import './App.css';
import Button from './Components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAppleAlt } from '@fortawesome/free-solid-svg-icons/faAppleAlt'
import { faEye} from '@fortawesome/free-solid-svg-icons/faEye'
function App() {
  return (
<div>
<Button primary>Primary Button</Button>
			<Button outline color="blue">
				Outline Button
			</Button>
			<Button pill color="red">
				Pill Button
			</Button>
			<Button square color="black">
				Square Button
			</Button>
			<Button disabled>Disabled Button</Button>
      <Button>
				<FontAwesomeIcon icon={faAppleAlt} />Button
			</Button>
      <Button pill>
				<FontAwesomeIcon icon={faEye} />Button
			</Button>
</div>




  );





}

export default App;

