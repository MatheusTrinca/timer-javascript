function criaHoraDosSegundos(segundos){
  const data = new Date(segundos * 1000);
  return data.toLocaleTimeString('pt-br', {
    hour12: false,
    timeZone: 'UTC'
  });
}

const relogio = document.getElementById('relogio');
const iniciar = document.getElementById('iniciar');
const pausar = document.getElementById('pausar');
const zerar = document.getElementById('zerar');
let segundos = 0;
let timer;

function iniciaRelogio(){
    timer = setInterval(function(){
      segundos ++;
      relogio.innerHTML = criaHoraDosSegundos(segundos);
    }, 1000);
  }

iniciar.addEventListener('click', function(e){
  relogio.classList = 'display-4 text-dark';
  iniciaRelogio();
});


pausar.addEventListener('click', function(e){
  relogio.classList = 'display-4 text-warning';
  clearInterval(timer);
  e.preventDefault();
});

zerar.addEventListener('click', function(e){
  relogio.classList = 'display-4 text-danger';
  clearInterval(timer);
  relogio.innerHTML = '00:00:00';
  segundos = 0;
  e.preventDefault();
});

