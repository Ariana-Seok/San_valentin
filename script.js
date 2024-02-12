const btn_si = document.getElementById('btn_si');
const btn_no = document.getElementById('btn_no');
const imagen = document.querySelector('.contenedor_imagen img');

const gifs_triste = [
    './assets/img/tkthao219-bubududu (3).gif',
    './assets/img/tkthao219-bubududu (2).gif',
    './assets/img/tkthao219-bubududu (1).gif',
    './assets/img/tkthao219-bubududu.gif',
    './assets/img/peach-goma.gif'
];

const gifs_feliz = [
    './assets/img/cute.gif',
    './assets/img/bubududu-panda.gif',
    './assets/img/cute (1).gif',
    './assets/img/mimibubu.gif',
    './assets/img/tkthao219-bubududu (5).gif',
    './assets/img/tkthao219-bubududu (4).gif'
];


const mostrarGifs = () =>{
    let index = 0;
    const intervalo = setInterval(() =>{
        imagen.src = gifs_feliz[index];
        index++;

        if (index === gifs_feliz.length) {
            clearInterval(intervalo);
            redireccionar();
        }
    }, 800);

    
};


function redireccionar(){
    location.href = "https://www.youtube.com/watch?v=sx2Dwr6SppM";
}

function aceptaSalir() {
    alert("Nos vemos el 14 de febrero 💖🌹");
    mostrarGifs();
}

const noAceptaSalir = () => {
    btn_no.style.position = 'absolute';
    btn_no.style.top = (Math.random() * window.innerHeight) + 'px';
    btn_no.style.left = (Math.random() * window.innerWidth) + 'px';

    const randomIndex = Math.floor(Math.random() * gifs_triste.length);
    const randomGif = gifs_triste[randomIndex];

    imagen.src = randomGif;

};

btn_si.addEventListener('click', aceptaSalir);
btn_no.addEventListener('click', noAceptaSalir);
