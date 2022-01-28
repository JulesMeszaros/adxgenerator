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

      genererlion();
    }
    </script>

    <script type="text/javascript" src="script.js"></script>

  </head>
  <body>
    <h1>AEROSOL DELUXE LIONEL.LE GENERATOR: <?php echo $heads*$crownones*$crowntwos*$eyess*$shoulderss*$backgrounds; ?> POSSIBLE COMBINAISONS</h1>

    <div align="center" class="" id="generator-body">
      <!--Canvas visible sur la page -->
      <canvas id="canvas" width="800" height="800" style = "border: 5px solid black"></canvas>
      <!--Canvas invisible sur la page qui sert à gnerer l'image en taille réelle pour le download-->
      <canvas id="canvas-invisible" style="display: none" width="2085" height="2085"></canvas>
      <div class="generator-buttons">
        <button type="button" name="button" onClick="genererlion();">GENERATE</button>
        <button type="button" id="download">SAVE</button>
      </div>
    </div>
  </body>
</html>

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



</script>
