function selecionarEstilo() {
    const escolha = parseInt(document.getElementById("estilo").value);
    const resultado = document.getElementById("resultado");
    let estilo;

    switch (escolha) {
      case 1:
        estilo = "Ação";
        break;
      case 2:
        estilo = "Comédia";
        break;
      case 3:
        estilo = "Drama";
        break;
      case 4:
        estilo = "Terror";
        break;
      case 5:
        estilo = "Ficção Científica";
        break;
      case 6:
        estilo = "Romance";
        break;
      default:
        resultado.textContent = "Opção inválida. Por favor, escolha um número entre 1 e 6.";
        return;
    }

    resultado.textContent = `Seu estilo de filme favorito é: ${estilo}`;
}

    