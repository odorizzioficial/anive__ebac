document.addEventListener("DOMContentLoaded",function(){let e=new Date("2024-06-07T00:00:00");function t(){let t=new Date,n=e-t,o=n>0?n:0,d=e=>(e<10?"0":"")+e;document.getElementById("days").innerText=d(Math.floor(o/864e5)),document.getElementById("hours").innerText=d(Math.floor(o%864e5/36e5)),document.getElementById("minutes").innerText=d(Math.floor(o%36e5/6e4)),document.getElementById("seconds").innerText=d(Math.floor(o%6e4/1e3))}setInterval(t,1e3),t()});//# sourceMappingURL=index.3ec168e1.js.map

//# sourceMappingURL=index.3ec168e1.js.map
