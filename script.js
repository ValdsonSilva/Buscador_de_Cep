const botao2 = document.querySelector(".botao");

botao2.addEventListener("click", (event) => {
    event.preventDefault();
    const form = document.getElementsByTagName("form")[0];

    const cep = form.elements['cep'].value;
    //console.log(typeof(cep));

    if (cep.length != 8) {
        //checando quantidade de dígitos
        alert('CEP inválido! :(');

    }else {
        /*Consumindo a api */
        url = `https://viacep.com.br/ws/${cep}/json/`;

        fetch(url).then(function(response){
            /*Transformando os dados da API em Json */
            response.json().then(function(data){
                /*mostrando os dados via console em Json*/
                console.log(data);
                mostrar_dados(data);
                limpar_form();

        })
    })}

});

//Mostrar dados da APi na tela de forma tratada
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

/*apaga os dados da tela após o click no botão */
const apagar = document.getElementsByName("apagar")[0];
apagar.addEventListener("click", () => {
  
    const form = document.getElementsByTagName("form")[0];

    form.elements['cep'].value = '';
})

// Função que controla o surgimento do botão
function aparece_botao_apagar(){

    console.log("Entrou na função!1");

    const Input_cep = document.querySelector('input[name="cep"');

    Input_cep.addEventListener("click", function() {
        console.log("Entrou na funçaõ!2");
        //getElementsByName retorna uma lista --> []
        const botao_apagar = document.querySelector('[name="apagar"]');
        /*A prop 'getComputedStyle' pega o 
        estado atual do css do componente*/
        const estilo_botao_apagar = getComputedStyle(botao_apagar);

        //console.log(estilo_botao_apagar);

        //const estilo_botao_apagar = botao_apagar.style;
        if (estilo_botao_apagar.display === 'none'){

            console.log("Verificação 1 on!")
            botao_apagar.style.display = 'inline';

        }if (estilo_botao_apagar.display === 'inline'){
            console.log("Verificação 2 on!")
            botao_apagar.style.display = 'none';
        }
    })
}


//Chamada da função no carregamento da página
document.addEventListener("DOMContentLoaded", () => {
    //chamada da função
    aparece_botao_apagar();
})


//limpar caixa de input
function limpar_form() {
   
    const form = document.getElementsByTagName("form")[0];
    form.elements['cep'].value = '';

}


function Popup() {
    /*Navegação(botões do header) */

    /*Segundo componente do Nav */
    /*const Contatos = Nav.elements["a"][1];*/

    const Contatos = document.querySelectorAll("a")[1];

    console.log("Primeiro teste on!");

    Contatos.addEventListener("click", () => {
        console.log("Aqui tá rodando o código!");
        
        const Pop = document.querySelector("ul");

        const estilo_Pop = Pop.style;

        //estilo_Pop.display = "grid";

        if (estilo_Pop.display === "flex") {
            estilo_Pop.display = "none";
        }
        else {
            estilo_Pop.display = "flex";
        }
        
       
    })
}

Popup();
