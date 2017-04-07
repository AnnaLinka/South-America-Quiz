<?php include 'header.php'; ?>

<body class="game">

  <section class="main">
    <div class="container">
      <section class="text">

        <div class="instruction">
          <p class="question">
            Który to kraj?
          </p>

          <div id="textSlider">
            <p></p>
            <p class="chile">Słynie z hodowli łososia i Pustyni Atacama.</p>
            <p class="guianaf">Należy do Francji.</p>
            <p class="falklands">O to terytorium spierają się Argentyńczycy i Wielka Brytania.</p>
            <p class="colombia">Uprawiają tu najwyższej klasy kawę, a nielegalnie także kokę.</p>
            <p class="guyana">Łatwiej porozumieć się tu z miejscowymi, bowiem językiem urzędowym jest angielski.</p>
            <p class="argentina">Wznosi się tam najwyższy szczyt Andów - Aconcagua - ma 6 962 m.n.p.m.</p>
            <p class="uruguay">Czasem zwany Szwajcarią Ameryki Południowej, ze względu na swoją europejskość i rozwój gospodarczy.</p>
            <p class="brazil">Połowę powierzchni zajmuje tu Amazonia.</p>
            <p class="paraguay">Każdy chodzi tam z termosem i popija yerba mate.</p>
            <p class="suriname">Mówi się tu po holendersku.</p>
            <p class="venezuela">Benzyna kosztuje tu mniej niż woda.</p>
            <p class="bolivia">Znajduje się tu największa na świecie pustynia słona - Salar de Uyuni.</p>
            <p class="peru"> W tajemniczym Machu Picchu mieszkali tam Inkowie.</p>
            <p class="ecuador">Położony na równiku, jego częścią są wyspy Galapagos.</p>
          </div>
        </div>

        <div class="bravo">
          <!-- <p class="answer"> </p> -->
          <p class="bravo">  </p>
        </div>

        <div class="result">
          <span class="points">0</span>
        </div>

        <a href="indexEnd.php"><button class="newgame">KONIEC</button></a>
      </section>

      <section class="map">
        <div class="map">
          <?php include 'Latin_America map.svg'; ?>
        </div>
      </section>
    </div>
  </section>
