# Museo Quemero - Club Atlético Huracán
### Archivo Histórico, Estadístico y Patrimonio del Globo

Plataforma digital interactiva inspirada en la arquitectura de información y experiencia de usuario de [Museo Granate](https://museogranate.clublanus.com/), adaptada integralmente a la identidad, mística y gloria del **Club Atlético Huracán** ("El Globo", Parque Patricios, Buenos Aires, Argentina).

---

## 🌟 Características Principales

- **Un día como hoy**: Módulo dinámico con efemérides del calendario quemero (nacimientos de ídolos, títulos, goles legendarios y partidos disputados).
- **Podio de Leyendas**:
  - Máximos goleadores históricos (Herminio Masantonio con 254 goles, Miguel Brindisi con 171, Emilio Baldonedo con 165, Carlos Babington con 130, etc.).
  - Récords de presencias oficiales (Jorge Hugo Alberti con 393 partidos, Masantonio, Brindisi, Carrascosa, Houseman).
- **Base de Datos de Jugadores**:
  - Filtro por década (1920s a 2020s) y puesto (Delanteros, Mediocampistas, Defensores, Arqueros).
  - Fichas históricas individuales con promedio de gol, bio, títulos y momentos destacados.
- **Directores Técnicos**:
  - Menotti (Metropolitano 1973), Cappa (Tiki-Tiki 2009), Mohamed (Ascenso 2007), Apuzzo & Kudelka (Copa Argentina y Supercopa 2014), Stábile.
- **Palmarés Oficial (13 Estrellas)**:
  - 5 Campeonatos de Primera División (1921, 1922, 1925 Invicto, 1928, 1973).
  - 8 Copas Nacionales Oficiales de AFA (1920, 1922, 1925, 1942, 1943, 1944, Copa Argentina 2014, Supercopa 2014).
- **Partidos Legendarios**:
  - Consagración 1973 en el Ducó, la noche de los penales de Marcos Díaz en San Juan 2014, el 1-0 a River en la Supercopa, el histórico 5-1 a San Lorenzo en 1944, el invento del Gol Olímpico por Cesáreo Onzari en 1924, etc.
- **Rivales & El Clásico de Barrio**:
  - Historial detallado contra San Lorenzo de Almagro ("El clásico de barrio más grande del mundo") y los grandes del fútbol argentino.
- **Estadios & Patrimonio**:
  - Estadio Tomás Adolfo Ducó ("El Palacio") con desglose de tribunas (Bonavena, Colonia, Miravé, Alcorta).
  - Campo de Deportes "La Quemita" y Sede Social de Av. Caseros.
- **Colección de Camisetas**:
  - Evolución histórica de las casacas desde 1908 (algodón con globo bordado) hasta la actualidad.
- **Mapamundi Quemero**:
  - Giras internacionales y presencia quemera en el mundo.
- **Trivia Quemera Interactiva**:
  - Juego de preguntas y respuestas con contador de aciertos, rachas y diploma de conocimiento según puntaje.
- **Buscador Global Unificado**:
  - Búsqueda en tiempo real de jugadores, técnicos, copas y partidos.

---

## 🚀 Cómo Ejecutar el Proyecto

### Opción 1: Lanzador de Windows (Recomendado)
Haz doble clic en el archivo:
```
iniciar_museo.bat
```
Esto levantará el servidor en Python y abrirá automáticamente tu navegador en `http://localhost:8080`.

### Opción 2: Desde la consola con Python
Abre una terminal en esta carpeta y ejecuta:
```bash
py server.py
```

### Opción 3: Abrir directamente el archivo HTML
Haz doble clic en `index.html` para abrirlo en cualquier navegador web moderno sin necesidad de servidores.

---

## 📁 Estructura del Proyecto

```
museo-huracan/
│
├── index.html               # Aplicación Single-Page Application (SPA) principal
├── server.py                # Servidor HTTP local en Python 3.12 con auto-arranque
├── iniciar_museo.bat        # Lanzador para Windows de un solo clic
├── README.md                # Documentación del proyecto
│
├── css/
│   └── styles.css           # Estilos personalizados, colores oficiales y diseño responsivo
│
└── js/
    ├── app.js               # Lógica de navegación, búsqueda global, filtros y trivia
    └── data/
        └── database.js      # Base de datos histórica curada y enriquecida de Huracán
```
