// b) Tee nuolinotaatiofunktio, jolla voidaan laskea nettopalkka. Funktioille menee
// parametrina bruttopalkka, veroprosentti, työttömyysvakuutusmaksu (oletusarvona
// 1.50 %) ja työeläkevakuutusmaksu (oletusarvona 6.75%).

// Nuolifunktio joka ottaa parametriksi bruttopalkan, veroprosentin, 
//työttömyysvakuutusmaksu, ja työeläkevakuutusmaksu (viimeisillä kahdella parametrilla on oletusarvot
//ja niitä ei ole pakko laittaa parametreihin funktiota kutsuessa) ja laskee netto palkan niistä.
const laskeNettoPalkka = (bruttoPalkka, veroProsentti, tyottomyysVakuutusMaksu=0.015, tyoElakeVakuutusMaksu=0.0675) => {
    return bruttoPalkka-((bruttoPalkka*veroProsentti)+(bruttoPalkka*tyottomyysVakuutusMaksu)+(bruttoPalkka*tyoElakeVakuutusMaksu))
}

// Asetetaan arvot muuttujiin
let bruttoPalkka = 3000;
let bruttoPalkka2 = 4000;
let veroProsentti = 0.2;
let veroProsentti2 = 0.275;

// Kutsuu nettopalkan laskentafunktion muuttujiin asetetuilla arvoilla
let nettoPalkka = laskeNettoPalkka(bruttoPalkka, veroProsentti);
let nettoPalkka2 = laskeNettoPalkka(bruttoPalkka2, veroProsentti2);

// Tulostaa tulokset ja tekstin konsoliin
console.log("Nettopalkka on " + nettoPalkka + " kun palkka on " + bruttoPalkka + " ja veroprosentti " + (veroProsentti*100) + " %");
console.log("Nettopalkka on " + nettoPalkka2 + " kun palkka on " + bruttoPalkka2 + " ja veroprosentti " + (veroProsentti2*100).toFixed(1) + " %");