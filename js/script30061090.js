function CalcularNCM(){
let valorCIF= document.getElementById("valorCIF").value;
let valorICMS = 0;
let valorII = 0;
let valortotal=0;
let valorICMS_HTML = document.getElementById("ICMS");
let valorII_HTML = document.getElementById("II");
let valortotal_HTML = document.getElementById("total");


valorICMS = (valorCIF*18/100);
valorICMS_HTML.innerText = valorICMS.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
;

valorII = (valorCIF*12/100);
valorII_HTML.innerText = valorII.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });


valortotal = valorICMS + valorII;
valortotal_HTML.innerText = valortotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
document.getElementById("ICMS").style.background='red';
document.getElementById("II").style.background='red';
}


