function player(){
    // elementos principais
    const img = document.querySelector("img.imagem");
    const titulo = document.querySelector("div .card-title");
    const artista = document.querySelector("div .card-text");
    const audio = document.querySelector("audio");
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
        let limite_audios = data.length - 1;
        // se i for maior que o limite de audios, ou seja, tocar todos os audios, ele volta ao inicio
        if(i >= limite_audios){
            i = 0;
            console.log(i)
            console.log(limite_audios)
            atualiza_player()
            
        }
        // senao, ele segue para o próximo audio
        else{
            i += 1;
            console.log(i)
            console.log(limite_audios)
            atualiza_player()    
        }
    })
}

// espera a página carregar para manipular o player
window.addEventListener("load", player())



/*
const i = 2;

const player = {
    // elementos principais
    img :  document.querySelector("img.imagem"),
    titulo :  document.querySelector("div .card-title"),
    artista :  document.querySelector("div .card-text"),
    audio :  document.querySelector("audio"),
      
    // objeto inicial
    data : [
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
    ],
        
    start(){
        this.img.src = this.data[i].foto;
        // adicionar texto
        this.titulo.innerHTML = `${this.data[i].titulo}`;
        player.artista.innerHTML = `<i class="fa fa-user pr-1"></i> ${this.data[i].artista}`;
        this.audio.src = this.data[i].arquivo;
    }


};
player.start();
*/