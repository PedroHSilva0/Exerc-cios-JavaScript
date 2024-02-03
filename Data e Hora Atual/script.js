const  dataAtual = new Date ()

let day = dataAtual.getDate()
let month = dataAtual.getMonth()+1
let year = dataAtual.getFullYear()
let horas = dataAtual.getHours()
let minutes = dataAtual.getMinutes()

let dataAtualformatada = day + "/" + month +"/" + year + " " + horas + ":" +minutes

console.log(dataAtualformatada)

document.getElementById("CurrDateTime").innerHTML = dataAtualformatada;

