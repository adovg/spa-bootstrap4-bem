"use strict";let myUix=document.getElementById("uix");myUix.onclick=function(){for(var e=document.getElementsByClassName("col123"),t=0;t<e.length;t++)e[t].style.display="none"!=e[t].style.display?"none":"block"};let months=["January","February","March","April","May","June","July","August","September","October","November","December"],tomorrow=new Date;tomorrow.setTime(tomorrow.getTime()+864e5),document.getElementById("spanDate").innerHTML=months[tomorrow.getMonth()]+" "+tomorrow.getDate()+", "+tomorrow.getFullYear();