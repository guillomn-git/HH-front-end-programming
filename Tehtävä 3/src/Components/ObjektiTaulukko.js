import ListaaTaulukko from "./ListaaTaulukko";

// Lähettää objektin propsina ListaaTaulukko komponenttiin
function ObjektiTaulukko() {
    return(
        <ListaaTaulukko taulukko={taulukko}/>
    );

}

// Itse objektitaulukko
const taulukko = [
    {
    nimi: "Virtanen Matti",
    alkupaiva: "2021-06-01",
    loppupaiva: "2021-06-30",
    },
    {
    nimi: "Laaksonen Lisaa",
    alkupaiva: "2021-06-26",
    loppupaiva: "2021-07-27",
    },
    {
    nimi: "Korhonen Maija",
    alkupaiva: "2021-08-03",
    loppupaiva: "2021-08-30",
    },
   ];

export default ObjektiTaulukko;