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
    const botao_seq = document.querySelector("#seq_0");
    const play = document.querySelector("#play");
    const pause = document.querySelector("#pause");
    const botao_volume = document.querySelector("#volume_1");
    const volume_up = document.querySelector("#volume_up");
    const volume_off = document.querySelector("#volume_off");
    const barra_prog = document.querySelector("#barra_prog");
    const tempo_inicial = document.querySelector(".tempo_inicial");
    const tempo_total = document.querySelector(".tempo_total");
    let msg_danger = document.querySelector("#msg_danger");

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
        // volta a sequência ao estado inicial
        play.style.display = "inline-block";
        pause.style.display = "none";
        botao_seq.setAttribute("id", "seq_0");
        // volta a volume ao estado inicial
        volume_up.style.display = "inline-block";
        volume_off.style.display = "none";
        botao_volume.setAttribute("id", "volume_1");
        audio.muted = false;
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

    function limpa_msg_warning(){
        // limpar mensagens de aviso ao usuário
        msg_danger.innerHTML = ``;
        msg_danger.removeAttribute("class", "alert alert-danger");     
    }

    function altera_vol(estado_icone_1, estado_icone_2, estado_volume){
        audio.muted = !audio.muted;
        volume_up.style.display = `${estado_icone_1}`;
        volume_off.style.display = `${estado_icone_2}`;
        botao_volume.setAttribute("id", estado_volume);   
    }
    function altera_sequencia(estado_icone_1, estado_icone_2, estado_seq){
        play.style.display = `${estado_icone_1}`;
        pause.style.display = `${estado_icone_2}`;
        botao_seq.setAttribute("id", estado_seq);   
    }

    const progresso = value => audio.currentTime = value;

    botao_seq.addEventListener("click", () => {
        /* 
            Seq 0 - Pausado
            Seq 1 - Play
        */
        let id = botao_seq.getAttribute("id");
        
        if(id == "seq_1"){
            audio.pause();
            altera_sequencia("inline-block", "none", "seq_0");
        }
        else if(id == "seq_0"){
            audio.play();
            altera_sequencia("none", "inline-block", "seq_1");
        }
    })
    
    botao_volume.addEventListener("click", () => {
        /* 
            Volume 0 - Som desativado
            Volume 1 - Som Ativado
        */
        let id = botao_volume.getAttribute("id");

        if(id == "volume_1") altera_vol("none", "inline-block", "volume_0");
        
        else if(id == "volume_0") altera_vol("inline-block", "none", "volume_1");
    })
    

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
 
    // quando a barrinha do input for alterado ele realiza a func progresso
    barra_prog.oninput = () => progresso(barra_prog.value);
    barra_prog.onchange = () => progresso(barra_prog.value);
    // executa algo sempre que o audio for atualizado
    audio.ontimeupdate = () => atualiza_tempo(); 
}

// espera a página carregar para manipular o player
window.addEventListener("load", player());
