let valorCIF = prompt("Digite o valor do CIF");
let valorII = 0;
let valortotal=0;

let valorII_HTML = document.getElementById("II");
let valortotal_HTML = document.getElementById("total");

valorII = (valorCIF*16/100);
valorII_HTML.innerText = valorII;

valortotal =  valorII 
valortotal_HTML.innerText = valortotal;


