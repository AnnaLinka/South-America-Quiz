<?php include 'header.php'; ?>

<body class="game">

  <section class="main">
    <div class="container">
      <section class="text">

        <div class="instruction">
          <p class="question">
            W którym z krajów stolicą jest...?
          </p>

          <div id="textSlider">
            <p></p>
            <p class="chile">Santiago de Chile</p>
            <p class="falklands">Stanley</p>
            <p class="colombia">Bogota</p>
            <p class="argentina">Buenos Aires</p>
            <p class="uruguay">Montevideo</p>
            <p class="brazil">Brasilia</p>
            <p class="paraguay">Asuncion</p>
            <p class="guianaf">Cayenne</p>
            <p class="guyana">Georgetown</p>
            <p class="suriname">Paramaribo</p>
            <p class="venezuela">Caracas</p>
            <p class="bolivia">Sucre</p>
            <p class="peru">Lima</p>
            <p class="ecuador">Quito</p>
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
