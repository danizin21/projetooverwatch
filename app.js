function pesquisar() {
    // Seleciona a seção onde os resultados da pesquisa serão exibidos
    // pelo seu ID. Essa seção será atualizada com os novos resultados.
    let section = document.getElementById("resultados-pesquisa");
    
    let campoPesquisa = document.getElementById("campo-pesquisa").value
   
    if(!campoPesquisa) {
      section.innerHTML = "<p>Nada foi encontrado</p>.Voce precisa digitar o nome de um heroi"
      return
    }
    campoPesquisa = campoPesquisa.toLowerCase()
    
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
    // Itera sobre cada item (dado) no array de dados.
    // Para cada item, cria um novo elemento HTML para representar
    // um resultado da pesquisa.
    for (let dado of dados) {
      titulo = dado.titulo.toLowerCase()
      descricao = dado.descricao.toLowerCase()
      tags = dado.tags.toLowerCase()
      if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
        //cria um novo elemento
        resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href=${dado.link} target="_blank">mais informações</a>
        </div>
      `;
      }
      // Concatena o HTML do item atual à string de resultados.
      // Utiliza template literals (``) para facilitar a interpolação
      // de variáveis e expressões.
      
    }
    if(!resultados){
      resultados = "<p>Nada foi encontrado</p>"
    }
    // Atribui o conteúdo HTML completo da string "resultados"
    // à propriedade innerHTML da seção, substituindo o conteúdo
    // anterior.
    section.innerHTML = resultados;
  }

