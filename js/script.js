function player(){
    // elementos principais
    const img = document.querySelector("img.imagem");
    const titulo = document.querySelector("div .card-title");
    const artista = document.querySelector("div .card-text");
    const audio = document.querySelector("audio");
    const i = 1;

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

    // adicionar imagem
    img.src = data[i].foto;
    // adicionar texto
    titulo.innerHTML = `${data[i].titulo}`;
    artista.innerHTML = `<i class="fa fa-user pr-1"></i> ${data[i].artista}`;
    // adicionar audio
    const novo_audio = document.createElement("source");
    novo_audio.setAttribute("src", data[i].arquivo);
    audio.appendChild(novo_audio);

    //audio.addEventListener("play", window.alert("par"))

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
    audio :  document.querySelector("audio.audio"),
      
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