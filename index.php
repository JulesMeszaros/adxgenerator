<!DOCTYPE html>

<?php

$directory = "generatorassets/background/";
$backgrounds = 0;
$files = glob($directory . "*");
if ($files){
 $backgrounds = count($files);
}
?>

<?php

$directory = "generatorassets/crownone/";
$crownones = 0;
$files = glob($directory . "*");
if ($files){
 $crownones = count($files);
}
?>

<?php

$directory = "generatorassets/crowntwo/";
$crowntwos = 0;
$files = glob($directory . "*");
if ($files){
 $crowntwos = count($files);
}
?>

<?php

$directory = "generatorassets/head/";
$heads = 0;
$files = glob($directory . "*");
if ($files){
 $heads = count($files);
}
?>

<?php

$directory = "generatorassets/eyes/";
$eyess = 0;
$files = glob($directory . "*");
if ($files){
 $eyess = count($files);
}
?>

<?php

$directory = "generatorassets/shoulders/";
$shoulderss = 0;
$files = glob($directory . "*");
if ($files){
 $shoulderss = count($files);
}
?>

<?php

$directory = "generatorassets/nose/";
$noses = 0;
$files = glob($directory . "*");
if ($files){
 $noses = count($files);
}
?>

<?php

$directory = "generatorassets/mouth/";
$mouths = 0;
$files = glob($directory . "*");
if ($files){
 $mouths = count($files);
}
?>

<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>ADX LION GENERATOR</title>

    <script type="text/javascript">
    window.onload = function(){
      nbr_heads = <?php echo $heads; ?>; //change le nombre d'images de tete
      nbr_crown1 = <?php echo $crownones; ?>; //idem pour la couronne 1
      nbr_crown2 = <?php echo $crowntwos; ?>; //idem etc
      nbr_eyes = <?php echo $eyess; ?>;
      nbr_shoulders = <?php echo $shoulderss; ?>;
      nbr_backgrounds = <?php echo $backgrounds; ?>;
      nbr_mouth = <?php echo $mouths; ?>;
      nbr_nose = <?php echo $noses; ?>;

      t = genererlion();
    }
    </script>


    <style media="screen">
      h1, h2{
        text-align: center;
      }
      #generator-body{
        overflow: hidden;
        border: solid;
      }

      canvas{
        float: left;
      }
    </style>
  </head>
  <body>
    <h1>AEROSOL DELUXE LIONEL.LE GENERATOR</h1>
    <h2><?php echo $heads*$crownones*$crowntwos*$eyess*$shoulderss*$backgrounds; ?> POSSIBLE COMBINAISONS</h2>

    <div align="center" class="" id="generator-body">
      <!--Canvas visible sur la page -->
      <canvas id="canvas" width="800" height="800" style = "border: 5px solid black"></canvas>
      <div id="controls">
        <p>eyes</p>
        <button type="button" name="eyes_next" id="eyes_next">next</button>
        <button type="button" name="eyes_previous" id="eyes_previous">previous</button>
        <p>mouths</p>
        <button type="button" name="mouths_next" id="mouths_next">next</button>
        <button type="button" name="mouths_previous" id="mouths_previous">previous</button>
        <p>noses</p>
        <button type="button" name="noses_next" id="noses_next">next</button>
        <button type="button" name="noses_previous" id="noses_previous">previous</button>
        <p>crown one</p>
        <button type="button" name="crownone_next" id="crownone_next">next</button>
        <button type="button" name="crownone_previous" id="crownone_previous">previous</button>
        <p>crown two</p>
        <button type="button" name="crowntwo_next" id="crowntwo_next">next</button>
        <button type="button" name="crowntwo_previous" id="crowntwo_previous">previous</button>
        <p>face</p>
        <button type="button" name="face_next" id="face_next">next</button>
        <button type="button" name="face_previous" id="face_previous">previous</button>
        <p>shoulders</p>
        <button type="button" name="shoulders_next" id="shoulders_next">next</button>
        <button type="button" name="shoulders_previous" id="shoulders_previous">previous</button>
        <p>background</p>
        <button type="button" name="background_next" id="background_next">next</button>
        <button type="button" name="background_previous" id="background_previous">previous</button>
        <br>
      </div>
      <!--Canvas invisible sur la page qui sert à gnerer l'image en taille réelle pour le download-->
      <canvas id="canvas-invisible" style="display: none" width="2085" height="2085"></canvas>
      <div class="generator-buttons">
        <button type="button" name="button" onClick="t = genererlion();">GENERATE</button>
        <button type="button" id="download">SAVE</button>
      </div>
    </div>
    <p><i>~ this is not a NFT project ~</i></p>
  </body>
</html>
<script type="text/javascript" src="script.js"></script>
<script type="text/javascript" src="scriptbuttons.js"></script>
<script type="text/javascript">
  var canvasInvisible = document.getElementById('canvas-invisible');

  var download = document.getElementById('download');
  //permet de telecharger  l'image en clliquand sur le bouton "SAVE"
  download.addEventListener('click', function (e) {


    const link = document.createElement('a');
    link.download = 'lion.png';

    link.href = canvasInvisible.toDataURL();
    link.click();
    link.delete;
  });

//boutons



</script>
