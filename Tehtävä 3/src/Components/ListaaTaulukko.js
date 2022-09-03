// Listaa propsista saanneesta objekti taulukosta kaikki tiedot selaimeen
// käyttäen map functiota.
function ListaaTaulukko(props){
    return (
        <div>
            { props.taulukko.map( taulukko => {
                return (
                    // Objektitaulukossa ei ollut id arvoja, joten käytetään
                    // nimeä avaimena. Toinen tapa olisi luoda oma numero
                    // for loopilla jokaiselle avaimelle.
                    <p key={ taulukko.nimi}>
                    Nimi: { taulukko.nimi}<br/>
                    Alkupaiva: { taulukko.alkupaiva}<br/>
                    Loppupaiva: { taulukko.loppupaiva}<br/>
                    <br/>
                    </p>);
                })
            }
        </div>);
}

export default ListaaTaulukko;