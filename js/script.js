import data from "./data.js";
function player(){
    // elementos principais
    const img = document.querySelector("img.imagem");
    const titulo = document.querySelector("div .card-title");
    const artista = document.querySelector("div .card-text");
    const audio = document.querySelector("audio");
    const proximo = document.getElementById("prox");
    const anterior = document.getElementById("ant");
    const play = document.querySelector("#play");
    const pause = document.querySelector("#pause");
    const start_controls = document.querySelector("start_controls");
    // posição dos audios
    let i = 0;
  
    let limite_audios = data.length - 1;

    function play_audio(){
        play.addEventListener("click", () => {
             audio.play(); 
             play.style.display = "none";  
             pause.style.display = "inline-block";        
        }) 
    }
    play_audio();

    function pause_audio(){
        pause.addEventListener("click", () => {
            audio.pause();
            play.style.display = "inline-block";
            pause.style.display = "none";
        })
    }
    pause_audio();

    // atualiza o player após um audio ser finalizado
    function atualiza_player(){
        // adicionar imagem
        img.src = data[i].foto;
        // adicionar texto
        titulo.innerHTML = `${data[i].titulo}`;
        artista.innerHTML = `<i class="fa fa-user pr-1"></i> ${data[i].artista}`;
        // adicionar audio
        audio.src = data[i].arquivo;

        // volta o play ao estado inicial
        play.style.display = "inline-block";
        pause.style.display = "none";
    }

    
    atualiza_player()
    
    // quando o audio for finalizado ele passa para o próximo
    audio.addEventListener("ended", () => {
        // se i for maior que o limite de audios, ou seja, tocar todos os audios, ele volta ao inicio
        if(i >= limite_audios){
            i = 0;
            atualiza_player();
            
        }
        // senao, ele segue para o próximo audio
        else{
            i += 1;
            atualiza_player();    
        }
    })

    // manipulação de próximo e anterior
    proximo.addEventListener("click", () => {
        if(i < limite_audios){
            i += 1;  
            atualiza_player();  
        }
        else{
           window.alert("Fim da lista de audios") 
        }
              
    })
    anterior.addEventListener("click", () => {
        if(i <= 0){
            window.alert("Não tem áudio anterior");
        }
        else{
            i -= 1;  
            atualiza_player(); 
        }
        
    })
}

// espera a página carregar para manipular o player
window.addEventListener("load", player());
