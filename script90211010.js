let valorCIF = prompt("Digite o valor do CIF");
let valorICMS = 0;
let valorII = 0;
let valortotal=0;
let valorICMS_HTML = document.getElementById("ICMS");
let valorII_HTML = document.getElementById("II");
let valortotal_HTML = document.getElementById("total");

valorICMS = (valorCIF*18/100);
valorICMS_HTML.innerText = valorICMS;

valorII =  (valorCIF*14/100);
valorII_HTML.innerText = valorII;

valortotal = valorICMS + valorII;
valortotal_HTML.innerText = valortotal;





