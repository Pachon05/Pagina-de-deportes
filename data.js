const data = {
  futbol: [
    {
      titulo: "Messi vuelve al Barça",
      resumen: "Una noticia que sacude al fútbol mundial.",
      contenido: `
        <div style="padding: 15px; border: 1px solid #eee; margin-bottom: 10px; border-radius: 5px; background-color: #f9f9f9;">
          <p>Después de dos años en la MLS, Lionel Messi ha confirmado su regreso al FC Barcelona para la temporada 2025-2026.</p>
          <p>La afición azulgrana celebra la vuelta del ídolo que les dio tantas alegrías. Joan Laporta y Xavi Hernández han dicho que su incorporación será clave para reconstruir el equipo.</p>
          <p>La presentación oficial se realizará en el Camp Nou el próximo lunes ante miles de aficionados.</p>
          <p>Más información en
            <a href="https://www.sport.es/es/noticias/barca/messi-mundial-objetivo-volver-barca-116497299" target="_blank" style="color: #007bff; text-decoration: none;">
              <b>SPORT</b>
            </a>.
          </p>
        </div>
      `,
      fecha: "<span style='color: #555;'>8 de mayo de 2025</span>",
      autor: "<span style='font-style: italic;'>Carla Torres</span>",
      lugar: "Barcelona, España",
      imagen: "<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Lionel_Messi_20180626.jpg/640px-Lionel_Messi_20180626.jpg' alt='Messi' style='width: 100%; max-width: 300px; border-radius: 5px;'>",
    },
    {
      titulo: "Real Madrid gana la Champions",
      resumen: "Una final inolvidable con gol de Vinícius.",
      contenido: `
        <div style="padding: 15px; border: 1px solid #eee; margin-bottom: 10px; border-radius: 5px; background-color: #f9f9f9;">
          <p>El Real Madrid derrotó al Borussia Dortmund 2-0 con goles de Dani Carvajal y Vinícius Jr., consiguiendo su título número 15 en la UEFA Champions League.</p>
          <p>El partido fue disputado en el estadio Wembley ante más de 90,000 espectadores.</p>
          <p>Carlo Ancelotti se convierte en el entrenador más laureado de la historia del torneo.</p>
          <p>Detalles completos en
            <a href="https://espndeportes.espn.com/futbol/europa/nota/_/id/13733961/borussia-dortmund-vs-real-madrid-final-champions-league-estadio-wembley" target="_blank" style="color: #007bff; text-decoration: none;">
              <b>ESPN Deportes</b>
            </a>.
          </p>
        </div>
      `,
      fecha: "<span style='color: #555;'>5 de mayo de 2025</span>",
      autor: "<span style='font-style: italic;'>Luis Méndez</span>",
      lugar: "Londres, Inglaterra",
      imagen: "<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Real_Madrid_CF.svg/512px-Real_Madrid_CF.svg.png' alt='Real Madrid' style='width: 100%; max-width: 300px; border-radius: 5px;'>",
    },
  ],
  basquetbol: [
    {
      titulo: "Lakers en la final",
      resumen: "Victoria agónica contra los Warriors.",
      contenido: `
        <div style="padding: 15px; border: 1px solid #eee; margin-bottom: 10px; border-radius: 5px; background-color: #f9f9f9;">
          <p>Los Angeles Lakers se impusieron 113-111 a los Golden State Warriors en el séptimo juego de las semifinales de conferencia.</p>
          <p>LeBron James anotó 38 puntos y fue clave en los últimos minutos del partido.</p>
          <p>Ahora enfrentarán a los Denver Nuggets en la final del Oeste.</p>
          <p>Lee más en
            <a href="https://www.latimes.com/espanol/deportes/articulo/2025-04-30/los-angeles-lakers-minnesota-timberwolves-nba-playoff-game-5" target="_blank" style="color: #007bff; text-decoration: none;">
              <b>Los Angeles Times</b>
            </a>.
          </p>
        </div>
      `,
      fecha: "<span style='color: #555;'>6 de mayo de 2025</span>",
      autor: "<span style='font-style: italic;'>Marcelo Ruiz</span>",
      lugar: "Los Ángeles, EE.UU.",
      imagen: "<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/LeBron_James_Lakers.jpg/640px-LeBron_James_Lakers.jpg' alt='LeBron James' style='width: 100%; max-width: 300px; border-radius: 5px;'>",
    },
    {
      titulo: "All-Star Game 2025",
      resumen: "Las estrellas de la NBA se preparan para el evento del año.",
      contenido: `
        <div style="padding: 15px; border: 1px solid #eee; margin-bottom: 10px; border-radius: 5px; background-color: #f9f9f9;">
          <p>El All-Star Game 2025 se celebró en Chicago y contó con la presencia de las grandes figuras de la NBA.</p>
          <p>Stephen Curry, Luka Dončić y Giannis Antetokounmpo encabezaron la lista de convocados por el público.</p>
          <p>Se espera una gran fiesta del baloncesto con múltiples actividades y concursos.</p>
          <p>Detalles del evento en
            <a href="https://www.espn.com/nba/story/_/id/42878313/nba-all-stars-2025-schedule-location-rosters-format-news" target="_blank" style="color: #007bff; text-decoration: none;">
              <b>ESPN</b>
            </a>.
          </p>
        </div>
      `,
      fecha: "<span style='color: #555;'>3 de mayo de 2025</span>",
      autor: "<span style='font-style: italic;'>Ana López</span>",
      lugar: "Chicago, EE.UU.",
      imagen: "<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Stephen_Curry_dribbling_2017.jpg/640px-Stephen_Curry_dribbling_2017.jpg' alt='Stephen Curry' style='width: 100%; max-width: 300px; border-radius: 5px;'>",
    },
  ],
  tenis: [
    {
      titulo: "Alcaraz gana Wimbledon",
      resumen: "El joven español conquista su segundo Grand Slam.",
      contenido: `
        <div style="padding: 15px; border: 1px solid #eee; margin-bottom: 10px; border-radius: 5px; background-color: #f9f9f9;">
          <p>Carlos Alcaraz venció en cinco sets a Novak Djokovic en una final histórica de Wimbledon.</p>
          <p>El marcador final fue 6-7, 7-5, 6-3, 4-6 y 6-4 tras casi cinco horas de juego.</p>
          <p>Alcaraz se consolida como el número uno del ranking mundial.</p>
          <p>Más información en
            <a href="https://www.elpais.com.co/deportes/carlos-alcaraz-gana-su-segundo-titulo-consecutivo-de-wimbledon-tras-derrotar-a-djokovic-1408.html" target="_blank" style="color: #007bff; text-decoration: none;">
              <b>El País</b>
            </a>.
          </p>
        </div>
      `,
      fecha: "<span style='color: #555;'>2 de mayo de 2025</span>",
      autor: "<span style='font-style: italic;'>Isabel Sánchez</span>",
      lugar: "Londres, Inglaterra",
      imagen: "<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Carlos_Alcaraz_2023.jpg/640px-Carlos_Alcaraz_2023.jpg' alt='Carlos Alcaraz' style='width: 100%; max-width: 300px; border-radius: 5px;'>",
    },
    {
      titulo: "Nadal se retira del tenis",
      resumen: "El adiós de una leyenda del deporte.",
      contenido: `
        <div style="padding: 15px; border: 1px solid #eee; margin-bottom: 10px; border-radius: 5px; background-color: #f9f9f9;">
          <p>Rafael Nadal ha anunciado oficialmente su retiro del tenis profesional luego de su participación en Roland Garros 2025.</p>
          <p>El mallorquín de 38 años se despide con 22 títulos de Grand Slam y una carrera marcada por la pasión y la lucha.</p>
          <p>El mundo del deporte lo despide con honores y agradecimiento eterno.</p>
          <p>Lee más en
            <a href="https://espndeportes.espn.com/tenis/nota/_/id/14286808/rafael-nadal-anuncio-su-retiro-del-tenis-profesional-atp" target="_blank" style="color: #007bff; text-decoration: none;">
              <b>ESPN Deportes</b>
            </a>.
          </p>
        </div>
      `,
      fecha: "<span style='color: #555;'>1 de mayo de 2025</span>",
      autor: "<span style='font-style: italic;'>Fernando Ríos</span>",
      lugar: "París, Francia",
      imagen: "<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Rafael_Nadal_2011_Roland_Garros.jpg/640px-Rafael_Nadal_2011_Roland_Garros.jpg' alt='Rafael Nadal' style='width: 100%; max-width: 300px; border-radius: 5px;'>",
    },
  ],
};
