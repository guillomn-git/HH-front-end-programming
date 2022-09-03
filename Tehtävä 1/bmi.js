const laskePainoIndeksi = (paino, pituus) => {
    return (paino/(pituus*pituus)).toFixed(1);
} 

const indeksinMerkitys = (painoIndeksi) => {
    let merkitys = "";

    if (painoIndeksi <= 18.5){
        merkitys = "Alipaino";
    } else if (painoIndeksi > 18.5 && painoIndeksi < 25.0) {
        merkitys = "Normaali paino";
    } else {
        merkitys = "Ylipaino";
    }
    return merkitys;
}

let paino = 70, pituus = 1.79;
let painoIndeksi = laskePainoIndeksi(paino, pituus);

console.log("Painoindeksi on " + painoIndeksi + ", kun paino on " + paino + " ja pituus on " + pituus);
console.log(indeksinMerkitys(painoIndeksi));