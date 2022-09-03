// Tämä komponentti pitää sisällä ajopaivakirja objektin, 
//tekija muuttujan, jonka tiedot lähetetään propsina Ajopaivakirja
// komponenttiin. Se myös kutsuu ajopaivakirja komponentin, joka 
//lopulta näyttää sivulla tekstin ja muuttujan/objektin tiedot.

import Ajopaivakirja from './Ajopaivakirja'

// Lähettään ajopaivakirja objektin ja tekija muuttujan tiedot
// propsina ajopaivakirja komponenttiin.
function AjopaivakirjaLista(){
    return (
            <Ajopaivakirja ajopaivakirja = {ajopaivakirja} 
            Ajopaivakirja tekija={tekija}/>
    );
}

// Tekijä muuttuja
const tekija = "Guillaume Chaumont";

// Ajopäiväkirja objekti, joka sisältää itsessään alku, ja loppu objektit.
const ajopaivakirja = {
    rekisterinro: "XYZ-123",
    laatija: "Risto Reipas",
    alku: {
     lukema: "32500",
     lahtoaika: "13:30",
     paiva: "2020-01-27",
     paikka: "Ratapihantie 13, Helsinki",
    },
    loppu: {
     lukema: "32510",
     loppuaika: "13:50",
     paiva: "2020-06-27",
     paikka: "Hietakummuntie 1, Helsinki",
    }
     }

export default AjopaivakirjaLista;