// pega o grupo de botões de tema
let botao = document.querySelectorAll(".btn-group .btn");
// array de temas
let temas = ["padrao", "dark", "azul", "verde", "vermelho"]
// elementos que são mudados pelo tema
const body = document.querySelector("body");
const titulo = document.querySelector("h4#titulo");
const botao_player = document.getElementById("configuracoes");
const boto_modal = document.getElementById("save")


function muda_tema(){
    // percore essa lista
    for (let item = 0; item < botao.length; item++) {
        botao[item].addEventListener("click", () => {
            for (i = 0; i < temas.length; i++){
                limpa_classe(temas[i])
            }      
            switch(item){   
                case 0:
                    aplica_tema("padrao")           
                break; 

                case 1:
                    aplica_tema("dark")
                break;

                case 2:
                    aplica_tema("azul")
                break;   

                case 3:
                    aplica_tema("verde")
                break;
                
                case 4:
                    aplica_tema("vermelho")
                break;

                default:
                    console.log("sem item")
                break;  
            }   
        })
    }
}
function aplica_tema(tema){
    console.log(`${tema}-back`);        
    body.classList.add(`${tema}-back`)
    titulo.classList.add(`${tema}-texto`)
    botao_player.classList.add(`${tema}-back`)
    boto_modal.classList.add(`${tema}-back`)      
}

function limpa_classe(tema){
    console.log(`${tema}-back`);        
    body.classList.remove(`${tema}-back`)
    titulo.classList.remove(`${tema}-texto`)
    botao_player.classList.remove(`${tema}-back`)
    boto_modal.classList.remove(`${tema}-back`)   
}

muda_tema();


/*
botao.forEach(item => {
    item.addEventListener("click", () => {
        console.log(item.getAttribute("class"))    
    })
})
*/
