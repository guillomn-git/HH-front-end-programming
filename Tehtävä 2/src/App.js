// Tästä tiedostosta ajetaan tarvittavat komponentit

import React from 'react';
import AjopaivakirjaLista from './Components/AjopaivakirjaLista';

// Ajetaan AjopaivakirjaLista komponentin, joka ajaa Ajopaivakirja, joka
// näyttää tehtävän tekstin selaimessa.
function App() {
  return (
      <AjopaivakirjaLista />
  );
}

export default App;