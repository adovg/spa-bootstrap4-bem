let scrollUp=document.getElementById("toTop");scrollUp.onclick=(()=>{document.getElementById("home").scrollIntoView({block:"center",behavior:"smooth"})}),window.onscroll=(()=>{window.pageYOffset,window.pageXOffset;let e=window.pageYOffset;scrollUp.style.display=e>=500?"flex":"none"});let myGallery=document.querySelectorAll(".myGallery");allGallery.onmouseover=(()=>{for(let e=0;e<myGallery.length;e++)myGallery[e].style.display="flex"}),wiewAll.onmouseover=(()=>{for(let e=0;e<myGallery.length;e++)myGallery[e].style.display="flex"}),web.onmouseover=(()=>{let e=document.querySelectorAll(".web");for(let e=0;e<myGallery.length;e++)myGallery[e].style.display="none";for(let t=0;t<e.length;t++)e[t].style.display="flex"}),uix.onmouseover=(()=>{let e=document.querySelectorAll(".uix");for(let e=0;e<myGallery.length;e++)myGallery[e].style.display="none";for(let t=0;t<e.length;t++)e[t].style.display="flex"}),moc.onmouseover=(()=>{let e=document.querySelectorAll(".moc");for(let e=0;e<myGallery.length;e++)myGallery[e].style.display="none";for(let t=0;t<e.length;t++)e[t].style.display="flex"});let toUs=()=>{let e=document.getElementById("aboutUs");event.preventDefault(),e.scrollIntoView({block:"center",behavior:"smooth"})},toServices=()=>{let e=document.getElementById("services");event.preventDefault(),e.scrollIntoView({block:"center",behavior:"smooth"})},toPortfolio=()=>{let e=document.getElementById("myPortfolio");event.preventDefault(),e.scrollIntoView({block:"center",behavior:"smooth"})},toBlog=()=>{let e=document.getElementById("blog");event.preventDefault(),e.scrollIntoView({block:"center",behavior:"smooth"})},toContact=()=>{let e=document.getElementById("contacts");event.preventDefault(),e.scrollIntoView({block:"center",behavior:"smooth"})},months=["January","February","March","April","May","June","July","August","September","October","November","December"],tomorrow=new Date;tomorrow.setTime(tomorrow.getTime()+864e5);let spanDate=document.getElementsByClassName("spanDate");for(let e=0;e<=spanDate.length;e++)spanDate[e].innerHTML=months[tomorrow.getMonth()]+" "+tomorrow.getDate()+", "+tomorrow.getFullYear();document.getElementsByClassName("spanDate").innerHTML=months[tomorrow.getMonth()]+" "+tomorrow.getDate()+", "+tomorrow.getFullYear();