let listaDeNomes=[];


function adicionarAmigo(){
    // Aqui você deve implementar a lógica para adicionar um amigo
    let amigo = document.getElementById('amigo').value; 


    if (amigo.trim() === ""){
        alert("Digite um nome antes de inserir!");
        return;
    }
    listaDeNomes.push(amigo);

    console.log(listaDeNomes);

    const li = document.createElement('li');
    li.textContent = amigo;

    document.getElementById('listaAmigos').appendChild(li);

    limparCampo();

}
function sortearAmigo(){
    if (listaDeNomes.length === 0) {
        alert("Por Favor, insira um nome!");
        return;
    }

    const randomIndex = Math.floor(Math.random() * listaDeNomes.length);
    
    // Selecionar um dos nomes da listaDeNomes array
    const amigoSorteado = listaDeNomes[randomIndex];
    
    
    //console.log(`O amigo sorteado é: ${amigoSorteado}`);
    

     const resultadoElement = document.getElementById('resultado');
    limparElemento();
    

    const li = document.createElement('li');
    li.textContent = `O nome sorteado é: ${amigoSorteado}`;
    resultadoElement.appendChild(li);

    const listaAmigosElement = document.getElementById('listaAmigos');
    listaAmigosElement.innerHTML = "";
}

function limparCampo(){
        chute = document.querySelector('input');
        chute.value = '';
}
