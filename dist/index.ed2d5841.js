AOS.init();const e=new Date("Dec 12, 2023 19:00:00"),t=e.getTime(),n=setInterval(function(){let e=new Date,o=e.getTime(),a=t-o;document.getElementById("contador").innerHTML=`${Math.floor(a/864e5)}d ${Math.floor(a%864e5/36e5)}h ${Math.floor(a%36e5/6e4)}m ${Math.floor(a%6e4/1e3)}`,a<0&&(clearInterval(n),document.getElementById("contador").innerHTML="Evento expirado")},1e3);//# sourceMappingURL=index.ed2d5841.js.map

//# sourceMappingURL=index.ed2d5841.js.map
