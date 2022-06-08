$('.slider-principal').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  centerMode: true,
  variableWidth: true,
  autoplay: true,
  autoplaySpeed: 2000
});

function Avaliar(estrela) {
 var url = window.location;
 url = url.toString()
 url = url.split("contato.html");
 url = url[0];

 var s1 = document.getElementById("s1").src;
 var s2 = document.getElementById("s2").src;
 var s3 = document.getElementById("s3").src;
 var s4 = document.getElementById("s4").src;
 var s5 = document.getElementById("s5").src;
 var avaliacao = 0;

if (estrela == 5){ 
 if (s5 == url + "img/estrela.png") {
 document.getElementById("s1").src = "/img/star.png";
 document.getElementById("s2").src = "/img/star.png";
 document.getElementById("s3").src = "/img/star.png";
 document.getElementById("s4").src = "/img/star.png";
 document.getElementById("s5").src = "/img/star.png";
 avaliacao = 5;
 } else {
 document.getElementById("s1").src = "/img/star.png";
 document.getElementById("s2").src = "/img/star.png";
 document.getElementById("s3").src = "/img/star.png";
 document.getElementById("s4").src = "/img/star.png";
 document.getElementById("s5").src = "/img/estrela.png";
 avaliacao = 4;
}}
 
 //ESTRELA 4
if (estrela == 4){ 
 if (s4 == url + "img/estrela.png") {
 document.getElementById("s1").src = "/img/star.png";
 document.getElementById("s2").src = "/img/star.png";
 document.getElementById("s3").src = "/img/star.png";
 document.getElementById("s4").src = "/img/star.png";
 document.getElementById("s5").src =  "/img/estrela.png";
 avaliacao = 4;
 } else {
 document.getElementById("s1").src = "/img/star.png";
 document.getElementById("s2").src = "/img/star.png";
 document.getElementById("s3").src = "/img/star.png";
 document.getElementById("s4").src =  "/img/estrela.png";
 document.getElementById("s5").src =  "/img/estrela.png";
 avaliacao = 3;
}}

//ESTRELA 3
if (estrela == 3){ 
 if (s3 == url + "img/estrela.png") {
 document.getElementById("s1").src = "/img/star.png";
 document.getElementById("s2").src = "/img/star.png";
 document.getElementById("s3").src = "/img/star.png";
 document.getElementById("s4").src = "/img/estrela.png";
 document.getElementById("s5").src =  "/img/estrela.png";
 avaliacao = 3;
 } else {
 document.getElementById("s1").src = "/img/star.png";
 document.getElementById("s2").src = "/img/star.png";
 document.getElementById("s3").src = "/img/estrela.png";
 document.getElementById("s4").src = "/img/estrela.png";
 document.getElementById("s5").src =  "/img/estrela.png";
 avaliacao = 2;
}}
 
//ESTRELA 2
if (estrela == 2){ 
 if (s2 == url + "img/estrela.png") {
 document.getElementById("s1").src = "/img/star.png";
 document.getElementById("s2").src = "/img/star.png";
 document.getElementById("s3").src = "/img/estrela.png";
 document.getElementById("s4").src = "/img/estrela.png";
 document.getElementById("s5").src = "/img/estrela.png";
 avaliacao = 2;
 } else {
 document.getElementById("s1").src = "/img/star.png";
 document.getElementById("s2").src =  "/img/estrela.png";
 document.getElementById("s3").src = "/img/estrela.png";
 document.getElementById("s4").src = "/img/estrela.png";
 document.getElementById("s5").src =  "/img/estrela.png";
 avaliacao = 1;
}}
 
 //ESTRELA 1
if (estrela == 1){ 
 if (s1 == url + "img/estrela.png") {
 document.getElementById("s1").src = "/img/star.png";
 document.getElementById("s2").src =  "/img/estrela.png";
 document.getElementById("s3").src = "/img/estrela.png";
 document.getElementById("s4").src =  "/img/estrela.png";
 document.getElementById("s5").src =  "/img/estrela.png";
 avaliacao = 1;
 } else {
 document.getElementById("s1").src =  "/img/estrela.png";
 document.getElementById("s2").src =  "/img/estrela.png";
 document.getElementById("s3").src =  "/img/estrela.png";
 document.getElementById("s4").src =  "/img/estrela.png";
 document.getElementById("s5").src =  "/img/estrela.png";
 avaliacao = 0;
}}
 
 document.getElementById('rating').innerHTML = avaliacao;
 
}

function fn(){
alert("Cadastro Enviado")
}
function clear(){
    document.getElementById('result').innerHTML = "";
}

