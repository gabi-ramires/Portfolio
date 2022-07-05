var string = "Olá, me chamo Gabriela, tenho 25 anos e estudo programação. Gosto de aprender tecnologias e linguagens referentes ao desenvolvimento web.  \n\rPara visualizar meus projetos, clique em 'Portfólio'."; /* type your text here */
var array = string.split("");
var timer;

function frameLooper () {
  if (array.length > 0) {
    document.getElementById("text").innerHTML += array.shift();
  } else {
    clearTimeout(timer);
      }
  loopTimer = setTimeout('frameLooper()',70); /* velocidade 70 milisegun */

}
frameLooper();


