// elementos principais
const img = document.querySelector("div.imagem");
const titulo = document.querySelector("div .card-title");
const artista = document.querySelector("div .card-text");
const audio = document.querySelector("audio.audio");
const i = 2;

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
const nova_imagem = document.createElement("img");
nova_imagem.setAttribute("src", data[i].foto);
nova_imagem.setAttribute("class", "card-img-top");
img.appendChild(nova_imagem)

// adicionar texto
titulo.innerHTML = `${data[i].titulo}`
artista.innerHTML = `<i class="fa fa-user pr-1"></i> ${data[i].artista}`

// adicionar audio
const novo_audio = document.createElement("source");
novo_audio.setAttribute("src", data[i].arquivo);
audio.appendChild(novo_audio);