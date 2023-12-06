document.addEventListener("DOMContentLoaded",function(){// Defina a data do aniversário
let e=new Date("2023-12-01T00:00:00");function t(){let t=new Date,n=e-t;document.getElementById("days").innerText=Math.floor(n/864e5),document.getElementById("hours").innerText=Math.floor(n%864e5/36e5),document.getElementById("minutes").innerText=Math.floor(n%36e5/6e4),document.getElementById("seconds").innerText=Math.floor(n%6e4/1e3)}// Atualize a contagem regressiva a cada segundo
setInterval(t,1e3),// Atualize a contagem regressiva imediatamente ao carregar a página
t()});//# sourceMappingURL=index.202ef0c5.js.map

//# sourceMappingURL=index.202ef0c5.js.map
