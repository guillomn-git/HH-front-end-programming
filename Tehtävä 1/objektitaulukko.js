const matkat = [
    {id: 1, otsikko: 'Lomalla',
    paiva: '26.5.2022',
    paikka: 'Lohja',
    saa: 'Aurinkoista, 10',
    kuvaus: 'Lomalla Lohjalla',
    },
    { id:2, otsikko: 'Mökillä',
    paiva: '8.6.2022',
    paikka: 'Savonlinna',
    saa: 'Aurinkoinen, 22',
    kuvaus: 'Mökillä Itä-Suomessa',
    },
    { id:3, otsikko: 'Sukuloimassa',
    paiva: '20.5.2022',
    paikka: 'Vantaa',
    saa: 'Pilvinen, 9',
    kuvaus: 'Kahvihetki',
    }
    ];

    const listaus = matkat.map(matka => {
        return (
            {
                'header' : matka.otsikko,
                'description' : matka.kuvaus
            }
        )
    });

console.log(listaus);