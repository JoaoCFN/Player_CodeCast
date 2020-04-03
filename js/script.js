function player(){
    // elementos principais
    const img = document.querySelector("img.imagem");
    const titulo = document.querySelector("div .card-title");
    const artista = document.querySelector("div .card-text");
    const audio = document.querySelector("audio");
    const proximo = document.getElementById("prox");
    const anterior = document.getElementById("ant");
    // posição dos audios
    let i = 0;

    // objeto inicial
    const data = [
        {
            titulo:
            "Como começei a programar / Por que criamos a Rocketseat / Nossa Stack",
            artista: "Diego Fernandes",
            foto: "files/como-comecei.jpg",
            arquivo: "files/como-comecei.mp3"
        },
        {
            titulo: "5 dicas para uma carreira sólida como programador",
            artista: "Diego Fernandes",
            foto: "files/5-dicas-para-uma-carreira-solida-como-programador.jpg",
            arquivo: "files/5-dicas-para-uma-carreira-solida-como-programador.mp3"
        },
        {
            titulo: "Júnior Pleno ou Sênior, qual a diferença?",
            artista: "Diego Fernandes",
            foto: "files/junior-pleno-ou-senior-qual-a-diferenca.jpg",
            arquivo: "files/junior-pleno-ou-senior-qual-a-diferenca.mp3"
        }
    ];

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
