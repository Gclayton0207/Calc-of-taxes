let valorCIF = prompt("Digite o valor do CIF");
let valorICMS = 0;
let valorII = 0;
let valorIPI = 0;
let valortotal = 0;

let valorICMS_HTML = document.getElementById("ICMS");
let valorII_HTML = document.getElementById("II");
let valorIPI_HTML = document.getElementById("IPI");
let valortotal_HTML = document.getElementById("total");

valorICMS = (valorCIF * 18 / 100);
valorICMS_HTML.innerText = valorICMS;

valorII = (valorCIF * 16 / 100);
valorII_HTML.innerText = valorII;

valorIPI = (valorCIF * 5 / 100);
valorIPI_HTML.innerText = valorIPI;


valortotal = valorICMS + valorII + valorIPI;
valortotal_HTML.innerText = valortotal;