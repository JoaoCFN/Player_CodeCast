// pega o grupo de botões de tema
let botao = document.querySelectorAll(".btn-temas .btn");
// array de temas
let temas = ["padrao", "dark", "azul", "verde", "vermelho"];
// elementos que são mudados pelo tema
const body = document.querySelector("body");
const titulo = document.querySelector(".card h4");
const botao_start = document.getElementById("start");
const botao_config = document.getElementById("configuracoes");
const boto_modal = document.getElementById("save");
const proximo = document.getElementById("prox");
const anterior = document.getElementById("ant");
const volume = document.getElementById("volume");


function muda_tema(){
    // percore o grupo de botões 
    for (let item = 0; item < botao.length; item++) {
        botao[item].addEventListener("click", () => {
            // limpa o estilo dos temas toda vez que ele for alterado
            for (i = 0; i < temas.length; i++){
                limpa_classe(temas[i]);
            }      
            // aplicação de tema
            switch(item){   
                case 0:
                    aplica_tema("padrao");       
                break; 

                case 1:
                    aplica_tema("dark");
                break;

                case 2:
                    aplica_tema("azul");
                break;   

                case 3:
                    aplica_tema("verde");
                break;
                
                case 4:
                    aplica_tema("vermelho");
                break;
            }   
        })
    }
}

function aplica_tema(tema){   
    // elementos que são alterados com a troca de tema
    // a variáveis tema é substituida e as classes são aplicadas ao css    
    body.classList.add(`${tema}-back`);
    titulo.classList.add(`${tema}-texto`);
    botao_start.classList.add(`${tema}-back`);
    botao_start.classList.add(`${tema}-bh`);
    botao_config.classList.add(`${tema}-back`);
    botao_config.classList.add(`${tema}-bh`);
    boto_modal.classList.add(`${tema}-back`);
    boto_modal.classList.add(`${tema}-bh`); 
    proximo.classList.add(`${tema}-back`);
    proximo.classList.add(`${tema}-bh`);
    anterior.classList.add(`${tema}-back`);
    anterior.classList.add(`${tema}-bh`); 
    volume.classList.add(`${tema}-back`);
    volume.classList.add(`${tema}-bh`);    
}

function limpa_classe(tema){     
    // elementos que são removidos com a troca de tema
    // a variáveis tema é substituida e as classes são removidas do css   
    body.classList.remove(`${tema}-back`);
    titulo.classList.remove(`${tema}-texto`);
    botao_start.classList.remove(`${tema}-back`);
    botao_start.classList.remove(`${tema}-bh`);
    botao_config.classList.remove(`${tema}-back`);
    botao_config.classList.remove(`${tema}-bh`);
    boto_modal.classList.remove(`${tema}-back`);
    boto_modal.classList.remove(`${tema}-bh`);  
    proximo.classList.remove(`${tema}-back`);
    proximo.classList.remove(`${tema}-bh`);
    anterior.classList.remove(`${tema}-back`);
    anterior.classList.remove(`${tema}-bh`); 
    volume.classList.remove(`${tema}-back`);
    volume.classList.remove(`${tema}-bh`);
}

muda_tema();

