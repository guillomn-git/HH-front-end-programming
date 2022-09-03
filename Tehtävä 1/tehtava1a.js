// Kortti objekti sisältää kortin nimen ja sen piste arvon
const kortti = [
    {
        nimi: "kirous",
        pisteArvo: -1,
    },
    {   
        nimi: "tila",
        pisteArvo: 2,
    },
    {
        nimi: "pitäjä",
        pisteArvo: 3,
    },
    {
        nimi: "lääni",
        pisteArvo: 6,
    },
];

// Nuolifunktio joka laskee kaikki annetut kortit yhteen. Jos kaikkia kortteja ei ole, 
//korttiparametrin oletusarvo on 0. Näin voidaan laskea vähemmän kuin 4 korttia yhteen.
const laskeKorttienPisteet = (kortti1=0, kortti2=0, kortti3=0, kortti4=0) =>{
    return kortti1 + kortti2 + kortti3 + kortti4;
};

// Asettaa muuttujan jokaiselle kortille objektitaulukoiden indekseistä helppolukuisuutta varten
let kirous = kortti[0];
let tila = kortti[1];
let pitaja = kortti[2];
let laani = kortti[3];

// Hakee kortti objektitaulukosta pistearvon ja tallentaa pisteet yhteen muuttujaan laskeKorttienPisteet nuolifunktion avulla.
let pisteet1 = laskeKorttienPisteet(kirous.pisteArvo, tila.pisteArvo, pitaja.pisteArvo, laani.pisteArvo);
let pisteet2 = laskeKorttienPisteet(laani.pisteArvo, laani.pisteArvo);

// Tulostaa yhteispisteet
console.log("Yhteispisteet ovat " + pisteet1);
console.log("Yhteispisteet ovat " + pisteet2);