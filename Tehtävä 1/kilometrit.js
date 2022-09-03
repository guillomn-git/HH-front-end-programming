laskeKorvaus = (ajettuMatka, kilometriKorvaus) => {
    return (ajettuMatka * kilometriKorvaus).toFixed(2);
}

let ajettuMatka = 1555;
const kilometriKorvaus = 0.46;
let korvaus = laskeKorvaus(ajettuMatka, kilometriKorvaus);

console.log("Korvaus on " + korvaus + ", kun matka on " + ajettuMatka + " euroa");