// Tämä on komponentti, joka näyttää sivulla tekijän nimen, 
// auton rekisterinumeron, laskee alkumittarilukeman ja 
// loppumittarilukeman erotuksesta matkan, sekä lopulta
// näyttää koodin tekijän nimen.

// Tämä funktio ottaa vastaan ajopaivakirja objektin, ja tekijä muuttujan
function Ajopaivakirja (props){

    // Tällä funktiolla lasketaan ajetun matkan. Tiedot lähetetään 
    // parametreina funktioon ajopaivakirja objektin .alku ja .loppu objekteista
    // ja funktio palauttaa näiden erotuksen
    const laskeMatka = (alkuLukema, loppuLukema) =>{
        return loppuLukema - alkuLukema;
    }

    // Tässä palautetaan HTML koodi, näytettävät tiedot saadaan
    // AjopaivakirjaLista komponentista propsien kautta
    return (
        <div>
            <p>
            Nimi: {props.ajopaivakirja.laatija}<br/>
            Rekisterinro: {props.ajopaivakirja.rekisterinro}<br/>
            Matka: { laskeMatka(props.ajopaivakirja.alku.lukema, 
                    props.ajopaivakirja.loppu.lukema)} kilometriä <br/><br/>
            Tekijä: {props.tekija}

            </p>
        </div>
    );
}

export default Ajopaivakirja;