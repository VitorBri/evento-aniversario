AOS.init();

const dataDoAniversario = new Date("Jul 21, 2024 18:00:00");
const timeStampDoAniversario = dataDoAniversario.getTime();

const contaHoras = setInterval(function(){
    const agora = new Date()
    const timeStampAtual = agora.getTime();

    const distanciaAteOAniversario = timeStampDoAniversario - timeStampAtual

    const diasEmMs =  1000 * 60 * 60 * 24;
    const horasEmMs =  1000 * 60 * 60;
    const minutosEnMs =  1000 * 60;

    const diasAteOEvento = Math.floor(distanciaAteOAniversario / diasEmMs)
    const horasAteOEvento = Math.floor((distanciaAteOAniversario % diasEmMs) / horasEmMs )
    const minutosAteOEvento = Math.floor((distanciaAteOAniversario % horasEmMs) / minutosEnMs);
    const segundosAteOEvento = Math.floor((distanciaAteOAniversario % minutosEnMs) / 1000)


    document.getElementById ('contagem').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`

},1000)