// elementos principais
const img = document.querySelector("div.imagem");
const titulo = document.querySelector("div .card-title");
const artista = document.querySelector("div .card-text");
const audio = document.querySelector("audio.audio");

// objeto inicial
const data = {
    titulo:
      "Como começei a programar / Por que criamos a Rocketseat / Nossa Stack",
    artista: "Diego Fernandes",
    foto: "files/como-comecei.jpg",
    arquivo: "files/como-comecei.mp3"
}


// adicionar imagem
const nova_imagem = document.createElement("img");
nova_imagem.setAttribute("src", data.foto);
nova_imagem.setAttribute("class", "card-img-top");
img.appendChild(nova_imagem)

// adicionar texto
titulo.innerHTML = `${data.titulo}`
artista.innerHTML = `<i class="fa fa-user"></i> ${data.artista}`

// adicionar audio
const novo_audio = document.createElement("source");
novo_audio.setAttribute("src", data.arquivo);
audio.appendChild(novo_audio);