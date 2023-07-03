

function mostrar_dados(dados) {
    const resultados = document.querySelector(".resultados");

    if (dados.erro) {
        // caso meu resultado seja undefined
        resultados.innerText = "Cep inexistente!";
    }else {
        resultados.innerHTML = `<p>Endereço: ${dados.logradouro}</p>
                        <p>Complemento: ${dados.complemento}</p>
                        <p>Bairro: ${dados.bairro}</p>
                        <p>Cidade: ${dados.localidade} -- ${dados.uf}</p>`
        }
}