var lomamerkinnat = [
    {
     nimi: "Virtanen Matti",
     alkupaiva: "2022-06-01",
     loppupaiva: "2022-06-30",
    },
    {
     nimi: "Laaksonen Lisa",
     alkupaiva: "2022-07-01",
     loppupaiva: "2022-07-31",
    },
    {
     nimi: "Niemi Juha",
     alkupaiva: "2022-06-01",
     loppupaiva: "2022-06-14",
    },
    {
     nimi: "Lehtonen Erkki",
     alkupaiva: "2022-08-01",
     loppupaiva: "2022-08-31",
    } ];

const loma = lomamerkinnat.map(lomamerkinta => {
     return (
        {
            'loma' : lomamerkinta.nimi + " loma alkaa " + lomamerkinta.alkupaiva + " ja päättyy " + lomamerkinta.loppupaiva
        })});

console.log(loma);