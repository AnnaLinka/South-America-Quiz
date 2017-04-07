<?php include 'header.php'; ?>

<body class="game">

  <section class="main">
    <div class="container">
      <section class="text">

        <div class="instruction">
          <p class="question">
            Gdzie leży...?
          </p>

          <div id="textSlider">
            <p></p>
            <p class="chile">Chile</p>
            <p class="falklands">Falklandy</p>
            <p class="colombia">Kolumbia</p>
            <p class="argentina">Argentyna</p>
            <p class="uruguay">Urugwaj</p>
            <p class="brazil">Brazylia</p>
            <p class="paraguay">Paragwaj</p>
            <p class="guianaf">Gujana Francuska</p>
            <p class="guyana">Gujana</p>
            <p class="suriname">Surinam</p>
            <p class="venezuela">Wenezuela</p>
            <p class="bolivia">Boliwia</p>
            <p class="peru">Peru</p>
            <p class="ecuador">Ekwador</p>
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
