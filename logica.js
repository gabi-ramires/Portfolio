let main = document.getElementById('AreaItens');
let input = document.getElementById('campoentrada');

function adicionar(){
   let novoItem = `<div class="tarefa">
   <div style="text-align:left" class="textoTarefa">
   <p>${input.value}</p>
       
       
   </div>

   <div class="Deletar">
       <button class="deletar">Deletar</button>
   </div>
   </div>
`;

main.innerHTML += novoItem;
input.value = "";
input.focus();

}




