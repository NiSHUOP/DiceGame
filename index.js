var randomNumber1=Math.floor(Math.random()*6)+1;
var randPng1 = "dice"+randomNumber1+".png";
var randImg1 = "images/"+randPng1;
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src",randImg1);
var randomNumber2=Math.floor(Math.random()*6)+1;
var randPng2 = "dice"+randomNumber2+".png";
var randImg2 = "images/"+randPng2;
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src",randImg2);

if(randomNumber1 > randomNumber2){
  document.querySelector("h1").textContent="🚩Player 1 win.";
}
else if(randomNumber1 < randomNumber2){
  document.querySelector("h1").textContent="Player 2 win.🚩";
}
else{
  document.querySelector("h1").textContent="🚩Game is Draw🚩";
}
