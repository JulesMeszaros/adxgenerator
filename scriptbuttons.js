//BOUTONS

var eyes_next = document.getElementById('eyes_next');
var eyes_previous = document.getElementById('eyes_previous');

var mouths_next = document.getElementById('mouths_next');
var mouths_previous = document.getElementById('mouths_previous');

var head_next = document.getElementById('face_next');
var head_previous = document.getElementById('face_previous');

var nose_next = document.getElementById('noses_next');
var nose_previous = document.getElementById('noses_previous');

var shoulders_next = document.getElementById('shoulders_next');
var shoulders_previous = document.getElementById('shoulders_previous');

var background_next = document.getElementById('background_next');
var background_previous = document.getElementById('background_previous');

var crownone_next = document.getElementById('crownone_next');
var crownone_previous = document.getElementById('crownone_previous');

var crowntwo_next = document.getElementById('crowntwo_next');
var crowntwo_previous = document.getElementById('crowntwo_previous');


//eyes
eyes_next.addEventListener('click', function (e){

  lioneyesnum += 1;
  if(lioneyesnum>nbr_eyes){
    lioneyesnum = 1;
  }

  lioneyesname = "generatorassets/eyes/eyes"+lioneyesnum+".png";
  lioneyes = new Image();
  lioneyes.src=lioneyesname;

  t["eyes"] = lioneyes;

  lioneyes.onload = function(){
    buildlion(t["head"], t["crownone"], t["crowntwo"], t["shoulders"], t["eyes"], t["background"], t["nose"],t["mouth"]);
    buildInvisibleLion(t["head"], t["crownone"], t["crowntwo"], t["shoulders"], t["eyes"], t["background"], t["nose"],t["mouth"]);
  }
})

eyes_previous.addEventListener('click', function (e){

  lioneyesnum -= 1;
  if(lioneyesnum<=0){
    lioneyesnum = nbr_eyes;
  }

  lioneyesname = "generatorassets/eyes/eyes"+lioneyesnum+".png";
  lioneyes = new Image();
  lioneyes.src=lioneyesname;

  t["eyes"] = lioneyes;

  lioneyes.onload = function(){
    buildlion(t["head"], t["crownone"], t["crowntwo"], t["shoulders"], t["eyes"], t["background"], t["nose"],t["mouth"]);
    buildInvisibleLion(t["head"], t["crownone"], t["crowntwo"], t["shoulders"], t["eyes"], t["background"], t["nose"],t["mouth"]);
  }
})


//mouths
mouths_next.addEventListener('click', function (e){

  lionmouthnum += 1;
  if(lionmouthnum>nbr_mouth){
    lionmouthnum = 1;
  }

  lionmouthsname = "generatorassets/mouth/mouth"+lionmouthnum+".png";
  lionmouths = new Image();
  lionmouths.src=lionmouthsname;

  t["mouth"] = lionmouths;

  lionmouths.onload = function(){
    buildlion(t["head"], t["crownone"], t["crowntwo"], t["shoulders"], t["eyes"], t["background"], t["nose"],t["mouth"]);
    buildInvisibleLion(t["head"], t["crownone"], t["crowntwo"], t["shoulders"], t["eyes"], t["background"], t["nose"],t["mouth"]);
  }
})

mouths_previous.addEventListener('click', function (e){

  lionmouthnum -= 1;
  if(lionmouthnum<=0){
    lionmouthnum = nbr_mouth;
  }

  lionmouthsname = "generatorassets/mouth/mouth"+lionmouthnum+".png";
  lionmouths = new Image();
  lionmouths.src=lionmouthsname;

  t["mouth"] = lionmouths;

  lionmouths.onload = function(){
    buildlion(t["head"], t["crownone"], t["crowntwo"], t["shoulders"], t["eyes"], t["background"], t["nose"],t["mouth"]);
    buildInvisibleLion(t["head"], t["crownone"], t["crowntwo"], t["shoulders"], t["eyes"], t["background"], t["nose"],t["mouth"]);
  }
})

//head

head_next.addEventListener('click', function (e){

  lionheadnum += 1;
  if(lionheadnum>nbr_heads){
    lionheadnum = 1;
  }

  lionheadsname = "generatorassets/head/head"+lionheadnum+".png";
  lionheads = new Image();
  lionheads.src=lionheadsname;

  t["head"] = lionheads;

  lionheads.onload = function(){
    buildlion(t["head"], t["crownone"], t["crowntwo"], t["shoulders"], t["eyes"], t["background"], t["nose"],t["mouth"]);
    buildInvisibleLion(t["head"], t["crownone"], t["crowntwo"], t["shoulders"], t["eyes"], t["background"], t["nose"],t["mouth"]);
  }
})

head_previous.addEventListener('click', function (e){

  lionheadnum -= 1;
  if(lionheadnum<=0){
    lionheadnum = nbr_heads;
  }

  lionheadsname = "generatorassets/head/head"+lionheadnum+".png";
  lionheads = new Image();
  lionheads.src=lionheadsname;

  t["head"] = lionheads;

  lionheads.onload = function(){
    buildlion(t["head"], t["crownone"], t["crowntwo"], t["shoulders"], t["eyes"], t["background"], t["nose"],t["mouth"]);
    buildInvisibleLion(t["head"], t["crownone"], t["crowntwo"], t["shoulders"], t["eyes"], t["background"], t["nose"],t["mouth"]);
  }
})

//nose

nose_next.addEventListener('click', function (e){

  lionnosenum += 1;
  if(lionnosenum>nbr_nose){
    lionnosenum = 1;
  }

  lionnosesname = "generatorassets/nose/nose"+lionnosenum+".png";
  lionnoses = new Image();
  lionnoses.src=lionnosesname;

  t["nose"] = lionnoses;

  lionnoses.onload = function(){
    buildlion(t["head"], t["crownone"], t["crowntwo"], t["shoulders"], t["eyes"], t["background"], t["nose"],t["mouth"]);
    buildInvisibleLion(t["head"], t["crownone"], t["crowntwo"], t["shoulders"], t["eyes"], t["background"], t["nose"],t["mouth"]);
  }
})

nose_previous.addEventListener('click', function (e){

  lionnosenum -= 1;
  if(lionnosenum<=0){
    lionnosenum = nbr_nose;
  }

  lionnosesname = "generatorassets/nose/nose"+lionnosenum+".png";
  lionnoses = new Image();
  lionnoses.src=lionnosesname;

  t["nose"] = lionnoses;

  lionnoses.onload = function(){
    buildlion(t["head"], t["crownone"], t["crowntwo"], t["shoulders"], t["eyes"], t["background"], t["nose"],t["mouth"]);
    buildInvisibleLion(t["head"], t["crownone"], t["crowntwo"], t["shoulders"], t["eyes"], t["background"], t["nose"],t["mouth"]);
  }
})

//shoulders

shoulders_next.addEventListener('click', function (e){

  lionshouldersnum += 1;
  if(lionshouldersnum>nbr_shoulders){
    lionshouldersnum = 1;
  }

  lionshoulderssname = "generatorassets/shoulders/shoulders"+lionshouldersnum+".png";
  lionshoulderss = new Image();
  lionshoulderss.src=lionshoulderssname;

  t["shoulders"] = lionshoulderss;

  lionshoulderss.onload = function(){
    buildlion(t["head"], t["crownone"], t["crowntwo"], t["shoulders"], t["eyes"], t["background"], t["nose"],t["mouth"]);
    buildInvisibleLion(t["head"], t["crownone"], t["crowntwo"], t["shoulders"], t["eyes"], t["background"], t["nose"],t["mouth"]);
  }
})

shoulders_previous.addEventListener('click', function (e){

  lionshouldersnum -= 1;
  if(lionshouldersnum<=0){
    lionshouldersnum = nbr_shoulders;
  }

  lionshoulderssname = "generatorassets/shoulders/shoulders"+lionshouldersnum+".png";
  lionshoulderss = new Image();
  lionshoulderss.src=lionshoulderssname;

  t["shoulders"] = lionshoulderss;

  lionshoulderss.onload = function(){
    buildlion(t["head"], t["crownone"], t["crowntwo"], t["shoulders"], t["eyes"], t["background"], t["nose"],t["mouth"]);
    buildInvisibleLion(t["head"], t["crownone"], t["crowntwo"], t["shoulders"], t["eyes"], t["background"], t["nose"],t["mouth"]);
  }
})

//background

background_next.addEventListener('click', function (e){
  console.log(backgroundnum)
  backgroundnum += 1;
  if(backgroundnum>nbr_backgrounds){
    backgroundnum = 1;
  }

  lionbackgroundsname = "generatorassets/background/background"+backgroundnum+".png";
  lionbackgrounds = new Image();
  lionbackgrounds.src=lionbackgroundsname;

  t["background"] = lionbackgrounds;

  lionbackgrounds.onload = function(){
    buildlion(t["head"], t["crownone"], t["crowntwo"], t["shoulders"], t["eyes"], t["background"], t["nose"],t["mouth"]);
    buildInvisibleLion(t["head"], t["crownone"], t["crowntwo"], t["shoulders"], t["eyes"], t["background"], t["nose"],t["mouth"]);
  }
})

background_previous.addEventListener('click', function (e){
  console.log(backgroundnum)
  backgroundnum -= 1;
  if(backgroundnum<=0){
    backgroundnum = nbr_backgrounds;
  }

  lionbackgroundsname = "generatorassets/background/background"+backgroundnum+".png";
  lionbackgrounds = new Image();
  lionbackgrounds.src=lionbackgroundsname;

  t["background"] = lionbackgrounds;

  lionbackgrounds.onload = function(){
    buildlion(t["head"], t["crownone"], t["crowntwo"], t["shoulders"], t["eyes"], t["background"], t["nose"],t["mouth"]);
    buildInvisibleLion(t["head"], t["crownone"], t["crowntwo"], t["shoulders"], t["eyes"], t["background"], t["nose"],t["mouth"]);
  }
})

//crown one

crownone_next.addEventListener('click', function (e){
  console.log(lioncrownonenum)
  lioncrownonenum += 1;
  if(lioncrownonenum>nbr_crown1){
    lioncrownonenum = 1;
  }

  lioncrownonesname = "generatorassets/crownone/crownone"+lioncrownonenum+".png";
  lioncrownones = new Image();
  lioncrownones.src=lioncrownonesname;

  t["crownone"] = lioncrownones;

  lioncrownones.onload = function(){
    buildlion(t["head"], t["crownone"], t["crowntwo"], t["shoulders"], t["eyes"], t["background"], t["nose"],t["mouth"]);
    buildInvisibleLion(t["head"], t["crownone"], t["crowntwo"], t["shoulders"], t["eyes"], t["background"], t["nose"],t["mouth"]);
  }
})

crownone_previous.addEventListener('click', function (e){
  console.log(lioncrownonenum)
  lioncrownonenum -= 1;
  if(lioncrownonenum<=0){
    lioncrownonenum = nbr_crown1;
  }

  lioncrownonesname = "generatorassets/crownone/crownone"+lioncrownonenum+".png";
  lioncrownones = new Image();
  lioncrownones.src=lioncrownonesname;

  t["crownone"] = lioncrownones;

  lioncrownones.onload = function(){
    buildlion(t["head"], t["crownone"], t["crowntwo"], t["shoulders"], t["eyes"], t["background"], t["nose"],t["mouth"]);
    buildInvisibleLion(t["head"], t["crownone"], t["crowntwo"], t["shoulders"], t["eyes"], t["background"], t["nose"],t["mouth"]);
  }
})

//crown two

crowntwo_next.addEventListener('click', function (e){
  console.log(lioncrowntwonum)
  lioncrowntwonum += 1;
  if(lioncrowntwonum>nbr_crown2){
    lioncrowntwonum = 1;
  }

  lioncrowntwosname = "generatorassets/crowntwo/crowntwo"+lioncrowntwonum+".png";
  lioncrowntwos = new Image();
  lioncrowntwos.src=lioncrowntwosname;

  t["crowntwo"] = lioncrowntwos;

  lioncrowntwos.onload = function(){
    buildlion(t["head"], t["crownone"], t["crowntwo"], t["shoulders"], t["eyes"], t["background"], t["nose"],t["mouth"]);
    buildInvisibleLion(t["head"], t["crownone"], t["crowntwo"], t["shoulders"], t["eyes"], t["background"], t["nose"],t["mouth"]);
  }
})

crowntwo_previous.addEventListener('click', function (e){
  console.log(lioncrowntwonum)
  lioncrowntwonum -= 1;
  if(lioncrowntwonum<=0){
    lioncrowntwonum = nbr_crown2;
  }

  lioncrowntwosname = "generatorassets/crowntwo/crowntwo"+lioncrowntwonum+".png";
  lioncrowntwos = new Image();
  lioncrowntwos.src=lioncrowntwosname;

  t["crowntwo"] = lioncrowntwos;

  lioncrowntwos.onload = function(){
    buildlion(t["head"], t["crownone"], t["crowntwo"], t["shoulders"], t["eyes"], t["background"], t["nose"],t["mouth"]);
    buildInvisibleLion(t["head"], t["crownone"], t["crowntwo"], t["shoulders"], t["eyes"], t["background"], t["nose"],t["mouth"]);
  }
})
