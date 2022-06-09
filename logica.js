let main = document.getElementById('AreaItens');
let input = document.getElementById('campoentrada');
let contador = 0;

function adicionar(){
   if ((input.value !== "") && (input.value !== null) && (input.value !== undefined)){
   

    let novoItem = `<div id="${contador}" class="tarefa">
   <div style="text-align:left" class="textoTarefa">
   <p>${input.value}</p>
       
       
   </div>

   <div  class="Deletar">
       <button onclick="deletar(${contador})" class="deletar">Deletar</button>
   </div>
   </div>
`;

main.innerHTML += novoItem;
input.value = "";
input.focus();
++contador;
   }
}

function deletar(id){
    var tarefa = document.getElementById(id);
    tarefa.remove();

}



