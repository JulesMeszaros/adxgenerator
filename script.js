function genererlion(){
  //background
  var background = new Image();
  var backgroundnum = Math.floor(Math.random()*nbr_backgrounds+1);
  var backgroundname = "generatorassets/background/background"+backgroundnum+".png";
  background.src=backgroundname;

  //head
  var lionhead = new Image();
  var lionheadnum = Math.floor(Math.random()*nbr_heads+1);
  var lionheadname = "generatorassets/head/head"+lionheadnum+".png";
  lionhead.src=lionheadname;

  //crown 1
  var lioncrownone = new Image();
  var lioncrownonenum = Math.floor(Math.random()*nbr_crown1+1);
  var lioncrownonename = "generatorassets/crownone/crownone"+lioncrownonenum+".png";
  lioncrownone.src=lioncrownonename;

  //crown 2
  var lioncrowntwo = new Image();
  var lioncrowntwonum = Math.floor(Math.random()*nbr_crown2+1);
  var lioncrowntwoname = "generatorassets/crowntwo/crowntwo"+lioncrowntwonum+".png";
  lioncrowntwo.src=lioncrowntwoname;

  //eyes
  var lioneyes = new Image();
  var lioneyesnum = Math.floor(Math.random()*nbr_eyes+1);
  var lioneyesname = "generatorassets/eyes/eyes"+lioneyesnum+".png";
  lioneyes.src=lioneyesname;

  //shoulders
  var lionshoulders = new Image();
  var lionshouldersnum = Math.floor(Math.random()*nbr_shoulders+1);
  var lionshouldersname = "generatorassets/shoulders/shoulders"+lionshouldersnum+".png";
  lionshoulders.src=lionshouldersname;

  //BUILDS

  //BUILDS

  //booleen permettant de savoir si chaque partie est chargée
  var head_loaded = false;
  var crownone_loaded = false;
  var crowntwo_loaded = false;
  var eyes_loaded = false;
  var shooulders_loaded = false;
  var background_loaded = false;


  background.onload = function(){
    buildlion(lionhead, lioncrownone, lioncrowntwo, lionshoulders, lioneyes, background);
    buildInvisibleLion(lionhead, lioncrownone, lioncrowntwo, lionshoulders, lioneyes, background);
    background_loaded = true;
  }

  lionhead.onload = function(){
    buildlion(lionhead, lioncrownone, lioncrowntwo, lionshoulders, lioneyes, background);
    buildInvisibleLion(lionhead, lioncrownone, lioncrowntwo, lionshoulders, lioneyes, background);
    head_loaded = true;
  }

  lioncrownone.onload = function(){
    buildlion(lionhead, lioncrownone, lioncrowntwo, lionshoulders, lioneyes, background);
    buildInvisibleLion(lionhead, lioncrownone, lioncrowntwo, lionshoulders, lioneyes, background);
    crownone_loaded = true;
  }

  lioncrowntwo.onload = function(){
    buildlion(lionhead, lioncrownone, lioncrowntwo, lionshoulders, lioneyes, background);
    buildInvisibleLion(lionhead, lioncrownone, lioncrowntwo, lionshoulders, lioneyes, background);
    var crowntwo_loaded = true;
  }

  lioneyes.onload = function(){
    buildlion(lionhead, lioncrownone, lioncrowntwo, lionshoulders, lioneyes, background);
    buildInvisibleLion(lionhead, lioncrownone, lioncrowntwo, lionshoulders, lioneyes, background);
    eyes_loaded = true;
  }

  lionshoulders.onload = function(){
    buildlion(lionhead, lioncrownone, lioncrowntwo, lionshoulders, lioneyes, background);
    buildInvisibleLion(lionhead, lioncrownone, lioncrowntwo, lionshoulders, lioneyes, background);
    shooulders_loaded = true;
  }

  return{"background": background, "head": lionhead, "crownone": lioncrownone, "crowntwo": lioncrowntwo, "eyes": lioneyes, "shoulders": lionshoulders};
}

function buildlion(head, crown1, crown2, shoulders, eyes, background){
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  canvas.width = 800;
  canvas.height = 800;

  //draw head
  ctx.drawImage(background,(2085-background.width)/2,00, 800, 800)
  ctx.drawImage(shoulders,(2085-shoulders.width)/2,0, 800, 800)
  ctx.drawImage(crown1,(2085-crown1.width)/2,0, 800, 800)
  ctx.drawImage(crown2,(2085-crown2.width)/2,0, 800, 800)
  ctx.drawImage(head,(2085-head.width)/2,0, 800, 800)
  ctx.drawImage(eyes,(2085-eyes.width)/2,0, 800, 800)

}

function buildInvisibleLion(head, crown1, crown2, shoulders, eyes, background){
  var canvas = document.getElementById('canvas-invisible');
  var ctxi = canvas.getContext('2d');
  canvas.width = 2085;
  canvas.height = 2085;

  //draw head
  ctxi.drawImage(background,(2085-background.width)/2,00, 2085, 2085);
  ctxi.drawImage(shoulders,(2085-shoulders.width)/2,0, 2085, 2085);
  ctxi.drawImage(crown1,(2085-crown1.width)/2,0, 2085, 2085);
  ctxi.drawImage(crown2,(2085-crown2.width)/2,0, 2085, 2085);
  ctxi.drawImage(head,(2085-head.width)/2,0, 2085, 2085);
  ctxi.drawImage(eyes,(2085-eyes.width)/2,0, 2085, 2085);

  return canvas;
}
