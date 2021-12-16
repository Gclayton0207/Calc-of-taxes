let valorCIF = prompt("Digite o valor do CIF");
let valorICMS = 0;
let valorIPI = 0;
let valortotal=0;
let valorICMS_HTML = document.getElementById("ICMS");
let valorIPI_HTML = document.getElementById("IPI");
let valortotal_HTML = document.getElementById("total");

valorICMS = (valorCIF*18/100);
valorICMS_HTML.innerText = valorICMS;

valorIPI =  (valorCIF*8/100);
valorIPI_HTML.innerText = valorIPI;

valortotal = valorICMS + valorIPI;
valortotal_HTML.innerText = valortotal;





