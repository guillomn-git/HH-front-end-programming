import React, {useState} from 'react';

function OpiskelijaLomake(){
    // Tilamuuttujat
    const [henkilo, setValues] = useState({
        nimi:'',
        paiva:'',
        arvosana:''
    });
    let [virheTeksti, setVirheTeksti] = useState('');

    // Mahdollistaa kirjottamisen kenttiin
    const muuta = (e) => {
        setValues({
                ...henkilo,
                [e.target.name]: e.target.value
            });
    };

    // Kun lomakkeen "lisää" painiketta painetaa, tiedot tallenetaan tilamuuttujaan
    // if lauseella tarkistetaan, että kaikissa kentissä on jotain stringiä,
    // jos kaikissa kentissä on tekstiä, lisätään arvot objektiin, ja pyyhitään
    // virhe teksti tyhjäksi. Jos kaikkia kenttiä ei ole täytetty, tulee virheteksi
    // näkyviin kunnes kaikki kentät on täytetty.
    const lisaaHenkilo = (e) => {
        e.preventDefault(); // estää sen, että sivu uudelleenkäynnistyy
        
        // Tarkistaa onko 
        if (henkilo.nimi === '' || henkilo.paiva === '' || henkilo.arvosana === '') {
            setVirheTeksti('Kaikissa kentissä pitää olla arvot');
        } else {
            setValues({nimi: '', paiva: '', arvosana: ''});
            setVirheTeksti('');
        }
    }

    return( 
        <div>

            <form>
                <label htmlFor='nimi'>Nimi </label>
                <input type='text' name='nimi' value={ henkilo.nimi}
                onChange={ (e) => muuta(e)}/><br/>
                
                <label htmlFor='paiva'>Päivä </label>
                <input type='text' name='paiva' value={ henkilo.paiva}
                onChange={ (e) => muuta(e)}/><br/>
                
                <label htmlFor='arvosana'>Arvosana </label>
                <input type='text' name='arvosana' value={ henkilo.arvosana}
                onChange={ (e) => muuta(e)}/><br/>

                <button onClick={ (e) => lisaaHenkilo(e)}>Lisää</button>
            </form>
            
            <div>
                {/* Virhetekstin paikka */}
                <p> {virheTeksti} </p>

            </div>

        </div>
    );
}

export default OpiskelijaLomake;