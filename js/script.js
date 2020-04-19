// base de podcasts
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
    const volume_up = document.querySelector("#volume_up");
    const volume_off = document.querySelector("#volume_off");
    const barra_prog = document.querySelector("#barra_prog");
    const tempo_inicial = document.querySelector(".tempo_inicial");
    const tempo_total = document.querySelector(".tempo_total");
    let msg_danger= document.querySelector("#msg_danger");
    
    // posição dos audios
    let i = 0;
  
    let limite_audios = data.length - 1;
    
    // atualiza o player após um audio ser finalizado
    function atualiza_player(){
        // adicionar imagem
        img.src = data[i].foto;
        // adicionar texto
        titulo.innerHTML = `${data[i].titulo}`;
        artista.innerHTML = `<i class="fa fa-user pr-1"></i> ${data[i].artista}`;
        // adicionar audio
        audio.src = data[i].arquivo;
        // setar audio para o inicio
        barra_prog.value = 0;
   
        // ele roda essa função somente quando ele lê os dados do audio
        audio.onloadeddata = () => {
            let audio_total = secondsToMinutos(audio.duration);
            // adiciona a duração total do audio ao player
            barra_prog.max =  audio.duration;
            tempo_total.innerHTML =  audio_total;
        }
        // volta o play ao estado inicial
        play.style.display = "inline-block";
        pause.style.display = "none";
        volume_up.style.display = "inline-block";
        volume_off.style.display = "none";

    }
 
    atualiza_player();

    function secondsToMinutos(tempo){
        let minutos = Math.floor(tempo / 60);
        let segundos =  Math.floor(tempo % 60);
        // o slice com número negativo pega os caracteres da direita para esquerda
        // nesse exemplo, ele pega os dois últimos números das strings
        return `${("0" + minutos).slice(-2)}:${("0" + segundos).slice(-2)}`
    }

    function atualiza_tempo(){
        // current time é o tempo atual
        tempo_inicial.innerHTML = secondsToMinutos(audio.currentTime); 
        barra_prog.value = audio.currentTime;  
    }

    function progresso(value){
        audio.currentTime = value;               
    }

    function limpa_msg_warning(){
        // limpar mensagens de aviso ao usuário
        msg_danger.innerHTML = ``;
        msg_danger.removeAttribute("class", "alert alert-danger");     
    }

    play.addEventListener("click", () => {
        audio.play();            
        play.style.display = "none";  
        pause.style.display = "inline-block"; 
         
    }) 
    
    pause.addEventListener("click", () => {
        audio.pause();   
        play.style.display = "inline-block";
        pause.style.display = "none";
    })

    volume_up.addEventListener("click", () => {
        // sempre inverte o estado 
        audio.muted = !audio.muted;
        volume_up.style.display = "none";
        volume_off.style.display = "inline-block";
    })

    volume_off.addEventListener("click", () => {
        // sempre inverte o estado 
        audio.muted = !audio.muted;
        volume_up.style.display = "inline-block";
        volume_off.style.display = "none";
    })
    
    // quando a barrinha do input for alterado ele realiza a func progresso
    barra_prog.oninput = () => progresso(barra_prog.value);
    barra_prog.onchange = () => progresso(barra_prog.value);
    // executa algo sempre que o audio for atualizado
    audio.ontimeupdate = () => atualiza_tempo(); 


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
            //window.alert("Fim da lista de audios") 
            msg_danger.setAttribute("class", "alert alert-danger");
            msg_danger.innerHTML = `Fim da Playlist`;

            setTimeout(limpa_msg_warning, 3000)
        }
              
    })

    anterior.addEventListener("click", () => {
        if(i <= 0){
            // window.alert("Não tem áudio anterior");
            msg_danger.setAttribute("class", "alert alert-danger");
            msg_danger.innerHTML = `Você está no início da playlist`;

            setTimeout(limpa_msg_warning, 3000)
        }
        else{
            i -= 1;  
            atualiza_player(); 
        }
        
    })
}

// espera a página carregar para manipular o player
window.addEventListener("load", player());
