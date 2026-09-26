/**
 * Base de Datos Histórica y Oficial del Club Atlético Huracán
 * Museo Quemero - Archivo y Patrimonio Histórico
 */

const HURACAN_DB = {
  "info": {
    "nombre": "Club Atlético Huracán",
    "apodo": "El Globo, El Quemero",
    "fundacion": "1 de noviembre de 1908",
    "fundadores": "Ernesto Dell'Isola, Américo Stefanini, Hilario Germán Bianchi, entre otros",
    "inspiracion": "Ingeniero Jorge Newbery y su globo aerostático 'El Huracán'",
    "estadio": "Estadio Tomás Adolfo Ducó ('El Palacio')",
    "capacidad": 48314,
    "direccionSede": "Av. Caseros 3159, Parque Patricios, CABA",
    "direccionEstadio": "Av. Amancio Alcorta 2570, Parque Patricios, CABA",
    "colores": [
      "#E01E2B",
      "#FFFFFF"
    ],
    "titulosOficialesTotal": 13,
    "campeonatosPrimera": 5,
    "copasNacionales": 8,
    "sociosHistoricos": "Más de 40.000 socios activos",
    "campanaMuseo": {
      "titulo": "Hacia el Museo Oficial del Club Atlético Huracán",
      "subtitulo": "Un anhelo de Parque Patricios que comienza a gestarse en el Palacio Ducó",
      "imagen": "assets/imagen_museo_huracan.jpg",
      "comunicado": "El Club Atlético Huracán avanza en los estudios preparatorios y la planificación del anteproyecto para que la comunidad quemera cuente con su ansiado Museo Oficial en las instalaciones del Estadio Tomás Adolfo Ducó. Se trata de un espacio soñado que buscará reunir, resguardar y poner en valor más de 115 años de gloria deportiva, hazañas memorables y la memoria colectiva de nuestra institución.",
      "llamado": "En esta etapa preliminar de diagnóstico y relevamiento, convocamos a socios, socias, hinchas y familias quemeras a sumarse a un censo histórico de objetos y recuerdos. Aclaración fundamental: todavía NO estamos recibiendo donaciones físicas ni comodatos en las sedes del club mientras se adecúan las instalaciones. Por el momento, la convocatoria es exclusivamente para que nos envíes FOTOS o VIDEOS de los objetos que atesoras (carnets antiguos, entradas de época, camisetas históricas, banderines, medallas o fotos inéditas), para poder dimensionar y catalogar el acervo patrimonial del pueblo huracanense.",
      "formUrl": "https://docs.google.com/forms/d/e/1FAIpQLSfMTCY_pqfB95vMi0paOPXJwTKal1UaupDhlnA8QHoE6_3p3g/viewform?embedded=true",
      "formUrlDirecta": "https://forms.gle/V11JVbZKBbENxixZ7",
      "botonTexto": "Completar Formulario de Relevamiento",
      "botonSubtexto": "Cargar fotos, videos o detalles de tus recuerdos"
    },
    "ultimoResultado": {
      "rival": "River Plate",
      "rivalCorto": "River",
      "rivalEscudo": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Club_Atl%C3%A9tico_River_Plate_crest.svg/100px-Club_Atl%C3%A9tico_River_Plate_crest.svg.png",
      "local": "River Plate",
      "visitante": "Club Atlético Huracán",
      "esHuracanLocal": false,
      "marcadorLocal": 1,
      "marcadorVisitante": 2,
      "huracanGoles": 2,
      "rivalGoles": 1,
      "resultado": "River Plate 1 - Huracán 2",
      "torneo": "Torneo Clausura / Liga Profesional de Fútbol",
      "fecha": "19 de Septiembre de 2026",
      "estadio": "Estadio Mâs Monumental (Núñez, CABA)",
      "detalle": "Histórica y resonante victoria del Globo como visitante en el Estadio Mâs Monumental. Con un planteo táctico inteligente y máxima eficacia en los momentos decisivos, Huracán venció 2-1 a River Plate con tantos de Walter Mazzantti y Ramón 'Wanchope' Ábila para desatar el delirio en Parque Patricios.",
      "goles": [
        {
          "minuto": "38'",
          "autor": "Walter Mazzantti",
          "equipo": "cah"
        },
        {
          "minuto": "64'",
          "autor": "Miguel Borja",
          "equipo": "rival"
        },
        {
          "minuto": "81'",
          "autor": "Ramón 'Wanchope' Ábila",
          "equipo": "cah"
        }
      ],
      "figura": "Walter Mazzantti (CAH)"
    }
  },
  "topGoleadores": [
    {
      "nombre": "Herminio Masantonio",
      "goles": 254,
      "partidos": 349,
      "promedio": "0.73",
      "periodo": "1931-1943 / 1945",
      "id": "masantonio"
    },
    {
      "nombre": "Miguel Ángel Brindisi",
      "goles": 171,
      "partidos": 349,
      "promedio": "0.49",
      "periodo": "1967-1976 / 1979-1980",
      "id": "brindisi"
    },
    {
      "nombre": "Emilio Baldonedo",
      "goles": 165,
      "partidos": 257,
      "promedio": "0.64",
      "periodo": "1935-1944",
      "id": "baldonedo"
    },
    {
      "nombre": "Carlos Alberto Babington",
      "goles": 130,
      "partidos": 305,
      "promedio": "0.43",
      "periodo": "1969-1974 / 1979-1982",
      "id": "babington"
    },
    {
      "nombre": "Ángel Chiesa",
      "goles": 110,
      "partidos": 188,
      "promedio": "0.58",
      "periodo": "1919-1930",
      "id": "chiesa"
    },
    {
      "nombre": "René Orlando Houseman",
      "goles": 109,
      "partidos": 277,
      "promedio": "0.39",
      "periodo": "1973-1980",
      "id": "houseman"
    },
    {
      "nombre": "Guillermo Stábile",
      "goles": 104,
      "partidos": 119,
      "promedio": "0.87",
      "periodo": "1920-1930",
      "id": "stabile"
    },
    {
      "nombre": "Roque Avallay",
      "goles": 72,
      "partidos": 198,
      "promedio": "0.36",
      "periodo": "1972-1976 / 1980",
      "id": "avallay"
    },
    {
      "nombre": "Norberto Méndez",
      "goles": 68,
      "partidos": 176,
      "promedio": "0.39",
      "periodo": "1940-1947 / 1956-1958",
      "id": "mendez"
    },
    {
      "nombre": "Ramón 'Wanchope' Ábila",
      "goles": 58,
      "partidos": 119,
      "promedio": "0.49",
      "periodo": "2014-2017 / 2024-Act.",
      "id": "abila"
    }
  ],
  "topPresencias": [
    {
      "nombre": "Jorge Hugo Alberti",
      "partidos": 393,
      "goles": 19,
      "periodo": "1930-1947",
      "puesto": "Defensor Central",
      "id": "alberti"
    },
    {
      "nombre": "Herminio Masantonio",
      "partidos": 349,
      "goles": 254,
      "periodo": "1931-1945",
      "puesto": "Centrodelantero",
      "id": "masantonio"
    },
    {
      "nombre": "Miguel Ángel Brindisi",
      "partidos": 349,
      "goles": 171,
      "periodo": "1967-1980",
      "puesto": "Volante / Delantero",
      "id": "brindisi"
    },
    {
      "nombre": "Carlos Alberto Babington",
      "partidos": 305,
      "goles": 130,
      "periodo": "1969-1982",
      "puesto": "Volante Ofensivo (10)",
      "id": "babington"
    },
    {
      "nombre": "Jorge Carrascosa",
      "partidos": 287,
      "goles": 0,
      "periodo": "1973-1979",
      "puesto": "Lateral Izquierdo",
      "id": "carrascosa"
    },
    {
      "nombre": "René Orlando Houseman",
      "partidos": 277,
      "goles": 109,
      "periodo": "1973-1980",
      "puesto": "Puntero Derecho",
      "id": "houseman"
    },
    {
      "nombre": "Emilio Baldonedo",
      "partidos": 257,
      "goles": 165,
      "periodo": "1935-1944",
      "puesto": "Delantero",
      "id": "baldonedo"
    },
    {
      "nombre": "Alberto Rendo",
      "partidos": 245,
      "goles": 26,
      "periodo": "1959-1971",
      "puesto": "Volante Central",
      "id": "rendo"
    },
    {
      "nombre": "Daniel 'Rolfi' Montenegro",
      "partidos": 236,
      "goles": 44,
      "periodo": "1997-2018 (4 etapas)",
      "puesto": "Enganche / Mediapunta",
      "id": "montenegro"
    },
    {
      "nombre": "Alfio 'Coco' Basile",
      "partidos": 212,
      "goles": 12,
      "periodo": "1971-1975",
      "puesto": "Defensor Central",
      "id": "basile"
    }
  ],
  "jugadores": [
    {
      "id": "masantonio",
      "foto": "https://upload.wikimedia.org/wikipedia/commons/1/15/Herminio_Masantonio.jpg",
      "nombre": "Herminio Masantonio",
      "apodo": "Masa / El Mortero de Parque Patricios",
      "posicion": "Centrodelantero",
      "linea": "Delantero",
      "periodo": "1931 - 1943 / 1945",
      "decada": "1930s",
      "partidos": 349,
      "goles": 254,
      "promedio": "0.73",
      "titulos": [
        "Copa Adrián Escobar 1942",
        "Copa Adrián Escobar 1943"
      ],
      "nacimiento": "5 de agosto de 1910, Ensenada",
      "fallecimiento": "11 de septiembre de 1960 (50 años)",
      "descripcion": "El máximo goleador de toda la historia de Huracán y tercer máximo artillero del fútbol argentino profesional (256 goles). Dueño de un cañón en su pierna derecha y de un coraje indomable, encarna como nadie el espíritu del barrio de Parque Patricios. Es símbolo absoluto del club y tiene su monumento en la sede social.",
      "hitos": [
        "254 goles oficiales con el Globo.",
        "Autor del gol más rápido en la historia de la Selección Argentina (a los 23 segundos vs Uruguay en 1935).",
        "Máximo goleador de la Copa América 1935 y 1942.",
        "Le marcó 19 goles a San Lorenzo en el clásico de barrio."
      ],
      "imagen": "masantonio"
    },
    {
      "id": "houseman",
      "foto": "https://upload.wikimedia.org/wikipedia/commons/d/d4/Houseman_argentina.jpg",
      "nombre": "René Orlando Houseman",
      "apodo": "El Hueso / El Loco",
      "posicion": "Puntero Derecho",
      "linea": "Delantero",
      "periodo": "1973 - 1980",
      "decada": "1970s",
      "partidos": 277,
      "goles": 109,
      "promedio": "0.39",
      "titulos": [
        "Campeonato Metropolitano 1973",
        "Copa del Mundo FIFA 1978 (Selección Argentina)"
      ],
      "nacimiento": "19 de julio de 1953, La Banda, Santiago del Estero",
      "fallecimiento": "22 de marzo de 2018 (64 años)",
      "descripcion": "Uno de los extremos más desequilibrantes, impredecibles y geniales que pisaron una cancha de fútbol en el planeta. Llegó a Huracán en 1973 desde Defensores de Belgrano de la mano de Menotti y deslumbró al mundo entero con su gambeta en una baldosa y picardía de potrero puro.",
      "hitos": [
        "Figura estelar del inolvidable Huracán Campeón 1973.",
        "Campeón del Mundo con la Selección Argentina en 1978.",
        "Anotó 4 goles en dos Copas del Mundo (1974 y 1978).",
        "Ídolo entrañable de Parque Patricios, querido por hinchas de todos los clubes."
      ],
      "imagen": "houseman"
    },
    {
      "id": "brindisi",
      "foto": "https://upload.wikimedia.org/wikipedia/commons/d/d1/Brindisi_argentina.jpg",
      "nombre": "Miguel Ángel Brindisi",
      "apodo": "Miguelito",
      "posicion": "Mediocampista / Volante Derecho",
      "linea": "Mediocampista",
      "periodo": "1967 - 1976 / 1979 - 1980",
      "decada": "1970s",
      "partidos": 349,
      "goles": 171,
      "promedio": "0.49",
      "titulos": [
        "Campeonato Metropolitano 1973"
      ],
      "nacimiento": "8 de octubre de 1950, Almagro, Buenos Aires",
      "fallecimiento": null,
      "descripcion": "El volante completo por excelencia: despliegue monumental, precisión milimétrica, panorama de juego magistral y una capacidad goleadora asombrosa para su puesto. Segundo máximo artillero histórico de la institución.",
      "hitos": [
        "Capitán y motor del equipo de 1973.",
        "Elegido segundo mejor futbolista de Sudamérica en 1973 (Balón de Plata detrás de Pelé).",
        "171 goles oficiales en el club siendo mediocampista.",
        "Mundialista con la Selección Argentina en Alemania 1974."
      ],
      "imagen": "brindisi"
    },
    {
      "id": "babington",
      "foto": "https://upload.wikimedia.org/wikipedia/commons/b/b0/Carlos_Babington.jpg",
      "nombre": "Carlos Alberto Babington",
      "apodo": "El Inglés",
      "posicion": "Enganche / Número 10",
      "linea": "Mediocampista",
      "periodo": "1969 - 1974 / 1979 - 1982",
      "decada": "1970s",
      "partidos": 305,
      "goles": 130,
      "promedio": "0.43",
      "titulos": [
        "Campeonato Metropolitano 1973"
      ],
      "nacimiento": "20 de septiembre de 1949, Parque Patricios",
      "fallecimiento": null,
      "descripcion": "Nacido a metros de la sede, Carlos Babington fue el dueño de una de las zurdas más elegantes de la historia argentina. La manija creativa del '73, con una pegada prodigiosa en tiros libres y tiros lejanos. Único hombre en la historia del club en haber sido jugador campeón, DT campeón y Presidente.",
      "hitos": [
        "Cerebro indiscutido del Huracán de Menotti 1973.",
        "130 goles marcados con la casaca del Globo.",
        "Como DT logró los ascensos de 1990 y 2000 a Primera División.",
        "Disputó la Copa del Mundo 1974 con la Selección Argentina."
      ],
      "imagen": "babington"
    },
    {
      "id": "alberti",
      "foto": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/24/Jorge_H._Alberti_%28Hurac%C3%A1n%29._-_El_Gr%C3%A1fico_1077.jpg/960px-Jorge_H._Alberti_%28Hurac%C3%A1n%29._-_El_Gr%C3%A1fico_1077.jpg",
      "nombre": "Jorge Hugo Alberti",
      "apodo": "El Récord Quemero",
      "posicion": "Defensor Central",
      "linea": "Defensor",
      "periodo": "1930 - 1947",
      "decada": "1930s",
      "partidos": 393,
      "goles": 19,
      "promedio": "0.05",
      "titulos": [
        "Copa Adrián Escobar 1942",
        "Copa Adrián Escobar 1943",
        "Copa Competencia Británica 1944"
      ],
      "nacimiento": "18 de mayo de 1912, Buenos Aires",
      "fallecimiento": "1985",
      "descripcion": "El jugador con más presencias oficiales en toda la historia de Huracán: 393 partidos vistiendo únicamente la camiseta blanca con el globo rojo durante 17 temporadas ininterrumpidas.",
      "hitos": [
        "Récord histórico absoluto de partidos en Huracán (393 PJ).",
        "Tricampeón de Copas Nacionales de AFA en los años 40.",
        "Capitán indiscutido y baluarte de la Selección Argentina (Campeón de América 1937 y 1941)."
      ],
      "imagen": "alberti"
    },
    {
      "id": "baldonedo",
      "foto": "https://upload.wikimedia.org/wikipedia/commons/8/83/Emilio_Baldonedo.png",
      "nombre": "Emilio Baldonedo",
      "apodo": "El Insaciable",
      "posicion": "Entreala Izquierdo",
      "linea": "Delantero",
      "periodo": "1935 - 1944",
      "decada": "1930s",
      "partidos": 257,
      "goles": 165,
      "promedio": "0.64",
      "titulos": [
        "Copa Adrián Escobar 1942",
        "Copa Adrián Escobar 1943",
        "Copa Competencia Británica 1944"
      ],
      "nacimiento": "23 de junio de 1916, Buenos Aires",
      "fallecimiento": "31 de mayo de 1999 (82 años)",
      "descripcion": "Tercer máximo goleador histórico de Huracán. Formó junto a Masantonio una de las duplas ofensivas más implacables y temidas del continente americano durante una década completa.",
      "hitos": [
        "165 goles oficiales en 257 encuentros.",
        "Tricampeón con el Globo en los años 40.",
        "Pesadilla histórica de San Lorenzo, marcándole 14 goles en los clásicos."
      ],
      "imagen": "baldonedo"
    },
    {
      "id": "stabile",
      "foto": "https://upload.wikimedia.org/wikipedia/commons/5/51/Guillermo_stabile_hincado.jpg",
      "nombre": "Guillermo Stábile",
      "apodo": "El Filtrador",
      "posicion": "Centrodelantero",
      "linea": "Delantero",
      "periodo": "1920 - 1930",
      "decada": "1920s",
      "partidos": 119,
      "goles": 104,
      "promedio": "0.87",
      "titulos": [
        "Campeonato de Primera División 1921",
        "Campeonato de Primera División 1922",
        "Campeonato de Primera División 1925",
        "Campeonato de Primera División 1928",
        "Copa Dr. Carlos Ibarguren 1925"
      ],
      "nacimiento": "17 de enero de 1905, Parque Patricios",
      "fallecimiento": "26 de diciembre de 1966 (61 años)",
      "descripcion": "Hijo dilecto del barrio, poseedor de una velocidad supersónica y una definición quirúrgica. Es el primer goleador en la historia de las Copas del Mundo (Uruguay 1930 con 8 goles en 4 partidos). Tetracampeón con el Globo en el amateurismo y luego director técnico de tres copas nacionales.",
      "hitos": [
        "Tetracampeón de Primera División con el Globo en la era dorada.",
        "Primer Botín de Oro de un Mundial FIFA (Uruguay 1930 con 8 tantos).",
        "Promedio demoledor de 0.87 goles por partido en Huracán."
      ],
      "imagen": "stabile"
    },
    {
      "id": "mendez",
      "foto": "https://upload.wikimedia.org/wikipedia/commons/0/07/Tucho_mendez.jpg",
      "nombre": "Norberto Doroteo Méndez",
      "apodo": "Tucho",
      "posicion": "Entreala Derecho",
      "linea": "Delantero",
      "periodo": "1940 - 1947 / 1956 - 1958",
      "decada": "1940s",
      "partidos": 176,
      "goles": 68,
      "promedio": "0.39",
      "titulos": [
        "Copa Adrián Escobar 1942",
        "Copa Adrián Escobar 1943",
        "Copa Competencia Británica 1944"
      ],
      "nacimiento": "5 de enero de 1923, Parque Patricios",
      "fallecimiento": "22 de junio de 1998 (75 años)",
      "descripcion": "El arquetipo del jugador porteño: pelo a la gomina, gambeta endemoniada, picardía barrial y pegada magistral. Tricampeón consecutivo de la Copa América con la Selección Argentina (1945, 1946, 1947) y máximo goleador de la historia del torneo continental junto a Zizinho (17 goles).",
      "hitos": [
        "Máximo goleador histórico de la Copa América con 17 tantos oficiales.",
        "Tricampeón invicto de América con la Selección Argentina.",
        "Tricampeón de Copas de AFA con Huracán.",
        "La cabecera Este del Palacio Tomás Adolfo Ducó lleva su nombre oficial."
      ],
      "imagen": "mendez"
    },
    {
      "id": "carrascosa",
      "foto": "https://upload.wikimedia.org/wikipedia/commons/2/25/Jorge_Carrascosa_%281970%29.png",
      "nombre": "Jorge Carrascosa",
      "apodo": "El Lobo",
      "posicion": "Lateral Izquierdo",
      "linea": "Defensor",
      "periodo": "1973 - 1979",
      "decada": "1970s",
      "partidos": 287,
      "goles": 0,
      "promedio": "0.00",
      "titulos": [
        "Campeonato Metropolitano 1973"
      ],
      "nacimiento": "15 de agosto de 1948, Valentín Alsina",
      "fallecimiento": null,
      "descripcion": "El lateral izquierdo perfecto. Dueño de una marca implacable, técnica depurada para salir jugando y un don de mando y nobleza deportiva reconocidos unánimemente. Capitán indiscutido y pilar del equipo campeón de 1973.",
      "hitos": [
        "287 partidos disputados en Huracán con una regularidad asombrosa.",
        "Capitán de Huracán y de la Selección Argentina.",
        "Ejemplo de ética y caballerosidad dentro y fuera del campo de juego."
      ],
      "imagen": "carrascosa"
    },
    {
      "id": "basile",
      "foto": "https://upload.wikimedia.org/wikipedia/commons/4/44/Basile_masterclass_2013_%28cropped%29.jpg",
      "nombre": "Alfio Basile",
      "apodo": "Coco",
      "posicion": "Defensor Central",
      "linea": "Defensor",
      "periodo": "1971 - 1975",
      "decada": "1970s",
      "partidos": 212,
      "goles": 12,
      "promedio": "0.06",
      "titulos": [
        "Campeonato Metropolitano 1973"
      ],
      "nacimiento": "1 de noviembre de 1943, Bahía Blanca",
      "fallecimiento": null,
      "descripcion": "Voz de mando, jerarquía mundial y elegancia para salir jugando con la cabeza levantada. El zaguero izquierdo titular de la obra maestra de Menotti en 1973, ganándose el cariño eterno de Parque Patricios.",
      "hitos": [
        "Campeón de América e Intercontinental previo a llegar al Globo.",
        "Patrón de la defensa del Huracán de 1973.",
        "212 partidos y 12 goles con la camiseta del Globo."
      ],
      "imagen": "basile"
    },
    {
      "id": "diaz",
      "foto": "https://upload.wikimedia.org/wikipedia/commons/1/1e/Marcos_D%C3%ADaz_cropped.jpg",
      "nombre": "Marcos Díaz",
      "apodo": "El Rey de los Penales",
      "posicion": "Arquero",
      "linea": "Arquero",
      "periodo": "2013 - 2018 / 2021 - 2022",
      "decada": "2010s",
      "partidos": 182,
      "goles": 0,
      "promedio": "0.00",
      "titulos": [
        "Copa Argentina 2013-14",
        "Supercopa Argentina 2014",
        "Ascenso a Primera 2014"
      ],
      "nacimiento": "5 de febrero de 1986, Santa Fe",
      "fallecimiento": null,
      "descripcion": "El arquero más determinante del siglo XXI quemero. Monumental atajador de penales y responsable directo de las consagraciones en San Juan.",
      "hitos": [
        "Atajó penales decisivos en octavos, cuartos y la gran final de la Copa Argentina 2014.",
        "Valla invicta en la consagración de la Supercopa 2014 ante el River Plate de Gallardo.",
        "Finalista de la Copa Sudamericana 2015 con actuaciones estelares."
      ],
      "imagen": "diaz"
    },
    {
      "id": "abila",
      "foto": "https://img.a.transfermarkt.technology/portrait/header/88049-1755536928.jpg",
      "nombre": "Ramón Darío Ábila",
      "apodo": "Wanchope",
      "posicion": "Centrodelantero",
      "linea": "Delantero",
      "periodo": "2014 - 2017 / 2024 - Act.",
      "decada": "2010s",
      "partidos": 119,
      "goles": 58,
      "promedio": "0.49",
      "titulos": [
        "Copa Argentina 2013-14",
        "Supercopa Argentina 2014",
        "Ascenso a Primera 2014"
      ],
      "nacimiento": "14 de octubre de 1989, Córdoba",
      "fallecimiento": null,
      "descripcion": "Potencia, picardía y un idilio inquebrantable con la gente del Globo. Llegó en 2014 para ser goleador del ascenso, de la Copa Argentina y figura continental en la Sudamericana 2015.",
      "hitos": [
        "58 goles oficiales y top 10 histórico del club.",
        "Goleador de la Copa Sudamericana 2015 (5 goles).",
        "Gol decisivo a River en las semifinales de la Copa Sudamericana 2015."
      ],
      "imagen": "abila"
    },
    {
      "id": "pastore",
      "foto": "https://upload.wikimedia.org/wikipedia/commons/e/e2/PSG-Shakhter15_%2812%29.jpg",
      "nombre": "Javier Matías Pastore",
      "apodo": "El Flaco",
      "posicion": "Enganche",
      "linea": "Mediocampista",
      "periodo": "2007 - 2009",
      "decada": "2000s",
      "partidos": 31,
      "goles": 8,
      "promedio": "0.26",
      "titulos": [
        "Subcampeón Torneo Clausura 2009"
      ],
      "nacimiento": "20 de junio de 1989, Córdoba",
      "fallecimiento": null,
      "descripcion": "El niño mimado del 'Tiki-Tiki' de Ángel Cappa. En el Clausura 2009 deslumbró al país con pisadas, asistencias y caños inolvidables como en el 4-0 a River.",
      "hitos": [
        "Figura estelar del fútbol argentino en el Clausura 2009.",
        "Transferido al fútbol europeo y mundialista con la Selección Argentina en Sudáfrica 2010.",
        "Amor incondicional manifestado en cada regreso al Palacio Ducó."
      ],
      "imagen": "pastore"
    },
    {
      "id": "montenegro",
      "foto": "https://upload.wikimedia.org/wikipedia/commons/e/e2/Daniel_Rolfi_Montenegro.jpg",
      "nombre": "Daniel Gastón Montenegro",
      "apodo": "Rolfi",
      "posicion": "Enganche / Mediapunta",
      "linea": "Mediocampista",
      "periodo": "1997-1999 / 2002 / 2015-2018 (4 etapas)",
      "decada": "2000s",
      "partidos": 236,
      "goles": 44,
      "promedio": "0.19",
      "titulos": [
        "Finalista Copa Sudamericana 2015",
        "Campeón Supercopa Argentina 2014"
      ],
      "nacimiento": "28 de marzo de 1979, Buenos Aires",
      "fallecimiento": null,
      "descripcion": "Surgido de la cantera inagotable de Parque Patricios. Regresó en 2015 para conducir al equipo en la final de la Copa Sudamericana y la Copa Libertadores.",
      "hitos": [
        "236 partidos jugados defendiendo la camiseta en cuatro décadas distintas.",
        "Gol histórico de tiro libre a River en el Monumental en el Clausura 2002.",
        "Ídolo formado en La Quemita."
      ],
      "imagen": "montenegro"
    },
    {
      "id": "toranzo",
      "foto": "https://img.a.transfermarkt.technology/portrait/header/26256-1462372207.jpg",
      "nombre": "Patricio Daniel Toranzo",
      "apodo": "El Pato",
      "posicion": "Volante Ofensivo",
      "linea": "Mediocampista",
      "periodo": "2007-2010 / 2014-2019 / 2020-2022",
      "decada": "2010s",
      "partidos": 218,
      "goles": 24,
      "promedio": "0.11",
      "titulos": [
        "Copa Argentina 2013-14",
        "Supercopa Argentina 2014",
        "Ascenso a Primera 2014"
      ],
      "nacimiento": "19 de marzo de 1982, Buenos Aires",
      "fallecimiento": null,
      "descripcion": "El cerebro del mediocampo moderno. Conquistó el corazón quemero en el equipo de Cappa 2009 y regresó en 2014 para ganar la Copa Argentina y la Supercopa.",
      "hitos": [
        "Asistente magistral en la final de la Supercopa 2014 ante River.",
        "Ejemplo de superación y resiliencia tras el accidente en Venezuela en 2016.",
        "Tres veces campeón oficial con el club."
      ],
      "imagen": "toranzo"
    },
    {
      "id": "mohamed",
      "foto": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8e/XXIII_Memorial_Quinocho_%28RC_Celta_vs_Mainz_05%29_-_04_%28cropped%29.jpg/960px-XXIII_Memorial_Quinocho_%28RC_Celta_vs_Mainz_05%29_-_04_%28cropped%29.jpg",
      "nombre": "Antonio Ricardo Mohamed",
      "apodo": "El Turco",
      "posicion": "Delantero / Extremo",
      "linea": "Delantero",
      "periodo": "1987 - 1991",
      "decada": "1990s",
      "partidos": 105,
      "goles": 41,
      "promedio": "0.39",
      "titulos": [
        "Campeonato Nacional B 1989-90 (Ascenso)"
      ],
      "nacimiento": "2 de abril de 1970, Villa Soldati",
      "fallecimiento": null,
      "descripcion": "Hincha fanático del Globo desde la cuna. Goleador brillante y desparpajado del ascenso de 1990 y luego como director técnico consiguió el épico ascenso en Mendoza en 2007.",
      "hitos": [
        "Héroe del ascenso de 1990 anotando el gol de la consagración.",
        "Ascendió a Huracán como futbolista (1990) y como director técnico (2007)."
      ],
      "imagen": "mohamed"
    },
    {
      "id": "onzari",
      "foto": "https://upload.wikimedia.org/wikipedia/commons/1/16/Onzari_Huracan.jpg",
      "nombre": "Cesáreo Onzari",
      "apodo": "El Padre del Gol Olímpico",
      "posicion": "Puntero Izquierdo",
      "linea": "Delantero",
      "periodo": "1921 - 1933",
      "decada": "1920s",
      "partidos": 212,
      "goles": 67,
      "promedio": "0.32",
      "titulos": [
        "Campeonato de Primera División 1921",
        "Campeonato de Primera División 1922",
        "Campeonato de Primera División 1925",
        "Campeonato de Primera División 1928"
      ],
      "nacimiento": "1 de febrero de 1903, Buenos Aires",
      "fallecimiento": "7 de enero de 1964 (60 años)",
      "descripcion": "Extremo izquierdo tetracampeón con el Globo y autor del hecho que cambió el reglamento y el lenguaje del fútbol: el primer 'Gol Olímpico' de la historia en 1924.",
      "hitos": [
        "Primer gol directo de córner de la historia del fútbol (2 de octubre de 1924).",
        "Tetracampeón de Primera División con el Club Atlético Huracán."
      ],
      "imagen": "onzari"
    },
    {
      "id": "chiesa",
      "foto": "https://upload.wikimedia.org/wikipedia/commons/0/04/%C3%81ngel_Chiesa%2C_Estadio%2C_1945-01-12_%2887%29.jpg",
      "nombre": "Ángel Chiesa",
      "apodo": "El Cañonero Amateur",
      "posicion": "Entreala Derecho",
      "linea": "Delantero",
      "periodo": "1919 - 1930",
      "decada": "1920s",
      "partidos": 188,
      "goles": 110,
      "promedio": "0.58",
      "titulos": [
        "Campeonato 1921",
        "Campeonato 1922",
        "Campeonato 1925",
        "Campeonato 1928",
        "Copa Estímulo 1920",
        "Copa Ibarguren 1922 y 1925"
      ],
      "nacimiento": "1900, Buenos Aires",
      "fallecimiento": "1961",
      "descripcion": "Quinto máximo goleador histórico de la institución con 110 tantos y pieza insustituible de los 4 títulos de Primera División y 3 copas nacionales de la década dorada de 1920.",
      "hitos": [
        "Ganó 7 títulos oficiales con Huracán.",
        "Promedio estelar de 0.58 goles por encuentro."
      ],
      "imagen": "chiesa"
    },
    {
      "id": "pussetto",
      "foto": "https://img.a.transfermarkt.technology/portrait/header/283528-1630653500.jpg",
      "nombre": "Ignacio Pussetto",
      "apodo": "Nacho",
      "posicion": "Extremo / Delantero",
      "linea": "Delantero",
      "periodo": "2016-2018 / 2023-2024",
      "decada": "2020s",
      "partidos": 88,
      "goles": 24,
      "promedio": "0.27",
      "titulos": [
        "Goleador Copa de la Liga 2024"
      ],
      "nacimiento": "21 de diciembre de 1995, Cañada Rosquín",
      "fallecimiento": null,
      "descripcion": "Velocidad deslumbrante, técnica y amor incondicional por la camiseta. En 2023 regresó de Europa en el momento más difícil del club para liderar la salvación del descenso.",
      "hitos": [
        "Máximo goleador de Huracán en 2023-2024.",
        "Capitán y referente querido por todo el Palacio Ducó."
      ],
      "imagen": "pussetto"
    },
    {
      "id": "rendo",
      "foto": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0b/Alberto_Rendo_-_El_Gr%C3%A1fico_2604.jpg/960px-Alberto_Rendo_-_El_Gr%C3%A1fico_2604.jpg",
      "nombre": "Alberto Rendo",
      "apodo": "Toscano",
      "posicion": "Volante Central / Interior",
      "linea": "Mediocampista",
      "periodo": "1959 - 1964 / 1970 - 1971",
      "decada": "1960s",
      "partidos": 245,
      "goles": 26,
      "promedio": "0.11",
      "titulos": [
        "Copa de las Naciones 1964 (Selección)"
      ],
      "nacimiento": "3 de enero de 1940, Parque Patricios",
      "fallecimiento": null,
      "descripcion": "Nacido y criado a tres cuadras de la sede social. Uno de los volantes más guapos, talentosos y representativos del barrio de las décadas del 60 y 70.",
      "hitos": [
        "245 partidos con la casaca quemera.",
        "Autor del gol mítico de la Selección Argentina ante Perú en 1969.",
        "Monumento viviente de la identidad de Parque Patricios."
      ],
      "imagen": "rendo"
    },
    {
      "id": "avallay",
      "foto": "https://upload.wikimedia.org/wikipedia/commons/5/5c/Roque_avallay_en_huracan.jpg",
      "nombre": "Roque Avallay",
      "apodo": "El Tanque",
      "posicion": "Delantero de Área",
      "linea": "Delantero",
      "periodo": "1972 - 1976 / 1980",
      "decada": "1970s",
      "partidos": 198,
      "goles": 72,
      "promedio": "0.36",
      "titulos": [
        "Campeonato Metropolitano 1973"
      ],
      "nacimiento": "14 de diciembre de 1945, Mendoza",
      "fallecimiento": null,
      "descripcion": "El ariete demoledor del Huracán del 73. Potencia física, cabezazo implacable y una diagonal perfecta para recibir los pases quirúrgicos de Babington y Brindisi.",
      "hitos": [
        "Goleador de Huracán en la consagración del Torneo Metropolitano 1973.",
        "Top 8 de artilleros históricos de la institución (72 goles)."
      ],
      "imagen": "avallay"
    },
    {
      "id": "larrosa",
      "foto": "https://upload.wikimedia.org/wikipedia/commons/e/e9/Omar_larrosa_panini_cropped.jpg",
      "nombre": "Omar Larrosa",
      "apodo": "El Negro",
      "posicion": "Volante Izquierdo",
      "linea": "Mediocampista",
      "periodo": "1972 - 1976",
      "decada": "1970s",
      "partidos": 182,
      "goles": 42,
      "promedio": "0.23",
      "titulos": [
        "Campeonato Metropolitano 1973",
        "Copa del Mundo FIFA 1978"
      ],
      "nacimiento": "18 de noviembre de 1947, Lanús",
      "fallecimiento": null,
      "descripcion": "La cuota de equilibrio, despliegue físico y gol sobre la banda izquierda del Huracán de Menotti de 1973. Su nivel en el club lo catapultó al título mundial en 1978.",
      "hitos": [
        "Titular indiscutido del campeón de 1973.",
        "Campeón del Mundo con Argentina 1978 jugando la final en el Monumental."
      ],
      "imagen": "larrosa"
    },
    {
      "id": "morresi",
      "foto": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9e/C_M_2020.jpg/960px-C_M_2020.jpg",
      "nombre": "Claudio Morresi",
      "apodo": "El Flaco",
      "posicion": "Volante Creativo",
      "linea": "Mediocampista",
      "periodo": "1979 - 1985",
      "decada": "1980s",
      "partidos": 164,
      "goles": 38,
      "promedio": "0.23",
      "titulos": [
        "Semifinalista Torneo Nacional 1980"
      ],
      "nacimiento": "30 de abril de 1962, Buenos Aires",
      "fallecimiento": null,
      "descripcion": "El crack y portador de la camiseta número 10 de Huracán durante los complejos años ochenta. Zurda sutil, elegancia exquisita y profundo compromiso social.",
      "hitos": [
        "Símbolo formativo de las divisiones inferiores del club en los 80.",
        "Autor de goles antológicos de tiro libre en el Palacio Ducó."
      ],
      "imagen": "morresi"
    },
    {
      "id": "dominguez",
      "foto": "https://upload.wikimedia.org/wikipedia/commons/3/37/Eduardo_Dom%C3%ADnguez_%2884%29_%28cropped%29.jpg",
      "nombre": "Eduardo Domínguez",
      "apodo": "El Barba",
      "posicion": "Defensor Central",
      "linea": "Defensor",
      "periodo": "2008-2010 / 2012-2015",
      "decada": "2010s",
      "partidos": 142,
      "goles": 7,
      "promedio": "0.05",
      "titulos": [
        "Copa Argentina 2013-14",
        "Supercopa Argentina 2014",
        "Ascenso a Primera 2014",
        "Subcampeón Clausura 2009"
      ],
      "nacimiento": "1 de septiembre de 1978, Lanús",
      "fallecimiento": null,
      "descripcion": "El gran capitán. Líder moral y táctico tanto en el Huracán de Cappa de 2009 como en el campeón de Copa Argentina 2014. Tras colgar los botines, asumió de inmediato como DT y llevó a Huracán a la final de la Copa Sudamericana 2015.",
      "hitos": [
        "Capitán campeón de Copa Argentina y Supercopa Argentina.",
        "Finalista como DT de la Copa Sudamericana 2015 eliminando a River Plate."
      ],
      "imagen": "dominguez"
    },
    {
      "id": "mazzantti",
      "foto": "https://img.a.transfermarkt.technology/portrait/header/477458-1685381324.JPG",
      "nombre": "Walter Mazzantti",
      "apodo": "El Rayo",
      "posicion": "Extremo Derecho",
      "linea": "Delantero",
      "periodo": "2023 - Presente",
      "decada": "2020s",
      "partidos": 75,
      "goles": 16,
      "promedio": "0.21",
      "titulos": [
        "Figura Clave Campaña 2024-2026"
      ],
      "nacimiento": "5 de septiembre de 1996, Labarden, Buenos Aires",
      "fallecimiento": null,
      "descripcion": "Puntero picante, velocísimo y con un cambio de ritmo letal. Autor de goles decisivos en el Ducó y figura estelar en las victorias ante River, Boca y San Lorenzo.",
      "hitos": [
        "Gol de la victoria memorable en el Palacio Ducó ante River Plate.",
        "Líder en asistencias y generación de jugadas de peligro del primer equipo."
      ],
      "imagen": "mazzantti"
    },
    {
      "id": "echeverria",
      "foto": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d2/Rodrigo_Echeverr%C3%ADa_Everton_v_Uni%C3%B3n_La_Calera_20230716_01.jpg/960px-Rodrigo_Echeverr%C3%ADa_Everton_v_Uni%C3%B3n_La_Calera_20230716_01.jpg",
      "nombre": "Rodrigo Echeverría",
      "apodo": "El León Trasandino",
      "posicion": "Volante Central / Defensor",
      "linea": "Mediocampista",
      "periodo": "2023 - Presente",
      "decada": "2020s",
      "partidos": 68,
      "goles": 7,
      "promedio": "0.10",
      "titulos": [
        "Titular Selección Chilena"
      ],
      "nacimiento": "17 de abril de 1995, San Ramón, Chile",
      "fallecimiento": null,
      "descripcion": "Baluarte insustituible del mediocampo quemero. Despliegue atlético formidable, quite limpio, juego aéreo dominante y llegada al área rival.",
      "hitos": [
        "Titular indiscutido en la Selección de Chile mientras defiende la camiseta del Globo.",
        "Ovacionado partido tras partido en el Palacio Tomás A. Ducó."
      ],
      "imagen": "echeverria"
    },
    {
      "id": "tedesco",
      "foto": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f2/Hurac%C3%A1n_de_1968.png/960px-Hurac%C3%A1n_de_1968.png",
      "nombre": "Hugo Alberto Tedesco",
      "apodo": "El Zurdo",
      "posicion": "Volante Creativo",
      "linea": "Mediocampista",
      "periodo": "1967 - 1971 / 1976",
      "decada": "1970s",
      "partidos": 160,
      "goles": 31,
      "promedio": "0.19",
      "titulos": [
        "Subcampeón Metropolitano 1976"
      ],
      "nacimiento": "20 de febrero de 1947, Buenos Aires",
      "fallecimiento": null,
      "descripcion": "Volante ofensivo de notable precisión técnica y elegancia, artífice del juego asociado en la antesala de los grandes logros de los 70.",
      "hitos": [
        "Más de 150 partidos con la divisa quemera.",
        "Representó a Huracán en torneos internacionales."
      ],
      "imagen": "tedesco"
    }
  ],
  "tecnicos": [
    {
      "id": "diego-martinez",
      "foto": "https://img.a.transfermarkt.technology/portrait/header/70683-1769439086.png",
      "nombre": "Diego Martínez",
      "apodo": "El Gigoló",
      "periodo": "2023 / 2025 - Presente",
      "partidos": 52,
      "efectividad": "61%",
      "titulos": [
        "Clasificación a Torneos Internacionales",
        "Líder Fase Regular Copa de la Liga 2023"
      ],
      "descripcion": "Director Técnico actual del Club Atlético Huracán. Protagonista de una campaña heroica en 2023 salvando al club del descenso con una racha de victorias inolvidable y terminando primero en la fase regular. Regresó para encarar el ciclo 2025-2027 con un fútbol protagónico, ofensivo y de identidad quemera.",
      "cuerpoTecnico": "Cristian Bardaro y Adrián González (Ayudantes de campo), Juan Manuel Conte y Leandro Mazziotti (Preparadores físicos), Patricio Ciavarella (Entrenador de arqueros).",
      "estado": "DT Actual del Primer Equipo",
      "frase": "'Huracán tiene un sentido de pertenencia único; este club te exige jugar con el corazón en la mano y la cabeza levantada.'"
    },
    {
      "id": "kudelka",
      "foto": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/79/Universidad_de_Chile_-_Uni%C3%B3n_Espa%C3%B1ola_20190310_15.jpg/960px-Universidad_de_Chile_-_Uni%C3%B3n_Espa%C3%B1ola_20190310_15.jpg",
      "nombre": "Frank Darío Kudelka",
      "apodo": "Frank",
      "periodo": "2013-2014 / 2021-2022 / 2024-2025",
      "partidos": 128,
      "efectividad": "55%",
      "titulos": [
        "Campaña Base Copa Argentina 2014",
        "Subcampeón / Peleó Torneo Liga 2024"
      ],
      "descripcion": "Ex Director Técnico con tres ciclos muy destacados en la institución. En 2014 construyó la base competitiva que luego alzaría la Copa Argentina y lograría el ascenso. En 2024 encabezó una campaña memorable peleando el campeonato de la Liga Profesional palmo a palmo hasta las jornadas decisivas.",
      "estado": "Ex Director Técnico (3 Ciclos Históricos)",
      "frase": "'Huracán es un gigante del fútbol argentino que cuando se despierta hace temblar al país.'"
    },
    {
      "id": "menotti",
      "foto": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/95/C%C3%A9sar_Luis_Menotti_in_Recoleta.jpg/960px-C%C3%A9sar_Luis_Menotti_in_Recoleta.jpg",
      "nombre": "César Luis Menotti",
      "apodo": "El Flaco",
      "periodo": "1971 - 1974",
      "partidos": 162,
      "efectividad": "66%",
      "titulos": [
        "Campeonato Metropolitano 1973"
      ],
      "descripcion": "Revolucionó para siempre el fútbol argentino con el Huracán de 1973. Propuso un fútbol de toque, estética, generosidad ofensiva y convicciones innegociables. Con Babington, Brindisi, Houseman, Basile y Carrascosa, construyó una de las obras de arte más perfectas del deporte mundial, que le abrió las puertas para ser el DT de la Selección Argentina campeona del mundo en 1978.",
      "estado": "Prócer Eterno del Fútbol y Campeón 1973",
      "frase": "'Aquel Huracán jugaba para la gente. Si la pelota no la acariciás, la pelota llora.'"
    },
    {
      "id": "cappa",
      "foto": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6c/%C3%81ngel_Cappa.jpg/960px-%C3%81ngel_Cappa.jpg",
      "nombre": "Ángel Cappa",
      "apodo": "El Filósofo del Tiki-Tiki",
      "periodo": "2008 - 2009",
      "partidos": 44,
      "efectividad": "54%",
      "titulos": [
        "Subcampeón Torneo Clausura 2009"
      ],
      "descripcion": "Comandó el equipo que conmovió los corazones de los amantes del buen juego en 2009. 'Los Ángeles de Cappa' desplegaron una sinfonía de fútbol con Pastore, Bolatti, Defederico, Toranzo y Arano que goleó y brilló hasta la recordada y polémica última fecha en Liniers.",
      "estado": "DT Subcampeón 2009",
      "frase": "'Huracán demostró que se puede emocionar al hincha a través de la belleza y el pase al compañero.'"
    },
    {
      "id": "apuzzo",
      "foto": "https://media.tycsports.com/files/2021/12/14/371670/apuzzo_862x485.jpg",
      "nombre": "Néstor Apuzzo",
      "apodo": "El Bombero de Parque Patricios",
      "periodo": "2011, 2012, 2014-2015, 2019",
      "partidos": 68,
      "efectividad": "60%",
      "titulos": [
        "Copa Argentina 2013-14",
        "Supercopa Argentina 2014",
        "Ascenso a Primera 2014"
      ],
      "descripcion": "Hombre de la casa, formador incansable de inferiores y técnico que asumió en momentos decisivos para llevar al club a la gloria eterna. Dirigió la semifinal y final de la Copa Argentina 2014, el desempate por el ascenso ante Atlético Tucumán y la histórica final de la Supercopa ante River Plate.",
      "estado": "DT Campeón 2014 y 2015",
      "frase": "'A Huracán no se le dice que no. Huracán es mi vida.'"
    },
    {
      "id": "dominguez-dt",
      "foto": "https://upload.wikimedia.org/wikipedia/commons/3/37/Eduardo_Dom%C3%ADnguez_%2884%29_%28cropped%29.jpg",
      "nombre": "Eduardo Domínguez",
      "apodo": "El Barba",
      "periodo": "2015 - 2016",
      "partidos": 50,
      "efectividad": "58%",
      "titulos": [
        "Finalista Copa Sudamericana 2015",
        "Clasificación Copa Libertadores 2016"
      ],
      "descripcion": "Dejar los botines un viernes y dirigir el domingo: su transición fue histórica. Lideró a Huracán a su primera final internacional en la Copa Sudamericana 2015 tras eliminar al River de Gallardo y condujo al equipo en la Copa Libertadores 2016.",
      "estado": "DT Finalista Internacional",
      "frase": "'La camiseta de Huracán exige templanza, convicción y juego solidario.'"
    },
    {
      "id": "stabile_dt",
      "foto": "https://upload.wikimedia.org/wikipedia/commons/5/51/Guillermo_stabile_hincado.jpg",
      "nombre": "Guillermo Stábile",
      "apodo": "El Maestro",
      "periodo": "1940 - 1949",
      "partidos": 240,
      "efectividad": "59%",
      "titulos": [
        "Copa Adrián Escobar 1942",
        "Copa Adrián Escobar 1943",
        "Copa Competencia Británica 1944"
      ],
      "descripcion": "Tras su inolvidable etapa como artillero, dirigió al primer equipo durante casi toda la década de 1940, ganando tres copas nacionales oficiales de AFA y forjando la temible delantera con Baldonedo, Masantonio y Tucho Méndez.",
      "estado": "DT Tricampeón de Copas Nacionales",
      "frase": "'El jugador de Huracán tiene que saber que lleva en el pecho el globo de la valentía.'"
    },
    {
      "id": "babington_dt",
      "foto": "https://upload.wikimedia.org/wikipedia/commons/b/b0/Carlos_Babington.jpg",
      "nombre": "Carlos Alberto Babington",
      "apodo": "El Inglés",
      "periodo": "1988 - 1991 / 1999 - 2001",
      "partidos": 160,
      "efectividad": "57%",
      "titulos": [
        "Campeón Nacional B 1989-90",
        "Campeón Nacional B 1999-2000"
      ],
      "descripcion": "Como director técnico fue el estratega de dos de los regresos más festejados a Primera División: el campeonato de 1990 con el Turco Mohamed como figura y el récord de puntos en el 2000.",
      "estado": "DT Bicampeón de Ascenso",
      "frase": "'Huracán es un club de Primera División por historia, por gente y por grandeza.'"
    }
  ],
  "sedes": [
    {
      "id": "estadio-duco",
      "nombre": "Estadio Tomás Adolfo Ducó ('El Palacio')",
      "inauguracion": "10 de agosto de 1947",
      "capacidad": 48314,
      "ubicacion": "Av. Amancio Alcorta 2570, Parque Patricios, CABA",
      "arquitectura": "Estilo Expresionista / Art Déco monumental. Obra de los arquitectos Curutchet, Giraldez y Olivera.",
      "distincion": "Declarado Patrimonio Histórico y Cultural de la Ciudad Autónoma de Buenos Aires (Ley 2516).",
      "torre": "Torre icónica de 40 metros de altura que corona el frente sobre Alcorta.",
      "tribunas": [
        {
          "nombre": "Platea Miravé (Herminio Masantonio)",
          "sector": "Lateral Oeste",
          "descripcion": "Elegante tribuna techada lateral de dos bandejas, con palcos vip y cabinas oficiales de transmisión. Homenajea al máximo goleador de nuestra historia."
        },
        {
          "nombre": "Platea Oficial Alcorta",
          "sector": "Lateral Este",
          "descripcion": "Sector preferencial bajo y alto sobre Av. Amancio Alcorta. Incluye el hall central de recepción, palco presidencial, sala de conferencias y acceso de planteles."
        },
        {
          "nombre": "Popular Oscar 'Ringo' Bonavena (Cabecera Colonia)",
          "sector": "Cabecera Norte",
          "descripcion": "Tribuna popular local donde late el corazón de la hinchada quemera, nombrada en honor al legendario peso pesado de Parque Patricios."
        },
        {
          "nombre": "Popular Norberto 'Tucho' Méndez (Cabecera Este / Luna)",
          "sector": "Cabecera Sur",
          "descripcion": "Monumental cabecera con vista panorámica hacia la ciudad y el ferrocarril, en homenaje al virtuoso tricampeón de América."
        }
      ],
      "historia": "Construido bajo el liderazgo visionario del Tte. Cnel. Tomás Adolfo Ducó, fue inaugurado oficialmente el 10 de agosto de 1947 venciendo 4-3 a Boca Juniors ante 80.000 espectadores. Escenario de partidos memorables y películas ganadoras del Oscar como 'El Secreto de sus Ojos'.",
      "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Estadio_Tom%C3%A1s_Adolfo_Duc%C3%B3_Huracan_vs_Boca.jpg/600px-Estadio_Tom%C3%A1s_Adolfo_Duc%C3%B3_Huracan_vs_Boca.jpg"
    },
    {
      "id": "sede-social",
      "nombre": "Sede Social Histórica",
      "inauguracion": "1940",
      "capacidad": "Centro Polideportivo y Comunitario",
      "ubicacion": "Av. Caseros 3159, Parque Patricios, CABA",
      "arquitectura": "Edificio monumental de estilo racionalista con amplios ventanales y vitrales históricos.",
      "espacios": "Polideportivo cubierto para básquetbol y futsal, natatorio climatizado semiolímpico, Gimnasio de Boxeo 'Oscar Ringo Bonavena', sala de patín y gimnasia artística, oficinas de atención al socio, salón de actos solemnes y vitrinas de trofeos.",
      "historia": "Epicentro de la vida social y deportiva del club desde 1940. Aquí forjó su carrera pugilística Oscar Bonavena y se educaron deportivamente decenas de generaciones de jóvenes de Parque Patricios y la zona sur.",
      "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Emblema_oficial_del_Club_Atl%C3%A9tico_Hurac%C3%A1n.svg/500px-Emblema_oficial_del_Club_Atl%C3%A9tico_Hurac%C3%A1n.svg.png"
    },
    {
      "id": "la-quemita",
      "nombre": "Campo de Deportes 'La Quemita' (Jorge Newbery)",
      "inauguracion": "1983",
      "capacidad": "14 Hectáreas de complejo deportivo de alto rendimiento",
      "ubicacion": "Mariano Acosta 1981, Bajo Flores, CABA",
      "arquitectura": "Predio ecológico y deportivo abierto con infraestructura moderna.",
      "espacios": "Más de 9 canchas de fútbol 11 reglamentarias de césped natural, 2 canchas de césped sintético iluminadas, vestuarios de primer nivel, cancha de hockey sobre césped, canchas de tenis, sector de quinchos, parrillas y piletas recreativas de verano.",
      "historia": "Cuna del semillero quemero de donde surgieron estrellas nacionales e internacionales. Además de albergar las divisiones juveniles y el fútbol femenino, es el predio de entrenamiento cotidiano del plantel profesional de Primera División.",
      "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Emblema_oficial_del_Club_Atl%C3%A9tico_Hurac%C3%A1n.svg/500px-Emblema_oficial_del_Club_Atl%C3%A9tico_Hurac%C3%A1n.svg.png"
    },
    {
      "id": "predio-menotti",
      "nombre": "Predio Deportivo César Luis Menotti (ex Gas del Estado)",
      "inauguracion": "2024",
      "capacidad": "Expansión patrimonial contigua al Palacio",
      "ubicacion": "Av. Amancio Alcorta (frente al Estadio Tomás A. Ducó), Parque Patricios, CABA",
      "arquitectura": "Complejo moderno de entrenamiento integral y áreas médicas.",
      "espacios": "Campos de juego con césped natural de última generación, centro de medicina deportiva, gimnasio de musculación de alto rendimiento y áreas formativas.",
      "historia": "Tierras estratégicas recuperadas para el club tras décadas de gestiones. Bautizado en memoria del mítico entrenador que consagró campeón a Huracán en 1973 y transformó el fútbol argentino, este predio consolida la expansión urbana del club en Parque Patricios.",
      "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Emblema_oficial_del_Club_Atl%C3%A9tico_Hurac%C3%A1n.svg/500px-Emblema_oficial_del_Club_Atl%C3%A9tico_Hurac%C3%A1n.svg.png"
    }
  ],
  "estadios": [
    {
      "id": "estadio-duco",
      "nombre": "Estadio Tomás Adolfo Ducó ('El Palacio')",
      "inauguracion": "10 de agosto de 1947",
      "capacidad": 48314,
      "ubicacion": "Av. Amancio Alcorta 2570, Parque Patricios, CABA",
      "arquitectura": "Estilo Expresionista / Art Déco monumental. Obra de los arquitectos Curutchet, Giraldez y Olivera.",
      "distincion": "Declarado Patrimonio Histórico y Cultural de la Ciudad Autónoma de Buenos Aires (Ley 2516).",
      "torre": "Torre icónica de 40 metros de altura que corona el frente sobre Alcorta.",
      "tribunas": [
        {
          "nombre": "Platea Miravé (Herminio Masantonio)",
          "sector": "Lateral Oeste",
          "descripcion": "Elegante tribuna techada lateral de dos bandejas, con palcos vip y cabinas oficiales de transmisión. Homenajea al máximo goleador de nuestra historia."
        },
        {
          "nombre": "Platea Oficial Alcorta",
          "sector": "Lateral Este",
          "descripcion": "Sector preferencial bajo y alto sobre Av. Amancio Alcorta. Incluye el hall central de recepción, palco presidencial, sala de conferencias y acceso de planteles."
        },
        {
          "nombre": "Popular Oscar 'Ringo' Bonavena (Cabecera Colonia)",
          "sector": "Cabecera Norte",
          "descripcion": "Tribuna popular local donde late el corazón de la hinchada quemera, nombrada en honor al legendario peso pesado de Parque Patricios."
        },
        {
          "nombre": "Popular Norberto 'Tucho' Méndez (Cabecera Este / Luna)",
          "sector": "Cabecera Sur",
          "descripcion": "Monumental cabecera con vista panorámica hacia la ciudad y el ferrocarril, en homenaje al virtuoso tricampeón de América."
        }
      ],
      "historia": "Construido bajo el liderazgo visionario del Tte. Cnel. Tomás Adolfo Ducó, fue inaugurado oficialmente el 10 de agosto de 1947 venciendo 4-3 a Boca Juniors ante 80.000 espectadores. Escenario de partidos memorables y películas ganadoras del Oscar como 'El Secreto de sus Ojos'.",
      "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Estadio_Tom%C3%A1s_Adolfo_Duc%C3%B3_Huracan_vs_Boca.jpg/600px-Estadio_Tom%C3%A1s_Adolfo_Duc%C3%B3_Huracan_vs_Boca.jpg"
    },
    {
      "id": "sede-social",
      "nombre": "Sede Social Histórica",
      "inauguracion": "1940",
      "capacidad": "Centro Polideportivo y Comunitario",
      "ubicacion": "Av. Caseros 3159, Parque Patricios, CABA",
      "arquitectura": "Edificio monumental de estilo racionalista con amplios ventanales y vitrales históricos.",
      "espacios": "Polideportivo cubierto para básquetbol y futsal, natatorio climatizado semiolímpico, Gimnasio de Boxeo 'Oscar Ringo Bonavena', sala de patín y gimnasia artística, oficinas de atención al socio, salón de actos solemnes y vitrinas de trofeos.",
      "historia": "Epicentro de la vida social y deportiva del club desde 1940. Aquí forjó su carrera pugilística Oscar Bonavena y se educaron deportivamente decenas de generaciones de jóvenes de Parque Patricios y la zona sur.",
      "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Emblema_oficial_del_Club_Atl%C3%A9tico_Hurac%C3%A1n.svg/500px-Emblema_oficial_del_Club_Atl%C3%A9tico_Hurac%C3%A1n.svg.png"
    },
    {
      "id": "la-quemita",
      "nombre": "Campo de Deportes 'La Quemita' (Jorge Newbery)",
      "inauguracion": "1983",
      "capacidad": "14 Hectáreas de complejo deportivo de alto rendimiento",
      "ubicacion": "Mariano Acosta 1981, Bajo Flores, CABA",
      "arquitectura": "Predio ecológico y deportivo abierto con infraestructura moderna.",
      "espacios": "Más de 9 canchas de fútbol 11 reglamentarias de césped natural, 2 canchas de césped sintético iluminadas, vestuarios de primer nivel, cancha de hockey sobre césped, canchas de tenis, sector de quinchos, parrillas y piletas recreativas de verano.",
      "historia": "Cuna del semillero quemero de donde surgieron estrellas nacionales e internacionales. Además de albergar las divisiones juveniles y el fútbol femenino, es el predio de entrenamiento cotidiano del plantel profesional de Primera División.",
      "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Emblema_oficial_del_Club_Atl%C3%A9tico_Hurac%C3%A1n.svg/500px-Emblema_oficial_del_Club_Atl%C3%A9tico_Hurac%C3%A1n.svg.png"
    },
    {
      "id": "predio-menotti",
      "nombre": "Predio Deportivo César Luis Menotti (ex Gas del Estado)",
      "inauguracion": "2024",
      "capacidad": "Expansión patrimonial contigua al Palacio",
      "ubicacion": "Av. Amancio Alcorta (frente al Estadio Tomás A. Ducó), Parque Patricios, CABA",
      "arquitectura": "Complejo moderno de entrenamiento integral y áreas médicas.",
      "espacios": "Campos de juego con césped natural de última generación, centro de medicina deportiva, gimnasio de musculación de alto rendimiento y áreas formativas.",
      "historia": "Tierras estratégicas recuperadas para el club tras décadas de gestiones. Bautizado en memoria del mítico entrenador que consagró campeón a Huracán en 1973 y transformó el fútbol argentino, este predio consolida la expansión urbana del club en Parque Patricios.",
      "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Emblema_oficial_del_Club_Atl%C3%A9tico_Hurac%C3%A1n.svg/500px-Emblema_oficial_del_Club_Atl%C3%A9tico_Hurac%C3%A1n.svg.png"
    }
  ],
  "disciplinas": [
    {
      "id": "boxeo",
      "nombre": "Boxeo",
      "icono": "trophy",
      "destacado": "Cuna de Oscar 'Ringo' Bonavena",
      "descripcion": "El boxeo es parte del ADN más profundo de Parque Patricios. El mítico ring de la sede de Av. Caseros 3159 vio forjarse a Oscar 'Ringo' Bonavena, quien paseó el nombre de Huracán por los templos mundiales del pugilismo, como el Madison Square Garden en sus históricas batallas ante Muhammad Ali y Joe Frazier. El club continúa formando campeones metropolitanos y nacionales.",
      "logros": [
        "Peleas mundiales históricas en el Madison Square Garden con Bonavena.",
        "Campeonatos de los Guantes de Oro y Torneos de la FAB.",
        "Gimnasio escuela de boxeo formativo y competitivo concurrido diariamente."
      ]
    },
    {
      "id": "hockey-patines",
      "nombre": "Hockey sobre Patines",
      "icono": "award",
      "destacado": "Campeón Sudamericano y Cuna de Campeones del Mundo",
      "descripcion": "Una de las disciplinas más laureadas de Huracán a nivel continental. Con una rica tradición de décadas, el Globo se consagró pentacampeón metropolitano, multicampeón de la Liga Nacional y Campeón Sudamericano de Clubes, aportando además figuras estelares a la Selección Argentina que conquistó campeonatos mundiales.",
      "logros": [
        "Campeón Sudamericano de Clubes.",
        "Múltiples títulos metropolitanos y campeonatos de la Liga Nacional.",
        "Base de jugadores campeones del mundo con la Selección Argentina."
      ]
    },
    {
      "id": "futsal",
      "nombre": "Futsal AFA (Masculino y Femenino)",
      "icono": "futbol",
      "destacado": "Protagonista Histórico de Primera División",
      "descripcion": "Huracán es una institución pionera en los torneos oficiales de Futsal de la Asociación del Fútbol Argentino. Sus planteles masculino y femenino compiten en la máxima categoría del país, disputando clásicos vibrantes y torneos nacionales con una sólida estructura en inferiores.",
      "logros": [
        "Títulos oficiales metropolitanos de AFA.",
        "Presencia continua en torneos de Primera División A y Copas de Plata.",
        "Gran cantera formativa en todas las divisiones menores."
      ]
    },
    {
      "id": "patin-artistico",
      "nombre": "Patín Artístico",
      "icono": "sparkles",
      "destacado": "Premios Internacionales y Danza de Élite",
      "descripcion": "Escuela de patín de renombre que entrena en la pista principal de la sede social. Sus atletas representan al club y al país en campeonatos sudamericanos, copas de danza y torneos nacionales federados.",
      "logros": [
        "Medallas en torneos sudamericanos y selectivos panamericanos.",
        "Múltiples campeonatos de la Federación Porteña de Patín.",
        "Formación de alto rendimiento desde categorías infantiles."
      ]
    },
    {
      "id": "basquet",
      "nombre": "Básquetbol",
      "icono": "dribbble",
      "destacado": "Tradición en FeBAMBA y Torneo Federal",
      "descripcion": "El gimnasio techado de Caseros 3159 ha vibrado durante décadas con los choques de básquetbol de Huracán en la Federación de Básquetbol del Área Metropolitana de Buenos Aires (FeBAMBA) y torneos de ascenso nacional.",
      "logros": [
        "Históricos ascensos a torneos nacionales y Torneo Federal.",
        "Títulos metropolitanos de divisiones formativas.",
        "Gran afluencia de jóvenes de la Comuna 4."
      ]
    },
    {
      "id": "voley",
      "nombre": "Vóley",
      "icono": "activity",
      "destacado": "Competencia en Federación Metropolitana",
      "descripcion": "Tanto en rama femenina como masculina, los equipos del Globo compiten con fervor en los torneos organizados por la Federación Metropolitana de Voleibol (FMV), destacándose por su espíritu colectivo y ascenso competitivo.",
      "logros": [
        "Ascensos en categorías metropolitanas mayores.",
        "Títulos en divisiones juveniles sub-16 y sub-18.",
        "Desarrollo permanente del semillero voleibolístico."
      ]
    },
    {
      "id": "roller-hockey",
      "nombre": "Roller Hockey",
      "icono": "shield",
      "destacado": "Potencia de la Liga Nacional",
      "descripcion": "Huracán es uno de los máximos exponentes del hockey en línea de la República Argentina, habiendo obtenido múltiples copas de la Liga Nacional y con jugadores habitualmente convocados a la Selección Nacional.",
      "logros": [
        "Multicampeón de la Liga Nacional de Hockey Línea.",
        "Representantes en campeonatos mundiales y Panamericanos."
      ]
    },
    {
      "id": "gimnasia-artistica",
      "nombre": "Gimnasia Artística",
      "icono": "user-check",
      "destacado": "Disciplina y Técnica Formativa",
      "descripcion": "Con aparatos reglamentarios y profesores de educación física especializados, la sala de gimnasia artística del club es un semillero de atletas que compiten a nivel metropolitano y nacional.",
      "logros": [
        "Podios en torneos metropolitanos federados.",
        "Participación en selectivos nacionales de niveles C y B."
      ]
    },
    {
      "id": "handball",
      "nombre": "Handball",
      "icono": "zap",
      "destacado": "Federación Metropolitana (Fe.Me.Bal)",
      "descripcion": "Crecimiento constante de la disciplina en todas las categorías, defendiendo la camiseta quemera en las canchas de toda la Ciudad y el Conurbano.",
      "logros": [
        "Ascensos y consolidación en torneos metropolitanos.",
        "Escuela formativa desde mini handball hasta planteles superiores."
      ]
    }
  ],
  "comisionesDirectivas": [
    {
      "periodo": "1908 - 1910",
      "presidente": "Carlos Alberto Caimi",
      "rol": "Presidente Fundacional",
      "hitos": "Fundación del Club en Ventana 859, adopción del nombre y redacción de los primeros estatutos."
    },
    {
      "periodo": "1911",
      "presidente": "José Laguna",
      "rol": "Presidente y Jugador",
      "hitos": "El mítico goleador asumió la presidencia y guió al club en sus primeros campeonatos federados."
    },
    {
      "periodo": "1912",
      "presidente": "Lorenzo Colonello",
      "rol": "Presidente",
      "hitos": "Consolidación de la masa societaria y mudanza de campo de juego."
    },
    {
      "periodo": "1913",
      "presidente": "Evaristo Dell'Isola",
      "rol": "Presidente",
      "hitos": "Ascenso histórico a Primera División tras ganar la final a Gimnasia y Esgrima de Flores."
    },
    {
      "periodo": "1914",
      "presidente": "Hilario Germán Bianchi",
      "rol": "Presidente",
      "hitos": "Primer año en la máxima categoría del fútbol argentino."
    },
    {
      "periodo": "1915 - 1919",
      "presidente": "Germán Blanco",
      "rol": "Presidente",
      "hitos": "Apertura de la primera sede social y crecimiento sostenido en Parque Patricios."
    },
    {
      "periodo": "1920",
      "presidente": "José Laguna",
      "rol": "Presidente (Segundo Mandato)",
      "hitos": "Huracán conquista su primer título oficial nacional: la Copa Estímulo 1920."
    },
    {
      "periodo": "1921 - 1923",
      "presidente": "Dr. Aldo Cantoni",
      "rol": "Presidente",
      "hitos": "Bicampeonato de Primera División (1921 y 1922) y conquista de la Copa Dr. Carlos Ibarguren. Impulso institucional inédito."
    },
    {
      "periodo": "1924 - 1926",
      "presidente": "Alfredo Lascano",
      "rol": "Presidente",
      "hitos": "Huracán Campeón Invicto de Primera División en 1925, Copa de Honor y Copa Ibarguren."
    },
    {
      "periodo": "1927 - 1929",
      "presidente": "Félix Iñarra Iraegui",
      "rol": "Presidente",
      "hitos": "Quinto campeonato nacional de Primera División en 1928, en un torneo maratónico de 35 fechas."
    },
    {
      "periodo": "1930 - 1932",
      "presidente": "Dr. Aldo Cantoni",
      "rol": "Presidente (Segundo Mandato)",
      "hitos": "Transición del amateurismo hacia la creación de la Liga Argentina de Football profesional."
    },
    {
      "periodo": "1933 - 1937",
      "presidente": "Jacinto Armando",
      "rol": "Presidente",
      "hitos": "Contratación de Herminio Masantonio y Emilio Baldonedo; primeras grandes recaudaciones."
    },
    {
      "periodo": "1938 - 1945",
      "presidente": "Tte. Cnel. Tomás Adolfo Ducó",
      "rol": "Presidente Emblema",
      "hitos": "Gestión histórica: adquisición de los terrenos de Amancio Alcorta, inicio de las obras del Palacio de cemento, inauguración de la sede de Caseros 3159 y obtención de tres copas oficiales de AFA (Escobar 1942 y 1943, Británica 1944)."
    },
    {
      "periodo": "1946 - 1948",
      "presidente": "Carlos Peuser",
      "rol": "Presidente",
      "hitos": "Inauguración deportiva del nuevo Estadio Tomás A. Ducó (10 de agosto de 1947 con triunfo 4-3 ante Boca)."
    },
    {
      "periodo": "1949 - 1954",
      "presidente": "Tte. Cnel. Tomás Adolfo Ducó",
      "rol": "Presidente (Segundo Mandato)",
      "hitos": "Inauguración oficial definitiva del Estadio y construcción de la torre Art Déco de 40 metros."
    },
    {
      "periodo": "1955 - 1958",
      "presidente": "Luis Seijo",
      "rol": "Presidente",
      "hitos": "Modernización de los servicios de la sede social y natatorio."
    },
    {
      "periodo": "1959 - 1963",
      "presidente": "Carmelo Valentino",
      "rol": "Presidente",
      "hitos": "Aparición de figuras como Alberto Rendo y consolidación en Primera División."
    },
    {
      "periodo": "1964 - 1967",
      "presidente": "Luis Seijo",
      "rol": "Presidente (Segundo Mandato)",
      "hitos": "Fomento de disciplinas deportivas federadas (hockey, boxeo, básquet)."
    },
    {
      "periodo": "1968 - 1971",
      "presidente": "Jorge Peña",
      "rol": "Presidente",
      "hitos": "Inicios de la conformación del plantel que alcanzaría la gloria; debut de Miguel Ángel Brindisi y Carlos Babington."
    },
    {
      "periodo": "1972 - 1977",
      "presidente": "Dr. David Bracutto",
      "rol": "Presidente de la Era Dorada",
      "hitos": "Contratación de César Luis Menotti, consagración histórica en el Torneo Metropolitano 1973, semifinalistas de Copa Libertadores 1974 y subcampeonatos 1975 y 1976."
    },
    {
      "periodo": "1978 - 1982",
      "presidente": "Osvaldo De Santis",
      "rol": "Presidente",
      "hitos": "Obras de infraestructura en tribunas y adquisición de nuevos predios."
    },
    {
      "periodo": "1983 - 1985",
      "presidente": "Rodolfo Settembrini",
      "rol": "Presidente",
      "hitos": "Inauguración del predio polideportivo 'La Quemita' en Mariano Acosta."
    },
    {
      "periodo": "1986 - 1988",
      "presidente": "Alberto Spota",
      "rol": "Presidente",
      "hitos": "Reformas estatutarias y reordenamiento de divisiones formativas."
    },
    {
      "periodo": "1989 - 1991",
      "presidente": "Juan José Zanola",
      "rol": "Presidente",
      "hitos": "Ascenso a Primera División como Campeón del Nacional B 1989/90 con el Turco Mohamed y Babington DT."
    },
    {
      "periodo": "1991 - 1994",
      "presidente": "Jorge Peña",
      "rol": "Presidente (Segundo Mandato)",
      "hitos": "Subcampeón del Torneo Clausura 1994 peleando la corona hasta la última fecha ante Independiente."
    },
    {
      "periodo": "1994 - 1998",
      "presidente": "Norberto Renzi",
      "rol": "Presidente",
      "hitos": "Participación en torneos internacionales (Copa Conmebol 1993 y 1994)."
    },
    {
      "periodo": "1998 - 2001",
      "presidente": "Carlos Massarino",
      "rol": "Presidente",
      "hitos": "Campeón del Nacional B 1999/2000 con récord de puntos y regreso inmediato a Primera de la mano de Babington."
    },
    {
      "periodo": "2001 - 2003",
      "presidente": "Marcelo Buenaga",
      "rol": "Presidente",
      "hitos": "Afrontó una de las mayores crisis económicas del fútbol argentino preservando el patrimonio del club."
    },
    {
      "periodo": "2003 - 2006",
      "presidente": "Oscar Padra",
      "rol": "Presidente",
      "hitos": "Reorganización institucional y saneamiento de pasivos."
    },
    {
      "periodo": "2006 - 2011",
      "presidente": "Carlos Alberto Babington",
      "rol": "Presidente",
      "hitos": "Ascenso a Primera en 2007 con el Turco Mohamed DT; subcampeonato en el Torneo Clausura 2009 con 'Los Ángeles de Cappa'."
    },
    {
      "periodo": "2011 - 2021",
      "presidente": "Alejandro Nadur",
      "rol": "Presidente (Tres Mandatos)",
      "hitos": "Campeón Copa Argentina 2014, Campeón Supercopa Argentina 2014 y Finalista Copa Sudamericana 2015."
    },
    {
      "periodo": "2021 - 2024",
      "presidente": "David Garzón",
      "rol": "Presidente",
      "hitos": "Modernización de La Quemita, recuperación estratégica de los terrenos de Gas del Estado (Predio Menotti) y orden económico."
    },
    {
      "periodo": "2024 - Actualidad",
      "presidente": "Abel Poza",
      "rol": "Presidente en Funciones",
      "hitos": "Gestión actual: proyecto de Museo Oficial en el Palacio Ducó, protagonismo deportivo en la Liga Profesional y fortalecimiento social."
    }
  ],
  "palmares": [
    {
      "id": "tit-1921",
      "anio": 1921,
      "tipo": "Campeonato de Primera División",
      "asociacion": "Asociación Argentina de Football",
      "categoria": "Liga Nacional",
      "partidos": 18,
      "puntos": 31,
      "detalle": "Primer título de liga en la historia del club. Huracán dominó el torneo ganando 14 partidos y empatando 3 en 18 fechas disputadas.",
      "figuras": "Ángel Chiesa, Cesáreo Onzari, Ramón Vázquez, Ernesto Celli.",
      "dt": "Subcomisión de Fútbol",
      "golesFavor": 54,
      "golesContra": 15
    },
    {
      "id": "tit-1922",
      "anio": 1922,
      "tipo": "Campeonato de Primera División",
      "asociacion": "Asociación Argentina de Football",
      "categoria": "Liga Nacional",
      "partidos": 16,
      "puntos": 28,
      "detalle": "Bicampeonato de Primera División. El Globo refrendó su condición de rey de la categoría con un juego demoledor.",
      "figuras": "Ángel Chiesa, Cesáreo Onzari, Guillermo Stábile, Juan Pratto.",
      "dt": "Subcomisión de Fútbol",
      "golesFavor": 36,
      "golesContra": 7
    },
    {
      "id": "tit-1925",
      "anio": 1925,
      "tipo": "Campeonato de Primera División (Campeón Invicto)",
      "asociacion": "Asociación Argentina de Football",
      "categoria": "Liga Nacional",
      "partidos": 21,
      "puntos": 38,
      "detalle": "Tercera estrella de liga obtenida de manera invicta: 18 triunfos, 2 empates y cero derrotas.",
      "figuras": "Guillermo Stábile, Cesáreo Onzari, Ángel Chiesa, Mario Fortunato.",
      "dt": "Subcomisión de Fútbol",
      "golesFavor": 51,
      "golesContra": 12
    },
    {
      "id": "tit-1928",
      "anio": 1928,
      "tipo": "Campeonato de Primera División",
      "asociacion": "Asociación Amateurs Argentina de Football",
      "categoria": "Liga Nacional",
      "partidos": 35,
      "puntos": 58,
      "detalle": "Tetracampeonato de liga. Uno de los torneos más largos y exigentes de la historia: 35 fechas, 26 triunfos y 58 puntos.",
      "figuras": "Guillermo Stábile, Ángel Chiesa, Cesáreo Onzari, Alejandro de los Santos.",
      "dt": "Subcomisión de Fútbol",
      "golesFavor": 73,
      "golesContra": 29
    },
    {
      "id": "tit-1973",
      "anio": 1973,
      "tipo": "Torneo Metropolitano 1973",
      "asociacion": "Asociación del Fútbol Argentino (AFA)",
      "categoria": "Liga Nacional",
      "partidos": 32,
      "puntos": 46,
      "detalle": "El título más recordado del fútbol argentino profesional. El Huracán de César Luis Menotti deslumbró al país con fútbol lírico, goleadas antológicas y una mística imborrable. Se consagró campeón dos fechas antes del final con 62 goles a favor.",
      "figuras": "René Houseman, Miguel Ángel Brindisi, Carlos Babington, Jorge Carrascosa, Alfio Basile, Roque Avallay, Omar Larrosa, Héctor Roganti.",
      "dt": "César Luis Menotti",
      "golesFavor": 62,
      "golesContra": 30
    },
    {
      "id": "copa-1920",
      "anio": 1920,
      "tipo": "Copa Estímulo",
      "asociacion": "Asociación Argentina de Football",
      "categoria": "Copa Nacional",
      "partidos": 5,
      "puntos": 9,
      "detalle": "Primer título de Copa Nacional oficial de la historia del club, iniciando una década hegemónica.",
      "figuras": "Ángel Chiesa, José Laguna, Ginés Paternoster.",
      "dt": "Subcomisión de Fútbol",
      "golesFavor": 11,
      "golesContra": 4
    },
    {
      "id": "copa-1922",
      "anio": 1922,
      "tipo": "Copa Dr. Carlos Ibarguren",
      "asociacion": "AFA / Ligas Provinciales",
      "categoria": "Copa Nacional",
      "partidos": 2,
      "puntos": 3,
      "detalle": "Finalísima oficial entre el Campeón de Primera de Buenos Aires y el Campeón de Rosario (Newell's Old Boys). Huracán empató 1-1 en la ida y ganó 1-0 el desempate.",
      "figuras": "Cesáreo Onzari, Ángel Chiesa, Juan Pratto.",
      "dt": "Subcomisión de Fútbol",
      "golesFavor": 2,
      "golesContra": 1
    },
    {
      "id": "copa-1925-ibarguren",
      "anio": 1925,
      "tipo": "Copa Dr. Carlos Ibarguren",
      "asociacion": "AFA / Ligas Provinciales",
      "categoria": "Copa Nacional",
      "partidos": 1,
      "puntos": 2,
      "detalle": "Enfrentó a Huracán con Tiro Federal de Rosario en cancha de Boca. El Globo se impuso con autoridad 2 a 1.",
      "figuras": "Guillermo Stábile, Cesáreo Onzari, Mario Fortunato.",
      "dt": "Subcomisión de Fútbol",
      "golesFavor": 2,
      "golesContra": 1
    },
    {
      "id": "copa-1925-honor",
      "anio": 1925,
      "tipo": "Copa de Honor Dr. Adrián Beccar Varela",
      "asociacion": "Asociación Argentina de Football",
      "categoria": "Copa Nacional",
      "partidos": 4,
      "puntos": 8,
      "detalle": "Torneo de copa oficial en el que Huracán superó sucesivamente a sus rivales para levantar su cuarta copa nacional de la década.",
      "figuras": "Cesáreo Onzari, Guillermo Stábile, Ángel Chiesa.",
      "dt": "Subcomisión de Fútbol",
      "golesFavor": 9,
      "golesContra": 2
    },
    {
      "id": "copa-1942",
      "anio": 1942,
      "tipo": "Copa Adrián Escobar",
      "asociacion": "AFA",
      "categoria": "Copa Nacional",
      "partidos": 3,
      "puntos": 6,
      "detalle": "Huracán superó a River Plate en semifinales y batió 2 a 0 a Estudiantes de La Plata en la gran final en el Gasómetro.",
      "figuras": "Herminio Masantonio, Emilio Baldonedo, Norberto Méndez, Jorge Alberti.",
      "dt": "Guillermo Stábile",
      "golesFavor": 4,
      "golesContra": 1
    },
    {
      "id": "copa-1943",
      "anio": 1943,
      "tipo": "Copa Adrián Escobar",
      "asociacion": "AFA",
      "categoria": "Copa Nacional",
      "partidos": 3,
      "puntos": 5,
      "detalle": "Bicampeonato de la Copa Escobar. El Globo retuvo la corona derrotando a Platense por tiros de esquina a favor tras igualar 0-0 reglamentario.",
      "figuras": "Norberto Méndez, Emilio Baldonedo, Jorge Alberti.",
      "dt": "Guillermo Stábile",
      "golesFavor": 3,
      "golesContra": 1
    },
    {
      "id": "copa-1944",
      "anio": 1944,
      "tipo": "Copa Competencia Británica George VI",
      "asociacion": "AFA",
      "categoria": "Copa Nacional",
      "partidos": 4,
      "puntos": 8,
      "detalle": "Copa prestigiosa donada por el Rey del Reino Unido. Huracán goleó a Vélez y Newell's, y en la finalísima en el Gasómetro derrotó a Boca Juniors 4 a 2.",
      "figuras": "Norberto Méndez, Emilio Baldonedo, Juan Carlos Salvini, Jorge Alberti.",
      "dt": "Guillermo Stábile",
      "golesFavor": 13,
      "golesContra": 6
    },
    {
      "id": "copa-2014",
      "anio": 2014,
      "tipo": "Copa Argentina 2013-14",
      "asociacion": "AFA",
      "categoria": "Copa Nacional",
      "partidos": 6,
      "puntos": 12,
      "detalle": "Campañón inolvidable. Huracán eliminó a Crucero del Norte, Banfield, Estudiantes de La Plata, Atlético de Rafaela y venció a Rosario Central por penales (5-4) en el Estadio Bicentenario de San Juan con una noche heroica de Marcos Díaz.",
      "figuras": "Marcos Díaz, Ramón Ábila, Patricio Toranzo, Federico Mancinelli, Eduardo Domínguez, Gonzalo Martínez.",
      "dt": "Néstor Apuzzo (reemplazó a Frank Kudelka)",
      "golesFavor": 9,
      "golesContra": 3
    },
    {
      "id": "supercopa-2014",
      "anio": 2014,
      "tipo": "Supercopa Argentina 2014",
      "asociacion": "AFA",
      "categoria": "Copa Nacional",
      "partidos": 1,
      "puntos": 3,
      "detalle": "Disputada el 25 de abril de 2015 en el Estadio Bicentenario de San Juan ante el River Plate de Marcelo Gallardo (campeón de la Copa Sudamericana). Huracán ganó 1 a 0 con gol de Edson Puch tras asistencia de Patricio Toranzo y un partidazo defensivo.",
      "figuras": "Edson Puch, Marcos Díaz, Patricio Toranzo, Hugo Nervo, Luciano Balbi, Federico Vismara.",
      "dt": "Néstor Apuzzo",
      "golesFavor": 1,
      "golesContra": 0
    }
  ],
  "partidos": [
    {
      "id": "part-1973-campeon",
      "fecha": "16 de septiembre de 1973",
      "torneo": "Torneo Metropolitano 1973",
      "estadio": "Estadio Tomás Adolfo Ducó",
      "rival": "Gimnasia y Esgrima La Plata",
      "resultado": "Huracán 1 - 2 Gimnasia LP (Consagración)",
      "resumen": "A pesar de la ajustada derrota ante el Lobo platense, el empate de Boca en su partido consagró a Huracán como Campeón Metropolitano 1973 dos fechas antes de la conclusión del torneo. El Palacio Ducó estalló en un festejo popular inolvidable, celebrando al equipo más lírico del fútbol nacional.",
      "alineacion": "Roganti; Chabay, Buglione, Basile, Carrascosa; Brindisi, Russo, Babington; Houseman, Avallay, Larrosa. DT: César Luis Menotti."
    },
    {
      "id": "part-2014-final-copa-arg",
      "fecha": "26 de noviembre de 2014",
      "torneo": "Final Copa Argentina 2013-14",
      "estadio": "Estadio Bicentenario, San Juan",
      "rival": "Rosario Central",
      "resultado": "Huracán 0 (5) - 0 (4) Rosario Central",
      "resumen": "Tras empatar 0-0 en los 90 minutos de una final durísima, la serie de penales coronó a Marcos Díaz como santo patrono de los penales: atajó dos disparos (a Caranta y Encina) y Federico Mancinelli convirtió el penal definitorio para cortar 41 años de sequía de títulos nacionales.",
      "alineacion": "Marcos Díaz; Federico Mancinelli, Rodrigo Erramuspe, Eduardo Domínguez, Carlos Arano; Lucas Villarruel, Federico Vismara, Patricio Toranzo; Gonzalo Martínez, Ramón Ábila, Cristian Espinoza. DT: Néstor Apuzzo."
    },
    {
      "id": "part-2015-supercopa",
      "fecha": "25 de abril de 2015",
      "torneo": "Supercopa Argentina 2014",
      "estadio": "Estadio Bicentenario, San Juan",
      "rival": "River Plate",
      "resultado": "Huracán 1 - 0 River Plate",
      "resumen": "El Globo dio el batacazo ante el River de Gallardo. A los 21 minutos del primer tiempo, Patricio Toranzo inició un contraataque punzante y habilitó al chileno Edson Puch, quien definió picando la pelota con clase sobre Marcelo Barovero.",
      "alineacion": "Marcos Díaz; Federico Mancinelli, Hugo Nervo, Eduardo Domínguez, Luciano Balbi; Lucas Villarruel, Federico Vismara, Patricio Toranzo; Edson Puch, Ramón Ábila, Cristian Espinoza. DT: Néstor Apuzzo."
    },
    {
      "id": "part-1944-clasico-5-1",
      "fecha": "13 de mayo de 1944",
      "torneo": "Campeonato Oficial de Primera División 1944",
      "estadio": "Viejo Gasómetro (cancha de San Lorenzo)",
      "rival": "San Lorenzo de Almagro",
      "resultado": "San Lorenzo 1 - 5 Huracán",
      "resumen": "Una de las mayores palizas de la historia del clásico de barrio más grande del mundo, y a domicilio. Huracán bailó a su eterno rival con goles de Masantonio, Baldonedo y un recital de fútbol.",
      "alineacion": "Barrionuevo; Alberti, Marinelli; Méndez, Giúdice, Sbarra; Unzué, Baldonedo, Masantonio, Guerra, Onzari."
    },
    {
      "id": "part-1973-clasico-4-2",
      "fecha": "9 de diciembre de 1973",
      "torneo": "Torneo Nacional 1973",
      "estadio": "Viejo Gasómetro",
      "rival": "San Lorenzo de Almagro",
      "resultado": "San Lorenzo 2 - 4 Huracán",
      "resumen": "Concierto del campeón en rodeo ajeno. Huracán liquidó a San Lorenzo con una exhibición fastuosa de René Houseman (anotó 2 goles monumentales), Brindisi y Babington.",
      "alineacion": "Roganti; Chabay, Basile, Buglione, Carrascosa; Brindisi, Russo, Babington; Houseman, Avallay, Larrosa. DT: Menotti."
    },
    {
      "id": "part-1924-gol-olimpico",
      "fecha": "2 de octubre de 1924",
      "torneo": "Amistoso Internacional de Selecciones",
      "estadio": "Sportivo Barracas",
      "rival": "Uruguay (Campeón Olímpico)",
      "resultado": "Argentina 2 - 1 Uruguay",
      "resumen": "Cesáreo Onzari, jugador de Huracán, ejecutó un córner desde la izquierda con efecto cerrado que entró directamente al arco de Andrés Mazali. Por haberse anotado ante los campeones olímpicos vigentes, la prensa popular lo bautizó para siempre 'Gol Olímpico'.",
      "alineacion": "Tesoriere; Bidoglio, Bearzotti; Médici, Vaccaro, Solari; Tarasconi, Celli, Gabino Sosa, Seoane, Cesáreo Onzari."
    },
    {
      "id": "part-2015-sudamericana-river",
      "fecha": "26 de noviembre de 2015",
      "torneo": "Semifinales Vuelta Copa Sudamericana 2015",
      "estadio": "Estadio Tomás Adolfo Ducó",
      "rival": "River Plate",
      "resultado": "Huracán 2 - 2 River Plate (Global: 3-2)",
      "resumen": "Tras haber ganado 1-0 en el Monumental con gol de Cristian Espinoza, Huracán llenó el Ducó y se puso 2-0 arriba con goles de Toranzo y Wanchope Ábila. Pese a la reacción de River, el empate 2-2 clasificó al Globo a su primera final internacional en la historia.",
      "alineacion": "Marcos Díaz; San Román, Nervo, Mancinelli, Balbi; Bogado, Vismara; Espinoza, Montenegro, Toranzo; Ramón Ábila. DT: Eduardo Domínguez."
    }
  ],
  "rivales": [
    {
      "id": "san-lorenzo",
      "nombre": "San Lorenzo de Almagro",
      "apodo": "El Ciclón / Cuervo",
      "tipo": "El Clásico de Barrio más Grande del Mundo",
      "descripcion": "El clásico porteño por excelencia: Parque Patricios contra Boedo. Una rivalidad centenaria cargada de poesía, tango, folklore y pasión vecinal única en el planeta fútbol.",
      "partidosJugados": 190,
      "victoriasHuracan": 47,
      "empates": 53,
      "victoriasRival": 87,
      "partidoMitico": "San Lorenzo 1 - Huracán 5 (1944) y Huracán 4 - San Lorenzo 2 (1973)",
      "maximoGoleadorQuemero": "Herminio Masantonio (19 goles) y Emilio Baldonedo (14 goles)",
      "escudoColor": "#002b66"
    },
    {
      "id": "boca-juniors",
      "nombre": "Boca Juniors",
      "apodo": "Xeneize",
      "tipo": "Clásico Nacional",
      "descripcion": "Duelos históricos desde los primeros años del amateurismo en la década de 1910 y 1920 disputando los campeonatos de Primera.",
      "partidosJugados": 178,
      "victoriasHuracan": 36,
      "empates": 52,
      "victoriasRival": 90,
      "partidoMitico": "Huracán 4 - Boca Juniors 2 (Final Copa Competencia Británica 1944)",
      "maximoGoleadorQuemero": "Herminio Masantonio (14 goles)",
      "escudoColor": "#001a9c"
    },
    {
      "id": "river-plate",
      "nombre": "River Plate",
      "apodo": "Millonario",
      "tipo": "Clásico Histórico",
      "descripcion": "Rivalidad de alto voltaje que incluye la consagración quemera en la Supercopa 2014 en San Juan y la eliminación copera en la Sudamericana 2015.",
      "partidosJugados": 169,
      "victoriasHuracan": 35,
      "empates": 51,
      "victoriasRival": 83,
      "partidoMitico": "Huracán 1 - 0 River Plate (Supercopa Argentina 2014 en San Juan)",
      "maximoGoleadorQuemero": "Herminio Masantonio (12 goles)",
      "escudoColor": "#e11d48"
    },
    {
      "id": "racing-club",
      "nombre": "Racing Club",
      "apodo": "La Academia",
      "tipo": "Clásico Histórico",
      "descripcion": "Duelos fundacionales de la era amateur y batallas de primer nivel en todas las décadas del profesionalismo.",
      "partidosJugados": 158,
      "victoriasHuracan": 38,
      "empates": 46,
      "victoriasRival": 74,
      "partidoMitico": "Huracán 5 - 3 Racing Club (1973 con show de Houseman y Babington)",
      "maximoGoleadorQuemero": "Emilio Baldonedo (11 goles)",
      "escudoColor": "#0284c7"
    },
    {
      "id": "independiente",
      "nombre": "Independiente",
      "apodo": "Rojo / Diablos Rojos",
      "tipo": "Clásico Histórico",
      "descripcion": "Encuentros llenos de técnica y buen fútbol. Se definieron campeonatos mano a mano como el Clausura 1994 y choques decisivos en los torneos de los años 70.",
      "partidosJugados": 162,
      "victoriasHuracan": 48,
      "empates": 37,
      "victoriasRival": 77,
      "partidoMitico": "Huracán 1 - 0 Independiente (Metropolitano 1973)",
      "maximoGoleadorQuemero": "Herminio Masantonio (13 goles)",
      "escudoColor": "#b91c1c"
    },
    {
      "id": "velez-sarsfield",
      "nombre": "Vélez Sarsfield",
      "apodo": "El Fortín",
      "tipo": "Rivalidad Porteña Moderna",
      "descripcion": "Un choque que creció notablemente desde la década de 1970 y alcanzó su pico emocional y de tensión en la recordada definición del Torneo Clausura 2009.",
      "partidosJugados": 154,
      "victoriasHuracan": 53,
      "empates": 42,
      "victoriasRival": 59,
      "partidoMitico": "Huracán 3 - 1 Vélez (Torneo Clausura 2002 con hat-trick de Rolfi Montenegro)",
      "maximoGoleadorQuemero": "Herminio Masantonio (15 goles)",
      "escudoColor": "#1e3a8a"
    }
  ],
  "camisetas": [
    {
      "id": "cam-1908",
      "anio": 1908,
      "nombre": "Camiseta Fundacional",
      "marca": "Confección Artesanal",
      "sponsor": "Sin sponsor",
      "descripcion": "Blanca inmaculada confeccionada a mano con cuello de cordones cruzados y el globo aerostático bordado en hilo carmesí sobre el corazón, inspirado en Jorge Newbery.",
      "colores": [
        "#FFFFFF",
        "#E01E2B"
      ],
      "titulos": [
        "Nacimiento Institucional en Ventana 859"
      ]
    },
    {
      "id": "cam-1921",
      "anio": 1921,
      "nombre": "Primer Campeonato de Primera División",
      "marca": "Tradicional de Época",
      "sponsor": "Sin sponsor",
      "descripcion": "Camisa de pique blanco con cuello acordonado y bolsillo al pecho. Con esta casaca Huracán logró su primera estrella en la máxima división de la AAF.",
      "colores": [
        "#FFFFFF",
        "#E01E2B"
      ],
      "titulos": [
        "Campeón Primera División 1921"
      ]
    },
    {
      "id": "cam-1922",
      "anio": 1922,
      "nombre": "Bicampeón Invicto de Primera",
      "marca": "Tradicional de Época",
      "sponsor": "Sin sponsor",
      "descripcion": "Casaca clásica de algodón pesado con cuello solapa blanco. Huracán ratificó su hegemonía coronándose bicampeón nacional.",
      "colores": [
        "#FFFFFF",
        "#E01E2B"
      ],
      "titulos": [
        "Campeón Primera División 1922",
        "Copa Dr. Carlos Ibarguren 1922"
      ]
    },
    {
      "id": "cam-1925",
      "anio": 1925,
      "nombre": "Tetracampeona Inmaculada",
      "marca": "Indumentaria de Época",
      "sponsor": "Sin sponsor",
      "descripcion": "Polo blanco con cuello y vivos rojos en los puños. Diseño icónico con el que Stábile, Chiesa y Onzari ganaron la liga de forma invicta y dos copas nacionales.",
      "colores": [
        "#FFFFFF",
        "#E01E2B"
      ],
      "titulos": [
        "Campeón Invicto Primera División 1925",
        "Copa de Honor 1925",
        "Copa Ibarguren 1925"
      ]
    },
    {
      "id": "cam-1928",
      "anio": 1928,
      "nombre": "Quinto Título de Primera División",
      "marca": "Indumentaria de Época",
      "sponsor": "Sin sponsor",
      "descripcion": "Camiseta con globo estilizado al pecho con la que el Globo ganó el torneo más largo de la historia: 35 fechas, 26 victorias y 73 goles anotados.",
      "colores": [
        "#FFFFFF",
        "#E01E2B"
      ],
      "titulos": [
        "Campeón Primera División 1928"
      ]
    },
    {
      "id": "cam-1942",
      "anio": 1942,
      "nombre": "Copa Adrián Escobar (Masantonio)",
      "marca": "Confección Nacional",
      "sponsor": "Sin sponsor",
      "descripcion": "Blanca pura con cuello camisero rojo fino. Conducida por Guillermo Stábile en el banco y Herminio Masantonio en la red, Huracán alzó la copa oficial de AFA.",
      "colores": [
        "#FFFFFF",
        "#E01E2B"
      ],
      "titulos": [
        "Copa Adrián Escobar 1942"
      ]
    },
    {
      "id": "cam-1944",
      "anio": 1944,
      "nombre": "Copa Competencia Británica",
      "marca": "Confección Nacional",
      "sponsor": "Sin sponsor",
      "descripcion": "Camiseta conmemorativa de cuello rojo en V con la que el Globo goleó a Boca Juniors 4 a 2 en la gran final disputada en el Gasómetro.",
      "colores": [
        "#FFFFFF",
        "#E01E2B"
      ],
      "titulos": [
        "Copa Competencia Británica George VI 1944",
        "Copa Adrián Escobar 1943"
      ]
    },
    {
      "id": "cam-1973",
      "anio": 1973,
      "nombre": "El Huracán de Menotti (Inmortal)",
      "marca": "Textil Parque Patricios",
      "sponsor": "Sin sponsor",
      "descripcion": "Cuello en V rojo vivo, puños anchos al tono, globo rojo central y el dorsal 73. La prenda más venerada del fútbol argentino, símbolo de belleza y poesía futbolera.",
      "colores": [
        "#FFFFFF",
        "#E01E2B"
      ],
      "titulos": [
        "Campeón Torneo Metropolitano 1973"
      ]
    },
    {
      "id": "cam-1980",
      "anio": 1980,
      "nombre": "Adidas Clásica de las Tres Tiras",
      "marca": "Adidas",
      "sponsor": "Sin sponsor",
      "descripcion": "Primera camiseta de marca internacional. Blanca con las tres tiras rojas bajando por las mangas, cuello polo rojo y el trébol de Adidas junto al globo.",
      "colores": [
        "#FFFFFF",
        "#E01E2B"
      ],
      "titulos": [
        "Semifinalista Torneo Nacional 1980"
      ]
    },
    {
      "id": "cam-1990",
      "anio": 1990,
      "nombre": "Puma - Ascenso 1990 (Turco Mohamed)",
      "marca": "Puma",
      "sponsor": "Medicus",
      "descripcion": "Diseño icónico con hombreras geométricas rojas, logotipo de Puma y la legendaria publicidad de MEDICUS en el pecho. Mítica consagración con Babington DT.",
      "colores": [
        "#FFFFFF",
        "#E01E2B",
        "#0A1931"
      ],
      "titulos": [
        "Campeón Nacional B 1989-90 (Ascenso)"
      ]
    },
    {
      "id": "cam-1996",
      "anio": 1996,
      "nombre": "Umbro Vivos Geométricos",
      "marca": "Umbro",
      "sponsor": "Banco Patricios",
      "descripcion": "Diseño noventero con texturas jacquard sobre el blanco, cuello polo bicolor rojo y negro y sponsor histórico del Banco Patricios.",
      "colores": [
        "#FFFFFF",
        "#E01E2B",
        "#1E293B"
      ],
      "titulos": [
        "Subcampeón Clausura / Torneo Internacional"
      ]
    },
    {
      "id": "cam-1998",
      "anio": 1998,
      "nombre": "Envión Rayas Horizontales",
      "marca": "Envión",
      "sponsor": "OCA",
      "descripcion": "Modelo alternativo muy recordado con dobles franjas horizontales rojas en el pecho, cuello redondeado y el sponsor OCA.",
      "colores": [
        "#FFFFFF",
        "#E01E2B"
      ],
      "titulos": [
        "Participación en Primera División"
      ]
    },
    {
      "id": "cam-2000",
      "anio": 2000,
      "nombre": "Signia - Campeón Récord Nacional B",
      "marca": "Signia",
      "sponsor": "Liderar Seguros",
      "descripcion": "Camiseta del ascenso con récord histórico de puntos de la mano del Inglés Babington. Cuello en V rojo con detalles laterales grises y vivos rojos.",
      "colores": [
        "#FFFFFF",
        "#E01E2B"
      ],
      "titulos": [
        "Campeón Nacional B 1999-2000"
      ]
    },
    {
      "id": "cam-2007",
      "anio": 2007,
      "nombre": "Kappa - El Ascenso en Mendoza",
      "marca": "Kappa",
      "sponsor": "La Nueva Seguros",
      "descripcion": "Camiseta ajustada estilo Kombat de Kappa con el clásico triángulo amarillo de La Nueva Seguros al pecho. El regreso a Primera con Antonio Mohamed.",
      "colores": [
        "#FFFFFF",
        "#E01E2B",
        "#FACC15"
      ],
      "titulos": [
        "Ascenso a Primera División en Mendoza 2007"
      ]
    },
    {
      "id": "cam-2009",
      "anio": 2009,
      "nombre": "Los Ángeles de Cappa (Tiki-Tiki)",
      "marca": "Kappa",
      "sponsor": "Banco Ciudad",
      "descripcion": "Diseño limpio y elegante con el globo bordado de gran tamaño, tela elástica y sponsor Banco Ciudad. Vistió la galera y el bastón de Pastore, Bolatti y Defederico.",
      "colores": [
        "#FFFFFF",
        "#E01E2B"
      ],
      "titulos": [
        "Subcampeón Torneo Clausura 2009"
      ]
    },
    {
      "id": "cam-2014",
      "anio": 2014,
      "nombre": "Joma - Campeón Copa Argentina",
      "marca": "Joma",
      "sponsor": "Banco Ciudad",
      "descripcion": "Detalles rojos estilizados en hombros y mangas, cuello polo con botones. Con esta casaca Marcos Díaz y Wanchope Ábila cortaron 41 años sin títulos en San Juan.",
      "colores": [
        "#FFFFFF",
        "#E01E2B"
      ],
      "titulos": [
        "Campeón Copa Argentina 2013-14",
        "Ascenso a Primera 2014"
      ]
    },
    {
      "id": "cam-2015",
      "anio": 2015,
      "nombre": "TBS - Campeón Supercopa vs River",
      "marca": "TBS",
      "sponsor": "Banco Ciudad",
      "descripcion": "Con vivos rojos y cuello redondo moderno, levantó la Supercopa Argentina derrotando 1-0 al River de Gallardo y disputó la final de la Copa Sudamericana.",
      "colores": [
        "#FFFFFF",
        "#E01E2B"
      ],
      "titulos": [
        "Campeón Supercopa Argentina 2014",
        "Finalista Copa Sudamericana 2015"
      ]
    },
    {
      "id": "cam-2024",
      "anio": "2024-2026",
      "nombre": "Kappa - Edición Contemporánea",
      "marca": "Kappa",
      "sponsor": "Decur",
      "descripcion": "Tecnología Kombat Pro con microperforaciones láser, escudo del globo en termofusión con relieve al tacto y tipografía dorsal moderna que rinde homenaje a Parque Patricios.",
      "colores": [
        "#FFFFFF",
        "#E01E2B"
      ],
      "titulos": [
        "Campañas Protagónicas en Liga Profesional"
      ]
    }
  ],
  "efemerides": [
    {
      "mes": 1,
      "dia": 3,
      "titulo": "Nacimiento de Alberto 'Toscano' Rendo (1940)",
      "tipo": "Ídolo",
      "descripcion": "Nace en Parque Patricios uno de los volantes más guapos, talentosos y queridos de la historia quemera.",
      "icono": "star"
    },
    {
      "mes": 1,
      "dia": 5,
      "titulo": "Nacimiento de Norberto 'Tucho' Méndez (1923)",
      "tipo": "Ídolo",
      "descripcion": "Llega al mundo el virtuoso tricampeón de América y máximo goleador histórico de la Copa América con 17 tantos.",
      "icono": "star"
    },
    {
      "mes": 1,
      "dia": 17,
      "titulo": "Nacimiento de Guillermo Stábile (1905)",
      "tipo": "Ídolo",
      "descripcion": "Nace 'El Filtrador', tetracampeón con el Globo y primer goleador de la historia de los Mundiales FIFA (Uruguay 1930).",
      "icono": "star"
    },
    {
      "mes": 1,
      "dia": 23,
      "titulo": "Huracán Campeón de Primera División 1921",
      "tipo": "Título Oficial",
      "descripcion": "El Globo se consagra campeón de la máxima categoría por primera vez en su gloriosa historia tras aplastar 14 partidos.",
      "icono": "trophy"
    },
    {
      "mes": 2,
      "dia": 1,
      "titulo": "Nacimiento de Cesáreo Onzari (1903)",
      "tipo": "Hito Histórico",
      "descripcion": "Nace el célebre puntero izquierdo tetracampeón con Huracán y autor del primer 'Gol Olímpico' de la historia del fútbol.",
      "icono": "flag"
    },
    {
      "mes": 2,
      "dia": 5,
      "titulo": "Nacimiento de Marcos Díaz (1986)",
      "tipo": "Ídolo",
      "descripcion": "Nace en Santa Fe el arquero héroe de las consagraciones de la Copa Argentina y Supercopa Argentina en San Juan.",
      "icono": "shield"
    },
    {
      "mes": 2,
      "dia": 20,
      "titulo": "Nacimiento de Hugo Tedesco (1947)",
      "tipo": "Jugador",
      "descripcion": "Nace el elegante volante ofensivo que disputó más de 160 partidos oficiales con la camiseta del Globo.",
      "icono": "user"
    },
    {
      "mes": 2,
      "dia": 24,
      "titulo": "Clásico de Verano: Huracán 3 - San Lorenzo 1",
      "tipo": "Partido Mítico",
      "descripcion": "Brillante victoria del Globo en el clásico de barrio disputado en Mar del Plata ante una multitud.",
      "icono": "trophy"
    },
    {
      "mes": 3,
      "dia": 19,
      "titulo": "Nacimiento de Patricio Toranzo (1982)",
      "tipo": "Ídolo",
      "descripcion": "Llega al mundo el talentoso número 10, figura de Los Ángeles de Cappa y bicampeón en las copas de 2014.",
      "icono": "star"
    },
    {
      "mes": 3,
      "dia": 19,
      "titulo": "Iluminación Nocturna del Palacio Ducó (1949)",
      "tipo": "Infraestructura",
      "descripcion": "Se inauguran las monumentales torres de iluminación artificial del Estadio Tomás Adolfo Ducó con un amistoso.",
      "icono": "flag"
    },
    {
      "mes": 3,
      "dia": 22,
      "titulo": "Paso a la Inmortalidad de René Houseman (2018)",
      "tipo": "Homenaje",
      "descripcion": "El fútbol mundial despide con lágrimas al 'Hueso', genio de la gambeta, campeón con Huracán en 1973 y del Mundo en 1978.",
      "icono": "heart"
    },
    {
      "mes": 3,
      "dia": 28,
      "titulo": "Nacimiento de Daniel 'Rolfi' Montenegro (1979)",
      "tipo": "Ídolo",
      "descripcion": "Nace el enganche y capitán formado en La Quemita que brilló con la divisa quemera en cuatro etapas distintas.",
      "icono": "star"
    },
    {
      "mes": 4,
      "dia": 2,
      "titulo": "Nacimiento de Antonio 'Turco' Mohamed (1970)",
      "tipo": "Ídolo",
      "descripcion": "Nace en Villa Soldati el delantero fanático del Globo que ascendió como jugador en 1990 y como DT en 2007.",
      "icono": "star"
    },
    {
      "mes": 4,
      "dia": 17,
      "titulo": "Nacimiento de Rodrigo Echeverría (1995)",
      "tipo": "Jugador Actual",
      "descripcion": "Nace el mediocampista central y líder defensivo del primer equipo y la Selección de Chile.",
      "icono": "user"
    },
    {
      "mes": 4,
      "dia": 22,
      "titulo": "Huracán Bicampeón de Primera División 1922",
      "tipo": "Título Oficial",
      "descripcion": "Segunda estrella consecutiva en Primera División, ratificando su estatus de rey indiscutido del fútbol argentino.",
      "icono": "trophy"
    },
    {
      "mes": 4,
      "dia": 25,
      "titulo": "Huracán Campeón de la Supercopa Argentina 2014 (2015)",
      "tipo": "Título Oficial",
      "descripcion": "En San Juan, Huracán vence 1-0 al River Plate de Marcelo Gallardo con gol de Edson Puch y alza otra copa nacional de AFA.",
      "icono": "trophy"
    },
    {
      "mes": 4,
      "dia": 30,
      "titulo": "Nacimiento de Claudio Morresi (1962)",
      "tipo": "Ídolo",
      "descripcion": "Nace el habilidoso volante número 10 símbolo de la institución en la década de 1980.",
      "icono": "star"
    },
    {
      "mes": 5,
      "dia": 1,
      "titulo": "Día del Trabajador y Raíces de La Quema",
      "tipo": "Identidad",
      "descripcion": "Conmemoración del origen obrero y popular de Parque Patricios y el legendario vaciadero que forjó el apodo 'Quemeros'.",
      "icono": "award"
    },
    {
      "mes": 5,
      "dia": 5,
      "titulo": "Paso a la Inmortalidad de César Luis Menotti (2024)",
      "tipo": "Homenaje",
      "descripcion": "Despedida del prócer máximo que transformó el fútbol argentino con el Huracán Campeón de 1973 y la Selección 1978.",
      "icono": "heart"
    },
    {
      "mes": 5,
      "dia": 13,
      "titulo": "San Lorenzo 1 - Huracán 5 en el Gasómetro (1944)",
      "tipo": "Partido Mítico",
      "descripcion": "Histórica paliza y goleada memorable a San Lorenzo a domicilio con show de Masantonio y Baldonedo.",
      "icono": "trophy"
    },
    {
      "mes": 5,
      "dia": 17,
      "titulo": "El Palacio Ducó declarado Monumento Histórico (2007)",
      "tipo": "Infraestructura",
      "descripcion": "La Legislatura de la Ciudad de Buenos Aires declara al Estadio Tomás Adolfo Ducó de Interés Histórico y Cultural (Ley 2516).",
      "icono": "flag"
    },
    {
      "mes": 5,
      "dia": 18,
      "titulo": "Nacimiento de Jorge Hugo Alberti (1912)",
      "tipo": "Ídolo",
      "descripcion": "Nace el hombre récord de presencias en Huracán: 393 partidos disputados entre 1930 y 1947.",
      "icono": "star"
    },
    {
      "mes": 5,
      "dia": 19,
      "titulo": "Huracán Campeón del Nacional B 1990",
      "tipo": "Ascenso",
      "descripcion": "El Globo de Carlos Babington golea a Los Andes y festeja el ansiado regreso a Primera con un Ducó desbordante.",
      "icono": "award"
    },
    {
      "mes": 5,
      "dia": 19,
      "titulo": "Huracán 4 - River Plate 0 (Clausura 2009)",
      "tipo": "Partido Mítico",
      "descripcion": "Cátedra de fútbol de Los Ángeles de Cappa en el Ducó con dos goles de Pastore, uno de Bolatti y Toranzo.",
      "icono": "sparkles"
    },
    {
      "mes": 5,
      "dia": 22,
      "titulo": "Paso a la Inmortalidad de Oscar Bonavena (1976)",
      "tipo": "Homenaje",
      "descripcion": "Trágico adiós al ídolo máximo de Parque Patricios. Más de 150.000 personas lo despidieron en el Luna Park y el Ducó.",
      "icono": "heart"
    },
    {
      "mes": 5,
      "dia": 31,
      "titulo": "Paso a la Inmortalidad de Emilio Baldonedo (1999)",
      "tipo": "Homenaje",
      "descripcion": "Fallece a los 82 años el tercer goleador histórico de Huracán con 165 conquistas oficiales.",
      "icono": "heart"
    },
    {
      "mes": 6,
      "dia": 20,
      "titulo": "Nacimiento de Javier Pastore (1989)",
      "tipo": "Ídolo",
      "descripcion": "Nace en Córdoba 'El Flaco', dueño de una magia inigualable en el Huracán de Cappa del 2009.",
      "icono": "star"
    },
    {
      "mes": 6,
      "dia": 22,
      "titulo": "Paso a la Inmortalidad de Norberto 'Tucho' Méndez (1998)",
      "tipo": "Homenaje",
      "descripcion": "Parque Patricios despide a uno de los futbolistas más elegantes y criollos que vistieron la camiseta blanca.",
      "icono": "heart"
    },
    {
      "mes": 6,
      "dia": 23,
      "titulo": "Nacimiento de Emilio Baldonedo (1916)",
      "tipo": "Ídolo",
      "descripcion": "Nace el legendario delantero que marcó una época dorada en la delantera de Huracán y la Selección.",
      "icono": "star"
    },
    {
      "mes": 6,
      "dia": 25,
      "titulo": "Houseman y Larrosa Campeones del Mundo (1978)",
      "tipo": "Hito Mundial",
      "descripcion": "Dos estandartes del Huracán del 73 se consagran campeones de la Copa Mundial de la FIFA con la Selección Argentina.",
      "icono": "trophy"
    },
    {
      "mes": 6,
      "dia": 30,
      "titulo": "Huracán Campeón de Primera División 1928",
      "tipo": "Título Oficial",
      "descripcion": "Quinto título nacional de liga de la institución tras un maratón de 35 partidos y 73 goles a favor.",
      "icono": "trophy"
    },
    {
      "mes": 7,
      "dia": 19,
      "titulo": "Nacimiento de René Orlando Houseman (1953)",
      "tipo": "Ídolo",
      "descripcion": "Llega al mundo en La Banda, Santiago del Estero, el wing derecho más genial y entrañable del fútbol argentino.",
      "icono": "star"
    },
    {
      "mes": 7,
      "dia": 28,
      "titulo": "Ascenso a Primera División en Mendoza (2007)",
      "tipo": "Ascenso",
      "descripcion": "Huracán vence 3-2 en el global a Godoy Cruz en el Malvinas Argentinas con el Turco Mohamed en el banco.",
      "icono": "award"
    },
    {
      "mes": 8,
      "dia": 5,
      "titulo": "Nacimiento de Herminio Masantonio (1910)",
      "tipo": "Ídolo Máximo",
      "descripcion": "Nace el máximo goleador histórico del Club Atlético Huracán con 254 goles oficiales. Símbolo eterno de guapeza y orgullo.",
      "icono": "star"
    },
    {
      "mes": 8,
      "dia": 10,
      "titulo": "Inauguración Deportiva del Estadio Tomás A. Ducó (1947)",
      "tipo": "Infraestructura",
      "descripcion": "El Palacio abre sus puertas para vencer 4-3 a Boca Juniors ante más de 80.000 hinchas en una fiesta popular.",
      "icono": "flag"
    },
    {
      "mes": 8,
      "dia": 15,
      "titulo": "Nacimiento de Jorge 'El Lobo' Carrascosa (1948)",
      "tipo": "Ídolo",
      "descripcion": "Nace el capitán indiscutido y lateral izquierdo de la máquina campeona de Menotti en 1973.",
      "icono": "star"
    },
    {
      "mes": 8,
      "dia": 20,
      "titulo": "Campeón Récord de la Primera B Nacional 2000",
      "tipo": "Ascenso",
      "descripcion": "Huracán se corona campeón absoluto del Nacional B 1999-2000 con un récord imbatible de puntos de la mano de Babington.",
      "icono": "award"
    },
    {
      "mes": 8,
      "dia": 22,
      "titulo": "Huracán Campeón Invicto de Primera División 1925",
      "tipo": "Título Oficial",
      "descripcion": "Tercera estrella de liga ganada sin conocer la derrota: 18 victorias y 2 empates con Stábile y Onzari.",
      "icono": "trophy"
    },
    {
      "mes": 9,
      "dia": 1,
      "titulo": "Nacimiento de Eduardo Domínguez (1978)",
      "tipo": "Ídolo / DT",
      "descripcion": "Nace 'El Barba', capitán campeón de la Copa Argentina y la Supercopa, y DT finalista de la Copa Sudamericana 2015.",
      "icono": "star"
    },
    {
      "mes": 9,
      "dia": 5,
      "titulo": "Nacimiento de Walter Mazzantti (1996)",
      "tipo": "Jugador Actual",
      "descripcion": "Nace el puntero derecho autor de goles memorables en el Palacio Ducó ante los grandes.",
      "icono": "user"
    },
    {
      "mes": 9,
      "dia": 11,
      "titulo": "Paso a la Inmortalidad de Herminio Masantonio (1960)",
      "tipo": "Homenaje",
      "descripcion": "El pueblo quemero despide a su más grande gladiador a los 50 años. Su monumento en la sede perpetúa su figura.",
      "icono": "heart"
    },
    {
      "mes": 9,
      "dia": 16,
      "titulo": "Huracán Campeón Torneo Metropolitano 1973",
      "tipo": "Título Oficial",
      "descripcion": "El equipo de César Luis Menotti se consagra Campeón Metropolitano maravillando al mundo del fútbol con un juego lírico insuperable.",
      "icono": "trophy"
    },
    {
      "mes": 9,
      "dia": 19,
      "titulo": "Huracán 2 - River Plate 1 en el Palacio Ducó (2026)",
      "tipo": "Partido Reciente",
      "descripcion": "Gran victoria quemera en el Palacio Ducó con una actuación táctica sobresaliente y goles de Mazzantti y Ábila.",
      "icono": "trophy"
    },
    {
      "mes": 9,
      "dia": 20,
      "titulo": "Nacimiento de Carlos Alberto Babington (1949)",
      "tipo": "Ídolo",
      "descripcion": "Nace a cuadras de la sede 'El Inglés', conductor zurdo del campeón 73, DT campeón del ascenso y Presidente.",
      "icono": "star"
    },
    {
      "mes": 9,
      "dia": 21,
      "titulo": "Día del Estudiante y la Primavera en La Quemita",
      "tipo": "Comunidad",
      "descripcion": "Festejo tradicional de las familias quemeras en el complejo deportivo de 14 hectáreas de Mariano Acosta.",
      "icono": "sparkles"
    },
    {
      "mes": 9,
      "dia": 25,
      "titulo": "Nacimiento de Oscar 'Ringo' Bonavena (1942)",
      "tipo": "Ídolo Máximo",
      "descripcion": "Nace en Parque Patricios el peso pesado que desafió a Muhammad Ali y llevó los colores del Globo a la gloria mundial.",
      "icono": "star"
    },
    {
      "mes": 10,
      "dia": 2,
      "titulo": "Primer 'Gol Olímpico' de la Historia por Cesáreo Onzari (1924)",
      "tipo": "Hito Mundial",
      "descripcion": "Onzari anota directo de córner ante Uruguay en cancha de Barracas, bautizando para siempre dicha jugada.",
      "icono": "sparkles"
    },
    {
      "mes": 10,
      "dia": 8,
      "titulo": "Nacimiento de Miguel Ángel Brindisi (1950)",
      "tipo": "Ídolo",
      "descripcion": "Nace el volante total del Huracán del 73, Balón de Plata de Sudamérica y segundo artillero histórico del club (171 goles).",
      "icono": "star"
    },
    {
      "mes": 10,
      "dia": 12,
      "titulo": "Huracán Campeón Sudamericano de Hockey sobre Patines",
      "tipo": "Otras Disciplinas",
      "descripcion": "El Globo se consagra en la cima del continente conquistando el Campeonato Sudamericano de Clubes de Hockey.",
      "icono": "award"
    },
    {
      "mes": 10,
      "dia": 14,
      "titulo": "Nacimiento de Ramón 'Wanchope' Ábila (1989)",
      "tipo": "Ídolo",
      "descripcion": "Nace el delantero goleador de la Copa Argentina 2014, Supercopa 2015 y top 10 artillero histórico de Huracán.",
      "icono": "star"
    },
    {
      "mes": 10,
      "dia": 28,
      "titulo": "Recuperación del Predio Menotti (ex Gas del Estado) (2023)",
      "tipo": "Infraestructura",
      "descripcion": "Se oficializa la histórica cesión de los terrenos frente al Palacio Ducó para la expansión deportiva integral del club.",
      "icono": "flag"
    },
    {
      "mes": 1,
      "dia": 1,
      "titulo": "Fundación del Club Atlético Huracán (1908)",
      "tipo": "Aniversario Fundacional",
      "descripcion": "Asamblea fundacional en Ventana 859. Nace la institución más gloriosa y representativa del sur de Buenos Aires.",
      "icono": "flag"
    },
    {
      "mes": 11,
      "dia": 1,
      "titulo": "Nacimiento de Alfio 'Coco' Basile (1943)",
      "tipo": "Ídolo",
      "descripcion": "Nace el mariscal de la zaga central del Huracán Campeón Metropolitano 1973.",
      "icono": "star"
    },
    {
      "mes": 11,
      "dia": 9,
      "titulo": "Huracán 4 - Boca Juniors 1 (Apertura 1994)",
      "tipo": "Partido Mítico",
      "descripcion": "Contundente goleada del Globo sobre Boca en el Tomás A. Ducó con un recital futbolístico quemero.",
      "icono": "trophy"
    },
    {
      "mes": 11,
      "dia": 18,
      "titulo": "Nacimiento de Omar Larrosa (1947)",
      "tipo": "Ídolo",
      "descripcion": "Nace el volante izquierdo titular indiscutido del campeón de 1973 y Campeón del Mundo 1978.",
      "icono": "star"
    },
    {
      "mes": 11,
      "dia": 26,
      "titulo": "Huracán Campeón Copa Argentina 2013-14 (2014)",
      "tipo": "Título Oficial",
      "descripcion": "En San Juan, Huracán vence por penales a Rosario Central con Marcos Díaz héroe y corta 41 años sin títulos nacionales.",
      "icono": "trophy"
    },
    {
      "mes": 11,
      "dia": 26,
      "titulo": "Huracán a la Final de la Copa Sudamericana (2015)",
      "tipo": "Hito Internacional",
      "descripcion": "Empate 2-2 en el Ducó ante River Plate (3-2 global) para clasificar a la primera final internacional de su historia.",
      "icono": "sparkles"
    },
    {
      "mes": 12,
      "dia": 1,
      "titulo": "Huracán Campeón Copa Adrián Escobar 1942",
      "tipo": "Título Oficial",
      "descripcion": "Huracán vence 2-0 a Estudiantes de La Plata en el Gasómetro y levanta una nueva copa oficial de AFA.",
      "icono": "trophy"
    },
    {
      "mes": 12,
      "dia": 5,
      "titulo": "Huracán Bicampeón Copa Adrián Escobar 1943",
      "tipo": "Título Oficial",
      "descripcion": "Segunda Copa Escobar consecutiva para el primer equipo quemero capitaneado por Alberti y Masantonio.",
      "icono": "trophy"
    },
    {
      "mes": 12,
      "dia": 7,
      "titulo": "Oscar Bonavena vs Muhammad Ali en el Madison (1970)",
      "tipo": "Hito Mundial",
      "descripcion": "Ringo Bonavena conmueve al planeta en Nueva York peleando 15 rounds históricos de igual a igual ante Ali.",
      "icono": "trophy"
    },
    {
      "mes": 12,
      "dia": 9,
      "titulo": "San Lorenzo 2 - Huracán 4 en Boedo (1973)",
      "tipo": "Partido Mítico",
      "descripcion": "Concierto de fútbol lírico del campeón 73 a domicilio con dos golazos monumentales de René Houseman.",
      "icono": "trophy"
    },
    {
      "mes": 12,
      "dia": 9,
      "titulo": "Huracán Campeón Copa Competencia Británica 1944",
      "tipo": "Título Oficial",
      "descripcion": "Final memorable: Huracán vence 4-2 a Boca Juniors y conquista el prestigioso trofeo internacional George VI.",
      "icono": "trophy"
    },
    {
      "mes": 12,
      "dia": 14,
      "titulo": "Nacimiento de Roque Avallay (1945)",
      "tipo": "Ídolo",
      "descripcion": "Nace el centrodelantero y goleador del Huracán Campeón Metropolitano 1973.",
      "icono": "star"
    },
    {
      "mes": 12,
      "dia": 14,
      "titulo": "Desempate por el Ascenso: Huracán 4 - Atl. Tucumán 1 (2014)",
      "tipo": "Ascenso",
      "descripcion": "En Mendoza, Huracán golea en el alargue y sella su regreso definitivo a la máxima categoría de AFA.",
      "icono": "award"
    },
    {
      "mes": 12,
      "dia": 18,
      "titulo": "Huracán Campeón del Torneo Metropolitano de Futsal",
      "tipo": "Otras Disciplinas",
      "descripcion": "El plantel de Futsal AFA de Huracán se corona campeón metropolitano de Primera División.",
      "icono": "award"
    },
    {
      "mes": 12,
      "dia": 21,
      "titulo": "Nacimiento de Ignacio Pussetto (1995)",
      "tipo": "Ídolo",
      "descripcion": "Nace el delantero y goleador referente que lideró la salvación de 2023 y brilló en la Liga Profesional.",
      "icono": "star"
    },
    {
      "mes": 12,
      "dia": 25,
      "titulo": "Jorge Newbery cruza el Río de la Plata en 'El Huracán' (1909)",
      "tipo": "Bautismo del Globo",
      "descripcion": "El Ing. Newbery vuela desde Belgrano a Conchillas (Uruguay). Su hazaña inspiró la insignia definitiva del club.",
      "icono": "sparkles"
    },
    {
      "mes": 12,
      "dia": 26,
      "titulo": "Paso a la Inmortalidad de Guillermo Stábile (1966)",
      "tipo": "Homenaje",
      "descripcion": "Fallece a los 61 años el primer goleador de los Mundiales FIFA, tetracampeón y prócer eterno de Huracán.",
      "icono": "heart"
    }
  ],
  "trivia": [
    {
      "id": 1,
      "pregunta": "¿En qué fecha se fundó oficialmente el Club Atlético Huracán?",
      "opciones": [
        "1 de noviembre de 1908",
        "25 de mayo de 1901",
        "12 de octubre de 1913",
        "15 de agosto de 1904"
      ],
      "correcta": 0,
      "explicacion": "El club se fundó el 1 de noviembre de 1908 en una asamblea realizada en la calle Ventana 859.",
      "dificultad": "Fácil"
    },
    {
      "id": 2,
      "pregunta": "¿Qué nombre informal tuvo el club antes de su acta de fundación definitiva?",
      "opciones": [
        "Verde Esperanza y Nunca Pierde",
        "Los Bohemios del Sur",
        "Defensores de Patricios",
        "Estrella de Pompeya"
      ],
      "correcta": 0,
      "explicacion": "Antes de la fundación formal de 1908, los jóvenes jugaban bajo el nombre informal 'Verde Esperanza y Nunca Pierde'.",
      "dificultad": "Media"
    },
    {
      "id": 3,
      "pregunta": "¿Quién inspiró el símbolo del globo aerostático como insignia del club?",
      "opciones": [
        "El Ingeniero Jorge Newbery",
        "Alberto Santos Dumont",
        "Tomás Adolfo Ducó",
        "Carlos Alberto Caimi"
      ],
      "correcta": 0,
      "explicacion": "El Ing. Jorge Newbery realizó su histórica travesía en el globo 'El Huracán' en diciembre de 1909 y autorizó al club a usarlo como divisa.",
      "dificultad": "Fácil"
    },
    {
      "id": 4,
      "pregunta": "¿Quién fue el primer presidente de la historia de Huracán?",
      "opciones": [
        "Carlos Alberto Caimi",
        "José Laguna",
        "Aldo Cantoni",
        "Tomás Adolfo Ducó"
      ],
      "correcta": 0,
      "explicacion": "Carlos Alberto Caimi fue elegido primer presidente en la asamblea de fundación en 1908.",
      "dificultad": "Media"
    },
    {
      "id": 5,
      "pregunta": "¿Por qué se le llama históricamente 'Quemeros' a los hinchas de Huracán?",
      "opciones": [
        "Por el vaciadero municipal de basura que funcionaba en la zona ('La Quema')",
        "Por la quema de pastizales en Pompeya",
        "Por una caldera en la primera sede",
        "Por el calor de la tribuna"
      ],
      "correcta": 0,
      "explicacion": "En los límites de Parque Patricios funcionaba el vaciadero municipal de basura donde se incineraban residuos, conocido popularmente como 'La Quema'.",
      "dificultad": "Fácil"
    },
    {
      "id": 6,
      "pregunta": "¿En qué año logró Huracán su ascenso a Primera División?",
      "opciones": [
        "1913",
        "1910",
        "1919",
        "1921"
      ],
      "correcta": 0,
      "explicacion": "Huracán ascendió a Primera División en 1913 tras vencer a Gimnasia y Esgrima de Flores.",
      "dificultad": "Media"
    },
    {
      "id": 7,
      "pregunta": "¿Qué rol institucional tuvo Jorge Newbery en el Club Atlético Huracán?",
      "opciones": [
        "Primer Presidente Honorario",
        "Director Técnico",
        "Arquero fundador",
        "Secretario General"
      ],
      "correcta": 0,
      "explicacion": "Tras conceder el permiso para usar el globo aerostático como emblema, el Ing. Jorge Newbery fue nombrado Presidente Honorario del club.",
      "dificultad": "Media"
    },
    {
      "id": 8,
      "pregunta": "¿En qué dirección de Parque Patricios se fundó Huracán?",
      "opciones": [
        "Ventana 859",
        "Av. Caseros 3159",
        "Amancio Alcorta 2570",
        "Chiclana 2800"
      ],
      "correcta": 0,
      "explicacion": "El acta fundacional se firmó en la casa de la calle Ventana 859, en Nueva Pompeya / Parque Patricios.",
      "dificultad": "Difícil"
    },
    {
      "id": 9,
      "pregunta": "¿Quién compuso la música del Himno Oficial del Club Atlético Huracán?",
      "opciones": [
        "Vicente Greco",
        "Carlos Gardel",
        "Aníbal Troilo",
        "Homero Manzi"
      ],
      "correcta": 0,
      "explicacion": "El tango himno de Huracán fue compuesto por el célebre músico Vicente Greco con letra de Alfredo Rovira.",
      "dificultad": "Difícil"
    },
    {
      "id": 10,
      "pregunta": "¿En qué fecha voló Jorge Newbery en el globo 'El Huracán' cruzando el Río de la Plata?",
      "opciones": [
        "25 de diciembre de 1909",
        "1 de enero de 1910",
        "9 de julio de 1908",
        "24 de mayo de 1911"
      ],
      "correcta": 0,
      "explicacion": "El 25 de diciembre de 1909, Newbery despegó de Belgrano y aterrizó en Conchillas (Uruguay), marcando un hito en la aviación sudamericana.",
      "dificultad": "Difícil"
    },
    {
      "id": 11,
      "pregunta": "¿De qué color era la primera camiseta usada por los fundadores antes de adoptar la blanca?",
      "opciones": [
        "Verde",
        "Azul y blanca",
        "Negra a rayas",
        "Roja lisa"
      ],
      "correcta": 0,
      "explicacion": "Al llamarse inicialmente 'Verde Esperanza y Nunca Pierde', utilizaron camisetas verdes hasta adoptar la blanca con el globo rojo.",
      "dificultad": "Media"
    },
    {
      "id": 12,
      "pregunta": "¿Quién fue el goleador que además fue presidente de Huracán en 1911 y 1920?",
      "opciones": [
        "José Laguna",
        "Cesáreo Onzari",
        "Ángel Chiesa",
        "Ernesto Dell'Isola"
      ],
      "correcta": 0,
      "explicacion": "José Laguna ('El Negro') fue delantero estelar, presidente en dos períodos y primer goleador de la Selección Argentina en Copa América.",
      "dificultad": "Media"
    },
    {
      "id": 13,
      "pregunta": "¿Cuántos campeonatos de Primera División tiene oficialmente Huracán en su historia?",
      "opciones": [
        "5",
        "3",
        "7",
        "4"
      ],
      "correcta": 0,
      "explicacion": "Huracán ganó 5 campeonatos de Primera División: 1921, 1922, 1925, 1928 y el Metropolitano 1973.",
      "dificultad": "Fácil"
    },
    {
      "id": 14,
      "pregunta": "¿Cuántos títulos oficiales de AFA en total (ligas + copas nacionales) ostenta Huracán?",
      "opciones": [
        "13",
        "10",
        "15",
        "8"
      ],
      "correcta": 0,
      "explicacion": "Huracán cuenta con 13 títulos oficiales de máxima categoría reconocidos por AFA (5 Ligas de Primera División y 8 Copas Nacionales).",
      "dificultad": "Fácil"
    },
    {
      "id": 15,
      "pregunta": "¿En qué año ganó Huracán su primer campeonato de Primera División?",
      "opciones": [
        "1921",
        "1914",
        "1925",
        "1928"
      ],
      "correcta": 0,
      "explicacion": "En 1921, el Globo se coronó campeón de Primera División de la Asociación Argentina de Football.",
      "dificultad": "Fácil"
    },
    {
      "id": 16,
      "pregunta": "¿Cuál de estos campeonatos de Primera División fue obtenido por Huracán de manera invicta?",
      "opciones": [
        "1925",
        "1928",
        "1973",
        "1921"
      ],
      "correcta": 0,
      "explicacion": "En 1925, Huracán fue campeón invicto con 18 triunfos, 2 empates y cero derrotas.",
      "dificultad": "Media"
    },
    {
      "id": 17,
      "pregunta": "¿Cuántas fechas duró el extenuante campeonato de Primera División que Huracán ganó en 1928?",
      "opciones": [
        "35 fechas",
        "20 fechas",
        "18 fechas",
        "30 fechas"
      ],
      "correcta": 0,
      "explicacion": "El torneo de 1928 tuvo 35 fechas; Huracán ganó 26 encuentros y sumó 58 puntos con 73 goles a favor.",
      "dificultad": "Difícil"
    },
    {
      "id": 18,
      "pregunta": "¿Qué director técnico consagró a Huracán campeón en el recordado Torneo Metropolitano 1973?",
      "opciones": [
        "César Luis Menotti",
        "Ángel Cappa",
        "Guillermo Stábile",
        "Alfio Basile"
      ],
      "correcta": 0,
      "explicacion": "César Luis Menotti condujo al inolvidable Huracán del 73, considerado uno de los mejores equipos de la historia del fútbol mundial.",
      "dificultad": "Fácil"
    },
    {
      "id": 19,
      "pregunta": "¿Con cuántas fechas de anticipación se consagró campeón el Huracán de Menotti en 1973?",
      "opciones": [
        "2 fechas antes",
        "En la última fecha",
        "1 fecha antes",
        "3 fechas antes"
      ],
      "correcta": 0,
      "explicacion": "Huracán se coronó campeón dos fechas antes de la conclusión del certamen.",
      "dificultad": "Media"
    },
    {
      "id": 20,
      "pregunta": "¿Quién fue el goleador del equipo de Huracán en el Campeonato Metropolitano 1973?",
      "opciones": [
        "Roque Avallay (11 goles) y Miguel Brindisi",
        "Carlos Babington",
        "René Houseman",
        "Omar Larrosa"
      ],
      "correcta": 0,
      "explicacion": "Roque Avallay y Miguel Ángel Brindisi fueron los máximos artilleros del equipo campeón con una enorme cuota goleadora.",
      "dificultad": "Media"
    },
    {
      "id": 21,
      "pregunta": "¿Quién fue el capitán del Huracán Campeón Metropolitano 1973?",
      "opciones": [
        "Jorge Carrascosa",
        "Alfio Basile",
        "Miguel Ángel Brindisi",
        "Carlos Babington"
      ],
      "correcta": 0,
      "explicacion": "Jorge 'El Lobo' Carrascosa fue el respetado capitán del plantel dirigido por Menotti.",
      "dificultad": "Media"
    },
    {
      "id": 22,
      "pregunta": "¿Qué arquero fue titular indiscutido en el campeonato de Huracán de 1973?",
      "opciones": [
        "Héctor Roganti",
        "Marcos Díaz",
        "Eduardo Buglione",
        "Agustín Cejas"
      ],
      "correcta": 0,
      "explicacion": "Héctor Roganti defendió los tres palos durante casi todo el campeonato consagratorio de 1973.",
      "dificultad": "Media"
    },
    {
      "id": 23,
      "pregunta": "¿A qué clásico rival goleó Huracán 5 a 0 durante la campaña del Metropolitano 1973?",
      "opciones": [
        "Racing Club",
        "River Plate",
        "Boca Juniors",
        "San Lorenzo"
      ],
      "correcta": 0,
      "explicacion": "En una exhibición inolvidable en Parque Patricios, Huracán aplastó 5 a 0 a Racing Club con goles de Houseman, Babington y Brindisi.",
      "dificultad": "Media"
    },
    {
      "id": 24,
      "pregunta": "¿Qué distinción individual obtuvo Miguel Ángel Brindisi en 1973 a nivel continental?",
      "opciones": [
        "Balón de Plata de Sudamérica (detrás de Pelé)",
        "Mejor Jugador de América",
        "Botín de Oro de FIFA",
        "Mejor Volante de Europa"
      ],
      "correcta": 0,
      "explicacion": "En la encuesta de El Mundo de Venezuela, Brindisi fue elegido segundo mejor futbolista de Sudamérica detrás de Pelé.",
      "dificultad": "Difícil"
    },
    {
      "id": 25,
      "pregunta": "¿Cuántas Copas Nacionales oficiales de AFA ganó Huracán en su historia?",
      "opciones": [
        "8",
        "5",
        "3",
        "10"
      ],
      "correcta": 0,
      "explicacion": "Huracán ganó 8 Copas Nacionales oficiales: Estímulo 1920, Ibarguren 1922 y 1925, Honor 1925, Escobar 1942 y 1943, Británica 1944 y Copa Argentina 2014.",
      "dificultad": "Media"
    },
    {
      "id": 26,
      "pregunta": "¿Cuál fue la primera Copa Nacional ganada por Huracán en 1920?",
      "opciones": [
        "Copa Estímulo",
        "Copa Dr. Carlos Ibarguren",
        "Copa de Honor",
        "Copa Adrián Escobar"
      ],
      "correcta": 0,
      "explicacion": "La Copa Estímulo de 1920 fue el primer trofeo de copa nacional oficial que levantó Huracán.",
      "dificultad": "Media"
    },
    {
      "id": 27,
      "pregunta": "¿Contra qué equipo disputó Huracán la final de la Copa Argentina 2013-14 en San Juan?",
      "opciones": [
        "Rosario Central",
        "River Plate",
        "Boca Juniors",
        "Atlético Tucumán"
      ],
      "correcta": 0,
      "explicacion": "Huracán empató 0-0 ante Rosario Central y lo venció 5-4 en la definición por penales en el Bicentenario de San Juan.",
      "dificultad": "Fácil"
    },
    {
      "id": 28,
      "pregunta": "¿Quién convirtió el penal decisivo en la tanda que consagró a Huracán campeón de la Copa Argentina 2014?",
      "opciones": [
        "Federico Mancinelli",
        "Ramón Ábila",
        "Eduardo Domínguez",
        "Gonzalo Martínez"
      ],
      "correcta": 0,
      "explicacion": "Federico Mancinelli anotó el penal definitorio tras las atajadas magistrales de Marcos Díaz.",
      "dificultad": "Media"
    },
    {
      "id": 29,
      "pregunta": "¿Quién anotó el gol de la victoria en la final de la Supercopa Argentina 2014 ante River Plate en 2015?",
      "opciones": [
        "Edson Puch",
        "Patricio Toranzo",
        "Ramón Ábila",
        "Cristian Espinoza"
      ],
      "correcta": 0,
      "explicacion": "El delantero chileno Edson Puch anotó el 1-0 picándola sobre Marcelo Barovero tras un pase genial de Toranzo.",
      "dificultad": "Fácil"
    },
    {
      "id": 30,
      "pregunta": "¿Quién era el director técnico de Huracán al ganar la Copa Argentina 2014 y la Supercopa 2014?",
      "opciones": [
        "Néstor Apuzzo",
        "Frank Darío Kudelka",
        "Eduardo Domínguez",
        "Ángel Cappa"
      ],
      "correcta": 0,
      "explicacion": "Néstor Apuzzo asumió como DT interino y llevó a Huracán a consagrarse campeón de ambas copas nacionales.",
      "dificultad": "Fácil"
    },
    {
      "id": 31,
      "pregunta": "¿A qué equipo venció Huracán en la final de la Copa Competencia Británica George VI en 1944?",
      "opciones": [
        "Boca Juniors (4-2)",
        "River Plate (1-0)",
        "San Lorenzo (5-1)",
        "Independiente (2-0)"
      ],
      "correcta": 0,
      "explicacion": "Huracán derrotó a Boca Juniors 4 a 2 en la final disputada en el estadio Gasómetro el 9 de diciembre de 1944.",
      "dificultad": "Media"
    },
    {
      "id": 32,
      "pregunta": "¿Qué director técnico condujo a Huracán en la obtención de las tres copas de los años 40 (Escobar 1942, 1943 y Británica 1944)?",
      "opciones": [
        "Guillermo Stábile",
        "Tomás Adolfo Ducó",
        "José Laguna",
        "Cesáreo Onzari"
      ],
      "correcta": 0,
      "explicacion": "Guillermo Stábile, prócer del club, fue el director técnico del Globo durante toda esa racha gloriosa de copas oficiales.",
      "dificultad": "Media"
    },
    {
      "id": 33,
      "pregunta": "¿Cómo se definió la insólita final de la Copa Adrián Escobar 1943 entre Huracán y Platense tras el 0-0?",
      "opciones": [
        "Por cantidad de tiros de esquina a favor (córners)",
        "Por penales",
        "Por moneda al aire",
        "Por desempate al día siguiente"
      ],
      "correcta": 0,
      "explicacion": "El reglamento de la Copa Escobar estipulaba que ante un empate tras 40 minutos se definía por córners a favor (Huracán tuvo 4 a 1).",
      "dificultad": "Difícil"
    },
    {
      "id": 34,
      "pregunta": "¿Cuántos años de sequía de títulos nacionales cortó Huracán al consagrarse en la Copa Argentina 2014?",
      "opciones": [
        "41 años (desde 1973)",
        "30 años",
        "50 años",
        "25 años"
      ],
      "correcta": 0,
      "explicacion": "Desde el Metropolitano de 1973 hasta noviembre de 2014 transcurrieron 41 años sin un título oficial de Primera División.",
      "dificultad": "Fácil"
    },
    {
      "id": 35,
      "pregunta": "¿Contra qué rivales disputó Huracán las finales de la Copa Ibarguren de 1922 y 1925?",
      "opciones": [
        "Newell's Old Boys y Tiro Federal de Rosario",
        "Rosario Central y Belgrano",
        "Racing y Boca",
        "Gimnasia y Estudiantes"
      ],
      "correcta": 0,
      "explicacion": "La Copa Ibarguren enfrentaba al campeón de Buenos Aires con el campeón de la Liga Rosarina (venció a Newell's y Tiro Federal).",
      "dificultad": "Difícil"
    },
    {
      "id": 36,
      "pregunta": "¿A qué grande del fútbol argentino eliminó Huracán en semifinales de la Copa Sudamericana 2015?",
      "opciones": [
        "River Plate",
        "Boca Juniors",
        "San Lorenzo",
        "Independiente"
      ],
      "correcta": 0,
      "explicacion": "Huracán eliminó al River Plate campeón vigente ganando 1-0 en el Monumental y empatando 2-2 en el Palacio Ducó.",
      "dificultad": "Fácil"
    },
    {
      "id": 37,
      "pregunta": "¿Quién es el máximo goleador de toda la historia de Huracán?",
      "opciones": [
        "Herminio Masantonio (254 goles)",
        "Miguel Ángel Brindisi (171 goles)",
        "Emilio Baldonedo (165 goles)",
        "Carlos Babington (130 goles)"
      ],
      "correcta": 0,
      "explicacion": "Herminio Masantonio convirtió 254 goles oficiales con el Globo entre 1931 y 1945.",
      "dificultad": "Fácil"
    },
    {
      "id": 38,
      "pregunta": "¿Quién ostenta el récord de más partidos oficiales jugados en Huracán?",
      "opciones": [
        "Jorge Hugo Alberti (393 partidos)",
        "Herminio Masantonio (349 partidos)",
        "Miguel Ángel Brindisi (349 partidos)",
        "Carlos Babington (305 partidos)"
      ],
      "correcta": 0,
      "explicacion": "Jorge Alberti disputó 393 partidos ininterrumpidos en Huracán entre 1930 y 1947.",
      "dificultad": "Media"
    },
    {
      "id": 39,
      "pregunta": "¿Qué récord mundialista ostenta el quemero Guillermo Stábile?",
      "opciones": [
        "Primer goleador de la historia de los Mundiales (Uruguay 1930)",
        "El gol más rápido en mundiales",
        "El jugador más joven en convertir",
        "Más goles en un solo partido"
      ],
      "correcta": 0,
      "explicacion": "Stábile anotó 8 goles en la primera Copa del Mundo de la FIFA (1930) y fue el primer Botín de Oro de la historia.",
      "dificultad": "Fácil"
    },
    {
      "id": 40,
      "pregunta": "¿Qué récord comparte Norberto 'Tucho' Méndez en la Copa América?",
      "opciones": [
        "Máximo goleador histórico del certamen con 17 goles",
        "Más partidos jugados",
        "Más expulsiones",
        "Gol más rápido"
      ],
      "correcta": 0,
      "explicacion": "Tucho Méndez es el máximo artillero histórico de la Copa América con 17 tantos oficiales (comparte récord con Zizinho).",
      "dificultad": "Media"
    },
    {
      "id": 41,
      "pregunta": "¿Quién fue el autor del primer 'Gol Olímpico' de la historia del fútbol en 1924?",
      "opciones": [
        "Cesáreo Onzari",
        "Herminio Masantonio",
        "Ángel Chiesa",
        "Manuel Seoane"
      ],
      "correcta": 0,
      "explicacion": "Cesáreo Onzari, jugador de Huracán, le marcó directamente de tiro de esquina a Uruguay (vigente campeón olímpico) el 2 de octubre de 1924.",
      "dificultad": "Fácil"
    },
    {
      "id": 42,
      "pregunta": "¿De qué club de ascenso provino René Houseman antes de llegar a Huracán en 1973?",
      "opciones": [
        "Defensores de Belgrano",
        "Excursionistas",
        "Platense",
        "All Boys"
      ],
      "correcta": 0,
      "explicacion": "Houseman descolló en la Primera C con Defensores de Belgrano antes de ser fichado por Huracán por recomendación de Menotti.",
      "dificultad": "Media"
    },
    {
      "id": 43,
      "pregunta": "¿Qué boxeador de peso pesado fanático de Huracán tiene su estatua en la sede y una tribuna en el Ducó?",
      "opciones": [
        "Oscar 'Ringo' Bonavena",
        "Nicolino Locche",
        "Carlos Monzón",
        "Pascual Pérez"
      ],
      "correcta": 0,
      "explicacion": "Oscar 'Ringo' Bonavena, ídolo eterno de Parque Patricios, entrenaba en la sede y llevó al Globo por todo el mundo.",
      "dificultad": "Fácil"
    },
    {
      "id": 44,
      "pregunta": "¿A qué legendario campeón mundial enfrentó Ringo Bonavena en 1970 en el Madison Square Garden?",
      "opciones": [
        "Muhammad Ali",
        "Mike Tyson",
        "George Foreman",
        "Sonny Liston"
      ],
      "correcta": 0,
      "explicacion": "El 7 de diciembre de 1970, Ringo peleó de igual a igual 15 asaltos épicos contra Muhammad Ali en Nueva York.",
      "dificultad": "Fácil"
    },
    {
      "id": 45,
      "pregunta": "¿Quién es el único personaje en la historia de Huracán que fue Campeón como Jugador, Campeón como DT y Presidente del Club?",
      "opciones": [
        "Carlos Alberto Babington",
        "Miguel Ángel Brindisi",
        "José Laguna",
        "Alfio Basile"
      ],
      "correcta": 0,
      "explicacion": "Carlos Babington fue jugador campeón en 1973, DT campeón del ascenso en 1990 y 2000, y Presidente entre 2006 y 2011.",
      "dificultad": "Media"
    },
    {
      "id": 46,
      "pregunta": "¿Cuántos goles le anotó Herminio Masantonio a San Lorenzo en el clásico de barrio?",
      "opciones": [
        "19 goles",
        "12 goles",
        "15 goles",
        "22 goles"
      ],
      "correcta": 0,
      "explicacion": "Masantonio es el máximo goleador histórico del clásico quemero-cuervo con 19 goles oficiales.",
      "dificultad": "Media"
    },
    {
      "id": 47,
      "pregunta": "¿Qué jugadores formados en Huracán salieron campeones del mundo en Argentina 1978?",
      "opciones": [
        "René Houseman y Omar Larrosa (además de Menotti DT)",
        "Carlos Babington y Brindisi",
        "Basile y Carrascosa",
        "Masantonio y Méndez"
      ],
      "correcta": 0,
      "explicacion": "René Houseman y Omar Larrosa jugaron la Copa del Mundo 1978 consagrándose campeones dirigidos por el Flaco Menotti.",
      "dificultad": "Media"
    },
    {
      "id": 48,
      "pregunta": "¿Qué apodo tenía el inolvidable Herminio Masantonio debido a la potencia de su remate?",
      "opciones": [
        "El Mortero de Parque Patricios",
        "El Cañón de Boedo",
        "El Tanque Criollo",
        "El Destructor del Sur"
      ],
      "correcta": 0,
      "explicacion": "Se lo llamaba 'El Mortero de Parque Patricios' por la brutal potencia de su disparo de derecha.",
      "dificultad": "Fácil"
    },
    {
      "id": 49,
      "pregunta": "¿En qué año y ante qué rival debutó profesionalmente Javier Pastore en la Primera de Huracán?",
      "opciones": [
        "2007 ante River Plate",
        "2009 ante Racing",
        "2008 ante San Lorenzo",
        "2006 ante Boca"
      ],
      "correcta": 0,
      "explicacion": "Javier Pastore debutó en Primera División con la camiseta de Huracán en mayo de 2007 ante River Plate.",
      "dificultad": "Difícil"
    },
    {
      "id": 50,
      "pregunta": "¿Cuántos goles oficiales convirtió Ramón 'Wanchope' Ábila en sus etapas en Huracán?",
      "opciones": [
        "58 goles",
        "45 goles",
        "72 goles",
        "35 goles"
      ],
      "correcta": 0,
      "explicacion": "Wanchope Ábila alcanzó los 58 goles oficiales con la camiseta del Globo, entrando al Top 10 histórico.",
      "dificultad": "Media"
    },
    {
      "id": 51,
      "pregunta": "¿Qué jugador quemero tiene el récord del gol más rápido en la historia de la Selección Argentina?",
      "opciones": [
        "Herminio Masantonio (a los 23 segundos vs Uruguay en 1935)",
        "Guillermo Stábile",
        "René Houseman",
        "Norberto Méndez"
      ],
      "correcta": 0,
      "explicacion": "Masantonio le anotó a Uruguay a los 23 segundos en la Copa América de 1935 en Lima.",
      "dificultad": "Difícil"
    },
    {
      "id": 52,
      "pregunta": "¿Qué dorsal emblemático utilizaba Carlos Babington en el Huracán de 1973?",
      "opciones": [
        "El número 10",
        "El número 8",
        "El número 7",
        "El número 11"
      ],
      "correcta": 0,
      "explicacion": "Babington era la clásica 'diez' en la espalda, el conductor zurdo de aquel cuadro magistral.",
      "dificultad": "Fácil"
    },
    {
      "id": 53,
      "pregunta": "¿En qué club italiano jugó Guillermo Stábile tras ser transferido desde Huracán en 1930?",
      "opciones": [
        "Genoa",
        "Juventus",
        "Inter de Milán",
        "Roma"
      ],
      "correcta": 0,
      "explicacion": "Tras el Mundial de 1930, Stábile fue transferido al Genoa de Italia, donde debutó con un hat-trick.",
      "dificultad": "Difícil"
    },
    {
      "id": 54,
      "pregunta": "¿Cuántos goles convirtió Daniel 'Rolfi' Montenegro en sus 236 partidos en Huracán?",
      "opciones": [
        "44 goles",
        "28 goles",
        "60 goles",
        "18 goles"
      ],
      "correcta": 0,
      "explicacion": "El Rolfi anotó 44 goles oficiales con Huracán, varios de ellos memorables tiros libres y golazos a los grandes.",
      "dificultad": "Media"
    },
    {
      "id": 55,
      "pregunta": "¿En qué club de Europa brilló Javier Pastore tras ser transferido de Huracán?",
      "opciones": [
        "Palermo y Paris Saint-Germain",
        "Real Madrid",
        "Chelsea",
        "Milan"
      ],
      "correcta": 0,
      "explicacion": "El Flaco Pastore pasó de Huracán al Palermo de Italia y posteriormente fue estrella en el PSG de Francia.",
      "dificultad": "Fácil"
    },
    {
      "id": 56,
      "pregunta": "¿Qué número de camiseta utilizó Antonio 'Turco' Mohamed en el ascenso de 1990?",
      "opciones": [
        "El número 7",
        "El número 9",
        "El número 11",
        "El número 10"
      ],
      "correcta": 0,
      "explicacion": "El Turco Mohamed brilló como puntero con la camiseta 7 formando dupla con el paraguayo Víctor Delgado.",
      "dificultad": "Media"
    },
    {
      "id": 57,
      "pregunta": "¿Cómo se llama el mítico estadio de Huracán inaugurado en 1947?",
      "opciones": [
        "Estadio Tomás Adolfo Ducó ('El Palacio')",
        "Estadio Jorge Newbery",
        "Estadio Parque Patricios",
        "Estadio Herminio Masantonio"
      ],
      "correcta": 0,
      "explicacion": "Bautizado en honor al Teniente Coronel Tomás Adolfo Ducó, el estadio es conocido como 'El Palacio'.",
      "dificultad": "Fácil"
    },
    {
      "id": 58,
      "pregunta": "¿Qué estilo arquitectónico distintivo caracteriza al Palacio Ducó?",
      "opciones": [
        "Art Déco / Expresionismo Monumental",
        "Neoclásico",
        "Gótico",
        "Brutalismo"
      ],
      "correcta": 0,
      "explicacion": "El estadio presenta un singular estilo Art Déco y expresionista, diseñado por Curutchet, Giraldez y Olivera.",
      "dificultad": "Media"
    },
    {
      "id": 59,
      "pregunta": "¿Cuánto mide la emblemática torre del frente del Estadio Tomás Adolfo Ducó?",
      "opciones": [
        "40 metros",
        "20 metros",
        "65 metros",
        "50 metros"
      ],
      "correcta": 0,
      "explicacion": "La torre Art Déco del Palacio Ducó tiene una altura aproximada de 40 metros.",
      "dificultad": "Media"
    },
    {
      "id": 60,
      "pregunta": "¿Cómo se llama la Platea Lateral techada del Palacio Ducó?",
      "opciones": [
        "Platea Miravé (Herminio Masantonio)",
        "Platea Alcorta",
        "Platea Ringo Bonavena",
        "Platea Menotti"
      ],
      "correcta": 0,
      "explicacion": "La platea sobre la calle Miravé lleva el nombre del gran artillero Herminio Masantonio.",
      "dificultad": "Fácil"
    },
    {
      "id": 61,
      "pregunta": "¿Cómo se llama la Popular Cabecera local (lado Colonia) del estadio?",
      "opciones": [
        "Popular Oscar 'Ringo' Bonavena",
        "Popular Tucho Méndez",
        "Popular Masantonio",
        "Popular Houseman"
      ],
      "correcta": 0,
      "explicacion": "La cabecera norte (Colonia) rinde tributo a Oscar 'Ringo' Bonavena.",
      "dificultad": "Fácil"
    },
    {
      "id": 62,
      "pregunta": "¿Cómo se llama la Popular Cabecera visitante/Este (lado Luna) del estadio?",
      "opciones": [
        "Popular Norberto 'Tucho' Méndez",
        "Popular Ringo Bonavena",
        "Popular Jorge Newbery",
        "Popular Babington"
      ],
      "correcta": 0,
      "explicacion": "La cabecera Este (Luna) fue nombrada en honor al tricampeón de América Norberto 'Tucho' Méndez.",
      "dificultad": "Fácil"
    },
    {
      "id": 63,
      "pregunta": "¿Qué película ganadora del Premio Oscar de la Academia filmó su famosa escena en el Estadio Ducó?",
      "opciones": [
        "El Secreto de sus Ojos (Juan José Campanella)",
        "La Historia Oficial",
        "Relatos Salvajes",
        "Nueve Reinas"
      ],
      "correcta": 0,
      "explicacion": "El famoso plano secuencia de 'El Secreto de sus Ojos' (2009) se rodó en el Palacio Tomás A. Ducó durante un partido nocturno.",
      "dificultad": "Fácil"
    },
    {
      "id": 64,
      "pregunta": "¿En qué dirección se encuentra la histórica Sede Social del club?",
      "opciones": [
        "Av. Caseros 3159",
        "Amancio Alcorta 2570",
        "Mariano Acosta 1981",
        "Chiclana 2900"
      ],
      "correcta": 0,
      "explicacion": "La sede social de Huracán está ubicada en Av. Caseros 3159, en pleno corazón de Parque Patricios.",
      "dificultad": "Fácil"
    },
    {
      "id": 65,
      "pregunta": "¿Cómo se llama el campo de deportes de 14 hectáreas de Huracán en Mariano Acosta 1981?",
      "opciones": [
        "Campo de Deportes 'La Quemita'",
        "Predio Newbery",
        "Parque Patricios",
        "La Cantera Quemera"
      ],
      "correcta": 0,
      "explicacion": "El predio de Bajo Flores es mundialmente conocido como 'La Quemita' (Campo de Deportes Jorge Newbery).",
      "dificultad": "Fácil"
    },
    {
      "id": 66,
      "pregunta": "¿Cómo se bautizó el nuevo predio deportivo recuperado frente al estadio (ex Gas del Estado)?",
      "opciones": [
        "Predio Deportivo César Luis Menotti",
        "Predio Herminio Masantonio",
        "Predio René Houseman",
        "Predio Ringo Bonavena"
      ],
      "correcta": 0,
      "explicacion": "Los terrenos sobre Amancio Alcorta fueron nombrados en honor al eterno César Luis Menotti.",
      "dificultad": "Fácil"
    },
    {
      "id": 67,
      "pregunta": "¿A qué rival derrotó Huracán 4-3 en la inauguración deportiva del Palacio Ducó el 10 de agosto de 1947?",
      "opciones": [
        "Boca Juniors",
        "River Plate",
        "San Lorenzo",
        "Independiente"
      ],
      "correcta": 0,
      "explicacion": "El Ducó abrió sus puertas con un partidazo donde Huracán batió a Boca Juniors 4 a 3 ante 80.000 personas.",
      "dificultad": "Media"
    },
    {
      "id": 68,
      "pregunta": "¿Qué ley de la Legislatura Porteña declaró al Estadio Ducó como Patrimonio Histórico y Cultural?",
      "opciones": [
        "Ley 2516 (2007)",
        "Ley 1024 (1998)",
        "Ley 4500 (2012)",
        "Ley 1908 (2001)"
      ],
      "correcta": 0,
      "explicacion": "En mayo de 2007, la Legislatura aprobó la Ley 2516 protegiendo arquitectónicamente al estadio.",
      "dificultad": "Difícil"
    },
    {
      "id": 69,
      "pregunta": "¿Cómo se denomina popularmente al clásico entre Huracán y San Lorenzo?",
      "opciones": [
        "El Clásico de Barrio más Grande del Mundo",
        "El Superclásico Porteño",
        "El Derby del Sur",
        "El Duelo de Boedo"
      ],
      "correcta": 0,
      "explicacion": "Por la cercanía de Parque Patricios y Boedo y su tradición vecinal, se lo reconoce como 'El Clásico de Barrio más Grande del Mundo'.",
      "dificultad": "Fácil"
    },
    {
      "id": 70,
      "pregunta": "¿Cuál fue la mayor goleada de Huracán como visitante en el clásico ante San Lorenzo en el Viejo Gasómetro?",
      "opciones": [
        "San Lorenzo 1 - Huracán 5 (1944)",
        "San Lorenzo 0 - Huracán 4 (1973)",
        "San Lorenzo 1 - Huracán 3 (1980)",
        "San Lorenzo 2 - Huracán 5 (1939)"
      ],
      "correcta": 0,
      "explicacion": "El 13 de mayo de 1944, Huracán goleó 5 a 1 a San Lorenzo a domicilio con goles de Masantonio y Baldonedo.",
      "dificultad": "Media"
    },
    {
      "id": 71,
      "pregunta": "¿Quiénes son los máximos goleadores de Huracán en la historia del clásico contra San Lorenzo?",
      "opciones": [
        "Herminio Masantonio (19) y Emilio Baldonedo (14)",
        "Miguel Brindisi y Babington",
        "Houseman y Avallay",
        "Stábile y Chiesa"
      ],
      "correcta": 0,
      "explicacion": "Masantonio lidera la tabla con 19 goles y Baldonedo lo sigue con 14 en la época dorada.",
      "dificultad": "Media"
    },
    {
      "id": 72,
      "pregunta": "¿En qué año se disputó el primer clásico oficial entre Huracán y San Lorenzo en Primera División?",
      "opciones": [
        "1915",
        "1908",
        "1921",
        "1931"
      ],
      "correcta": 0,
      "explicacion": "El primer choque oficial en Primera División tuvo lugar en 1915 con triunfo cuervo 3-1.",
      "dificultad": "Difícil"
    },
    {
      "id": 73,
      "pregunta": "¿Qué resultado histórico obtuvo el Huracán campeón del 73 visitando a San Lorenzo en diciembre de ese año?",
      "opciones": [
        "San Lorenzo 2 - Huracán 4",
        "San Lorenzo 0 - Huracán 3",
        "San Lorenzo 1 - Huracán 2",
        "San Lorenzo 3 - Huracán 3"
      ],
      "correcta": 0,
      "explicacion": "El 9 de diciembre de 1973, Huracán ganó 4 a 2 en cancha de San Lorenzo con dos golazos de antología de René Houseman.",
      "dificultad": "Media"
    },
    {
      "id": 74,
      "pregunta": "¿Qué jugador de Huracán le marcó 3 goles a San Lorenzo en un clásico en el Clausura 2002?",
      "opciones": [
        "Daniel 'Rolfi' Montenegro",
        "Emanuel Villa",
        "Mauro Milano",
        "Sebastián Morquio"
      ],
      "correcta": 0,
      "explicacion": "Rolfi Montenegro tuvo una tarde consagratoria en el Ducó anotando tres goles en el clásico.",
      "dificultad": "Media"
    },
    {
      "id": 75,
      "pregunta": "¿Qué histórico defensor uruguayo de Huracán le anotó un gol de penal a San Lorenzo con una venda ensangrentada en la cabeza?",
      "opciones": [
        "Sebastián Morquio",
        "Nelson Chabay",
        "Carlos Arano",
        "Hugo Nervo"
      ],
      "correcta": 0,
      "explicacion": "El zaguero uruguayo 'Patota' Morquio es recordado por su coraje indomable en los clásicos de principios de siglo.",
      "dificultad": "Media"
    },
    {
      "id": 76,
      "pregunta": "¿En qué torneo Huracán venció a San Lorenzo 1 a 0 con gol del paraguayo Víctor Delgado para consolidar el ascenso?",
      "opciones": [
        "Nacional B 1989/90 (Amistoso / Pretemporada)",
        "Metropolitano 1976",
        "Clausura 1994",
        "Apertura 2000"
      ],
      "correcta": 0,
      "explicacion": "Víctor Delgado fue figura clave del equipo de Babington en 1990 anotando en duelos memorables.",
      "dificultad": "Difícil"
    },
    {
      "id": 77,
      "pregunta": "¿Cuántos partidos oficiales aproximadamente se han disputado en el clásico Huracán vs San Lorenzo?",
      "opciones": [
        "Más de 190 partidos oficiales",
        "Menos de 100",
        "Aproximadamente 120",
        "Más de 300"
      ],
      "correcta": 0,
      "explicacion": "En el profesionalismo y amateurismo se han disputado más de 190 ediciones del derbi.",
      "dificultad": "Fácil"
    },
    {
      "id": 78,
      "pregunta": "¿Qué escritor y poeta tanguero célebre era fanático confeso de Huracán y reflejó la esencia de Parque Patricios?",
      "opciones": [
        "Homero Manzi",
        "Enrique Santos Discépolo",
        "Cátulo Castillo",
        "Roberto Goyeneche"
      ],
      "correcta": 0,
      "explicacion": "Homero Manzi, autor de 'Sur', habitante del barrio, retrató las esquinas de San Juan y Boedo y Parque Patricios con espíritu quemero.",
      "dificultad": "Media"
    },
    {
      "id": 79,
      "pregunta": "¿Cómo se apodó al brillante equipo de Huracán subcampeón en el Torneo Clausura 2009?",
      "opciones": [
        "Los Ángeles de Cappa",
        "La Naranja Mecánica del Sur",
        "El Huracán Tiki-Tiki",
        "El Ballet Quemero"
      ],
      "correcta": 0,
      "explicacion": "El equipo dirigido por Ángel Cappa fue inmortalizado popularmente como 'Los Ángeles de Cappa'.",
      "dificultad": "Fácil"
    },
    {
      "id": 80,
      "pregunta": "¿Qué mediocampista central de exquisita técnica era el eje de contención en Los Ángeles de Cappa?",
      "opciones": [
        "Mario Bolatti",
        "Gastón Esmerado",
        "Federico Vismara",
        "Lucas Villarruel"
      ],
      "correcta": 0,
      "explicacion": "Mario Bolatti brilló con tal categoría que fue convocado a la Selección por Maradona, anotando el gol de la clasificación al Mundial 2010 en Montevideo.",
      "dificultad": "Fácil"
    },
    {
      "id": 81,
      "pregunta": "¿Qué resultado obtuvo Huracán ante River Plate en el Clausura 2009 en el Palacio Ducó?",
      "opciones": [
        "Huracán 4 - River Plate 0",
        "Huracán 2 - River Plate 1",
        "Huracán 3 - River Plate 2",
        "Huracán 1 - River Plate 0"
      ],
      "correcta": 0,
      "explicacion": "En una exhibición histórica de toques y paredes, Huracán goleó a River 4 a 0 con baile de Pastore.",
      "dificultad": "Fácil"
    },
    {
      "id": 82,
      "pregunta": "¿Quién fue el árbitro del polémico partido final del Clausura 2009 entre Vélez y Huracán?",
      "opciones": [
        "Gabriel Brazenas",
        "Héctor Baldassi",
        "Horacio Elizondo",
        "Saúl Laverni"
      ],
      "correcta": 0,
      "explicacion": "Gabriel Brazenas convalidó el gol de Vélez tras una clarísima falta de Larrivey sobre el arquero Gastón Monzón.",
      "dificultad": "Fácil"
    },
    {
      "id": 83,
      "pregunta": "¿Qué director técnico logró el ascenso a Primera División en 2007 ganando la final ante Godoy Cruz?",
      "opciones": [
        "Antonio Ricardo Mohamed",
        "Carlos Babington",
        "Ángel Cappa",
        "Néstor Apuzzo"
      ],
      "correcta": 0,
      "explicacion": "El Turco Mohamed condujo al Globo al triunfo 3-2 global ante Godoy Cruz en Mendoza.",
      "dificultad": "Fácil"
    },
    {
      "id": 84,
      "pregunta": "¿Quién es el actual Director Técnico del Club Atlético Huracán (2025-2027)?",
      "opciones": [
        "Diego Martínez",
        "Frank Darío Kudelka",
        "Eduardo Domínguez",
        "Sebastián Battaglia"
      ],
      "correcta": 0,
      "explicacion": "Diego Martínez regresó a la institución para encabezar el proyecto deportivo del primer equipo.",
      "dificultad": "Fácil"
    },
    {
      "id": 85,
      "pregunta": "¿En qué año se consagró Huracán campeón del Nacional B de la mano de Babington con récord de puntos?",
      "opciones": [
        "1999-2000",
        "1995-1996",
        "2006-2007",
        "2013-2014"
      ],
      "correcta": 0,
      "explicacion": "En la temporada 1999-2000, Huracán arrasó en el torneo de ascenso consagrándose campeón con cifras récord.",
      "dificultad": "Media"
    },
    {
      "id": 86,
      "pregunta": "¿Quién era el actual presidente del club en el momento del anuncio del nuevo Museo Oficial (2024-Presente)?",
      "opciones": [
        "Abel Poza",
        "David Garzón",
        "Alejandro Nadur",
        "Carlos Babington"
      ],
      "correcta": 0,
      "explicacion": "Abel Poza encabeza la comisión directiva actual del Club Atlético Huracán.",
      "dificultad": "Fácil"
    },
    {
      "id": 87,
      "pregunta": "¿Qué delantero colombiano fue pieza importante de ataque en el subcampeonato del Clausura 2009?",
      "opciones": [
        "Leonardo Medina",
        "Teófilo Gutiérrez",
        "Wason Rentería",
        "Mauricio Cuero"
      ],
      "correcta": 0,
      "explicacion": "Leonardo Medina integró el ataque del Globo aportando goles claves en partidos cerrados.",
      "dificultad": "Difícil"
    },
    {
      "id": 88,
      "pregunta": "¿Quién fue el arquero titular y héroe en la serie de penales de la semifinal de Copa Sudamericana ante River?",
      "opciones": [
        "Marcos Díaz",
        "Gastón Monzón",
        "Lucas Chaves",
        "Hernán Galíndez"
      ],
      "correcta": 0,
      "explicacion": "Marcos Díaz tuvo tapadas legendarias en el Monumental y en el Ducó ante el River de Gallardo.",
      "dificultad": "Fácil"
    },
    {
      "id": 89,
      "pregunta": "¿Qué delantero surgido de inferiores fue transferido a Europa tras ser campeón en 2014 y finalista en 2015?",
      "opciones": [
        "Cristian Espinoza",
        "Gonzalo Martínez",
        "Mauro Milano",
        "Alejandro Romero Gamarra"
      ],
      "correcta": 0,
      "explicacion": "Cristian Espinoza fue velocísimo delantero clave en 2014 y 2015 antes de ser vendido al Villarreal.",
      "dificultad": "Media"
    },
    {
      "id": 90,
      "pregunta": "¿Quién fue el lateral derecho titular y subcapitán en las consagraciones del Globo en San Juan 2014?",
      "opciones": [
        "Federico Mancinelli",
        "Hugo Nervo",
        "Carlos Araujo",
        "Leonardo Morales"
      ],
      "correcta": 0,
      "explicacion": "Federico Mancinelli aportó fiereza, goles de cabeza y el penal decisivo en la final de la Copa Argentina.",
      "dificultad": "Media"
    },
    {
      "id": 91,
      "pregunta": "¿Qué título internacional de máxima jerarquía ostenta el equipo de Hockey sobre Patines de Huracán?",
      "opciones": [
        "Campeón Sudamericano de Clubes",
        "Copa Intercontinental",
        "Copa Libertadores de Hockey",
        "Recopa Panamericana"
      ],
      "correcta": 0,
      "explicacion": "Huracán es una de las instituciones más gloriosas del hockey patín nacional, habiéndose coronado Campeón Sudamericano de Clubes.",
      "dificultad": "Media"
    },
    {
      "id": 92,
      "pregunta": "¿En qué torneo de la Asociación del Fútbol Argentino compite el equipo de Futsal masculino de Huracán?",
      "opciones": [
        "Primera División A de AFA",
        "Torneo Promocional",
        "Liga Metropolitana B",
        "Copa Federación"
      ],
      "correcta": 0,
      "explicacion": "El Globo es animador tradicional de la máxima división de Futsal AFA.",
      "dificultad": "Fácil"
    },
    {
      "id": 93,
      "pregunta": "¿Cómo se llama el gimnasio de boxeo ubicado dentro de la Sede Social de Parque Patricios?",
      "opciones": [
        "Gimnasio Oscar 'Ringo' Bonavena",
        "Gimnasio Herminio Masantonio",
        "Gimnasio Pascual Pérez",
        "Gimnasio Parque Patricios"
      ],
      "correcta": 0,
      "explicacion": "El cuadrilátero y sala de entrenamiento pugilístico llevan el nombre eterno del ídolo Oscar 'Ringo' Bonavena.",
      "dificultad": "Fácil"
    },
    {
      "id": 94,
      "pregunta": "¿En qué federación compiten los equipos representativos de básquetbol de Huracán?",
      "opciones": [
        "FeBAMBA (Federación de Básquetbol del Área Metropolitana)",
        "Liga Nacional Directa",
        "Asociación Platense",
        "Federación Santafesina"
      ],
      "correcta": 0,
      "explicacion": "Huracán compite en los torneos oficiales de FeBAMBA en el gimnasio cubierto de Caseros 3159.",
      "dificultad": "Media"
    },
    {
      "id": 95,
      "pregunta": "¿Qué disciplina sobre ruedas de Huracán es múltiple campeona de la Liga Nacional?",
      "opciones": [
        "Roller Hockey (Hockey en Línea)",
        "Ciclismo en Pista",
        "Skateboarding",
        "Patín Carrera"
      ],
      "correcta": 0,
      "explicacion": "El equipo de Roller Hockey del Globo es potencia nacional habiendo obtenido múltiples coronas en la Liga Argentina.",
      "dificultad": "Media"
    },
    {
      "id": 96,
      "pregunta": "¿Qué instalación acuática de primer nivel posee la sede de Av. Caseros 3159?",
      "opciones": [
        "Natatorio Climatizado Semiolímpico",
        "Piscina Olímpica descubierta",
        "Fosa de saltos ornamentales",
        "Parque acuático"
      ],
      "correcta": 0,
      "explicacion": "La sede cuenta con una moderna pileta climatizada techada para socios y escuela de natación.",
      "dificultad": "Fácil"
    },
    {
      "id": 97,
      "pregunta": "¿En qué federación metropolitana disputa sus partidos oficiales el Handball de Huracán?",
      "opciones": [
        "Fe.Me.Bal (Federación Metropolitana de Balonmano)",
        "Confederación Argentina",
        "Liga Porteña",
        "Asociación Sur"
      ],
      "correcta": 0,
      "explicacion": "El balonmano de Huracán participa federadamente en las categorías de Fe.Me.Bal.",
      "dificultad": "Media"
    },
    {
      "id": 98,
      "pregunta": "¿Qué campeón mundial de hockey sobre patines con Argentina vistió la casaca del Globo?",
      "opciones": [
        "Daniel Martinazzo y grandes figuras de la época de oro",
        "Luciana Aymar",
        "Carlos Retegui",
        "Pedro Ibarra"
      ],
      "correcta": 0,
      "explicacion": "Huracán contó en sus filas y aportó leyendas a la Selección Argentina campeona del mundo de hockey sobre patines.",
      "dificultad": "Difícil"
    },
    {
      "id": 99,
      "pregunta": "¿En qué año se fundó el complejo deportivo de 'La Quemita'?",
      "opciones": [
        "1983",
        "1970",
        "1995",
        "1947"
      ],
      "correcta": 0,
      "explicacion": "Las tierras de Mariano Acosta comenzaron a ser desarrolladas activamente a partir de 1983.",
      "dificultad": "Media"
    },
    {
      "id": 100,
      "pregunta": "¿Cuántas canchas reglamentarias de fútbol 11 posee aproximadamente el predio La Quemita?",
      "opciones": [
        "Más de 9 canchas de césped natural y sintético",
        "Solo 2 canchas",
        "4 canchas",
        "1 cancha"
      ],
      "correcta": 0,
      "explicacion": "En sus 14 hectáreas, La Quemita alberga más de 9 campos de juego reglamentarios para inferiores y primera.",
      "dificultad": "Fácil"
    },
    {
      "id": 101,
      "pregunta": "¿En qué año combatió Ringo Bonavena contra Joe Frazier en el Madison Square Garden tirándolo dos veces a la lona?",
      "opciones": [
        "1968",
        "1972",
        "1965",
        "1975"
      ],
      "correcta": 0,
      "explicacion": "En diciembre de 1968, Ringo derribó dos veces al temible Frazier en una batalla épica por la corona mundial.",
      "dificultad": "Difícil"
    },
    {
      "id": 102,
      "pregunta": "¿Qué disciplina artística multipremiada entrena habitualmente en la pista central de Caseros 3159?",
      "opciones": [
        "Patín Artístico",
        "Danza Clásica",
        "Gimnasia Rítmica",
        "Tango de Salón"
      ],
      "correcta": 0,
      "explicacion": "El Patín Artístico del Globo cuenta con medallas en campeonatos sudamericanos y copas de danza.",
      "dificultad": "Fácil"
    },
    {
      "id": 103,
      "pregunta": "¿En qué torneo internacional debutó el equipo de Futsal Femenino de Huracán tras su gran campaña en AFA?",
      "opciones": [
        "Copa de Oro y Torneos Sudamericanos de Clubes",
        "Copa Libertadores",
        "Mundial de Clubes",
        "Copa Mercosur"
      ],
      "correcta": 0,
      "explicacion": "Las Quemeras han representado a la institución en los principales torneos metropolitanos y nacionales de fútbol de salón.",
      "dificultad": "Media"
    },
    {
      "id": 104,
      "pregunta": "¿Qué espacio específico de preservación histórica comenzará a desarrollarse en el Estadio Tomás A. Ducó?",
      "opciones": [
        "El Museo Oficial del Club Atlético Huracán",
        "Un nuevo restaurante",
        "Una tribuna adicional",
        "Un estacionamiento subterráneo"
      ],
      "correcta": 0,
      "explicacion": "El Club Atlético Huracán anunció el proyecto para la creación de su Museo Oficial definitivo en el Palacio Ducó.",
      "dificultad": "Fácil"
    },
    {
      "id": 105,
      "pregunta": "¿A través de qué canales pueden los hinchas y socios aportar reliquias históricas para el futuro Museo?",
      "opciones": [
        "WhatsApp oficial y correo electrónico institucional (museo@cahuracan.com)",
        "Únicamente por carta postal",
        "Solo presencialmente en AFA",
        "Por mensaje de texto SMS"
      ],
      "correcta": 0,
      "explicacion": "La campaña comunitaria dispone de botones directos de WhatsApp y correo electrónico para enviar detalles y fotos de objetos históricos.",
      "dificultad": "Fácil"
    }
  ],
  "mapamundi": [
    {
      "lugar": "Montevideo, Uruguay",
      "pais": "Uruguay",
      "coordenadas": [
        -34.8941,
        -56.1656
      ],
      "detalle": "Primeros cruces internacionales rioplatenses por las Copas de Honor e Ibarguren en la década de 1920.",
      "anio": "1920s"
    },
    {
      "lugar": "Madrid y Barcelona, España",
      "pais": "España",
      "coordenadas": [
        40.4168,
        -3.7038
      ],
      "detalle": "Mítica gira internacional de Huracán por Europa en la década de 1970 mostrando el fútbol lírico de Menotti, Babington y Houseman.",
      "anio": "1974"
    },
    {
      "lugar": "Bogotá, Colombia",
      "pais": "Colombia",
      "coordenadas": [
        4.711,
        -74.0721
      ],
      "detalle": "Final de la Copa Sudamericana 2015 en el Estadio Nemesio Camacho El Campín ante Independiente Santa Fe.",
      "anio": "2015"
    },
    {
      "lugar": "Río de Janeiro, Brasil",
      "pais": "Brasil",
      "coordenadas": [
        -22.9068,
        -43.1729
      ],
      "detalle": "Cruces en el mítico Estadio Maracaná y São Januário por la Copa Libertadores de América.",
      "anio": "2015-2016"
    },
    {
      "lugar": "San Juan, Argentina",
      "pais": "Argentina",
      "coordenadas": [
        -31.5375,
        -68.5364
      ],
      "detalle": "Sede de la doble corona de gloria: Campeón Copa Argentina 2014 y Campeón Supercopa Argentina 2014 en el Estadio Bicentenario.",
      "anio": "2014-2015"
    },
    {
      "lugar": "Milán, Italia",
      "pais": "Italia",
      "coordenadas": [
        45.4642,
        9.19
      ],
      "detalle": "Partidos amistosos y cuna de filiales internacionales de Huracán en territorio europeo.",
      "anio": "Internacional"
    }
  ],
  "emblemas": [
    {
      "id": "emblema-1908",
      "anio": "1908",
      "nombre": "Sello Fundacional 'El Huracán'",
      "periodo": "1908 - 1910",
      "epoca": "Los Orígenes en Ventana 859",
      "descripcion": "El primer distintivo documentado del club. Un sello tipográfico circular grabado en la librería de Chiclana con la leyenda 'Club Atlético El Huracán - Calle Ventana 859'. Se estampaba en los carnets provisorios y en las actas de asamblea de los jóvenes fundadores.",
      "tipo": "Sello Circular Tipográfico",
      "color": "#1E293B",
      "fondo": "#F8FAFC",
      "detalles": [
        "Grabado en la librería de Av. Chiclana por Ernesto Dell'Isola.",
        "Texto circular con la dirección histórica de fundación.",
        "Pieza histórica conservada en archivos notariales del barrio."
      ]
    },
    {
      "id": "emblema-1910",
      "anio": "1910",
      "nombre": "El Globo de Jorge Newbery",
      "periodo": "1910 - 1920",
      "epoca": "Autorización del Pionero",
      "descripcion": "Inspirado en la colosal hazaña del Ing. Jorge Newbery al cruzar tres repúblicas a bordo del globo aerostático 'El Huracán' en diciembre de 1909. En mayo de 1911, Newbery envió una carta histórica autorizando formalmente al club a llevar el globo como distintivo oficial. Presentaba el cuerpo esférico con cuerdas de suspensión y la barquilla de mimbre colgante.",
      "tipo": "Aeróstato Clásico con Barquilla y Red",
      "color": "#B91420",
      "fondo": "#FFFFFF",
      "detalles": [
        "Autorizado personalmente por el Ing. Jorge Newbery en mayo de 1911.",
        "Homenaje al globo 'El Huracán' que cruzó Argentina, Uruguay y Brasil.",
        "Primer distintivo gráfico que unió para siempre la aviación con el club."
      ]
    },
    {
      "id": "emblema-1921",
      "anio": "1921 - 1928",
      "nombre": "Globo de la Era Dorada (Tetracampeonato)",
      "periodo": "1921 - 1930",
      "epoca": "Tetracampeón de Primera División",
      "descripcion": "El emblema bordado que acompañó los años más gloriosos del amateurismo, cuando Huracán conquistó cuatro títulos de Primera División (1921, 1922, 1925 invicto y 1928). Globo esférico rojo con gajos definidos y las siglas 'C. A. H.' bordadas en hilo blanco en el centro o al pie del balón.",
      "tipo": "Globo Tetracampeón C.A.H.",
      "color": "#E01E2B",
      "fondo": "#FFFFFF",
      "detalles": [
        "Llevado en el pecho por figuras como Ángel Chiesa y Guillermo Stábile.",
        "Emblema de 4 campeonatos de Primera y Copas Nacionales Ibarguren.",
        "Bordado artesanal de paño y lana."
      ]
    },
    {
      "id": "emblema-1940",
      "anio": "1940s",
      "nombre": "Emblema Monumental Art Déco (Palacio Ducó)",
      "periodo": "1940 - 1960",
      "epoca": "La Época de Oro y las Copas de AFA",
      "descripcion": "Coincidiendo con la construcción del imponente Palacio Tomás Adolfo Ducó (1947) y las Copas Escobar y Británica ganadas por Masantonio, Baldonedo y Tucho Méndez. Silueta estilizada y arquitectónica acorde a la vanguardia Art Déco de la torre de 40 metros del estadio.",
      "tipo": "Silueta Monumental Art Déco",
      "color": "#B91420",
      "fondo": "#F8FAFC",
      "detalles": [
        "Esculpido y fundido en bronce en los accesos del Palacio Ducó.",
        "Diseño simétrico adaptado a la arquitectura moderna del estadio.",
        "Emblema de la época dorada de Herminio Masantonio y Tucho Méndez."
      ]
    },
    {
      "id": "emblema-1973",
      "anio": "1973",
      "nombre": "El Globo del Campeón de Menotti",
      "periodo": "1970s",
      "epoca": "La Poesía Futbolística del '73",
      "descripcion": "La silueta pura y minimalista en el pecho de la camiseta más recordada de la historia del fútbol argentino. El equipo de César Luis Menotti, con Houseman, Brindisi, Babington, Carrascosa y Basile, consagró este globo rojo en todo el continente como sinónimo de belleza y lirismo.",
      "tipo": "Globo Minimalista Campeón '73",
      "color": "#E01E2B",
      "fondo": "#FFFFFF",
      "detalles": [
        "Símbolo de la máxima obra futbolística del Globo.",
        "Diseño limpio y llamativo en casacas de algodón puro.",
        "Reconocido internacionalmente como el emblema del 'Tiki-Tiki'."
      ]
    },
    {
      "id": "emblema-actual",
      "anio": "Actualidad",
      "nombre": "Emblema Oficial Registrado AFA",
      "periodo": "1990 - Presente",
      "epoca": "Era Moderna e Institucional",
      "descripcion": "Versión vectorizada oficial y registrada del Club Atlético Huracán. Normalizada para indumentaria oficial de AFA, competencias de CONMEBOL (Copa Libertadores y Sudamericana), vitrinas y papelería institucional. Mantiene la esencia del aeróstato de Newbery con líneas limpias y gajos rojos sobre blanco.",
      "tipo": "Emblema Oficial Vectorizado",
      "color": "#E01E2B",
      "fondo": "#FFFFFF",
      "detalles": [
        "Registrado ante la Asociación del Fútbol Argentino (AFA) y CONMEBOL.",
        "Presente en las conquistas de Copa Argentina 2014 y Supercopa 2014.",
        "Identidad visual consolidada en todas las disciplinas y sedes."
      ]
    }
  ]
};
