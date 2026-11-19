async function buscarDados() {
  const resposta = await fetch("https://jsonplaceholder.typicode.com/posts");
  const dados = await resposta.json();

  dados.forEach((valor)=>{
    console.log(`${valor.id} - ${valor.title}`);
  });
  
}
buscarDados();