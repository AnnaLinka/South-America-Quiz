<!DOCTYPE html>
<html lang="pl-PL">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Quiz o Ameryce Południowej</title>
    <link rel="stylesheet" href="./css/style.css" />
    <link href="https://fonts.googleapis.com/css?family=Sorts+Mill+Goudy" rel="stylesheet">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <script src="js/appf.js"></script>
</head>


<body class="game">

  <section class="main">
    <div class="container">
      <section class="text">

        <div class="instruction">
          <p class="question">
            Gdzie powiewa taka flaga?
          </p>

          <div id="slider_flags">
              <div class="flags_container">
                <div class="slide argentina"><img src="flags/ar-lgflag.gif"></div>
                <div class="slide venezuela"><img src="flags/ve-lgflag.gif"></div>
                <div class="slide bolivia"><img src="flags/bl-lgflag.gif"></div>
                <div class="slide uruguay"><img src="flags/uy-lgflag.gif"></div>
                <div class="slide peru"><img src="flags/pe-lgflag.gif"></div>
                <div class="slide paraguay"><img src="flags/pa-lgflag.gif"></div>
                <div class="slide brazil"><img src="flags/br-lgflag.gif"></div>
                <div class="slide suriname"><img src="flags/ns-lgflag.gif"></div>
                <div class="slide chile"><img src="flags/ci-lgflag.gif"></div>
                <div class="slide ecuador"><img src="flags/ec-lgflag.gif"></div>
                <div class="slide falklands"><img src="flags/fk-lgflag.gif"></div>
                <div class="slide guyana"><img src="flags/gy-lgflag.gif"></div>
                <div class="slide colombia"><img src="flags/co-lgflag.gif"></div>
                <div class="slide argentina"><img src="flags/ar-lgflag.gif"></div>
              </div>
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
