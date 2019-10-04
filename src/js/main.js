// 'use strict';



///////////////////////////////////////////////////////////////////////////////////slick-slider
 //$(document).ready(function(){ alert(jQuery.fn.jquery); }); 
 //test jquerry






// function clock() {
  // var d = new Date();
  // var month_num = d.getMonth()
  // var day = d.getDate();
  // var hours = d.getHours();
  // var minutes = d.getMinutes();
  // var seconds = d.getSeconds();
   
  // month=new Array("января", "февраля", "марта", "апреля", "мая", "июня",
  // "июля", "августа", "сентября", "октября", "ноября", "декабря");
   
  // if (day <= 9) day = "0" + day;
  // if (hours <= 9) hours = "0" + hours;
  // if (minutes <= 9) minutes = "0" + minutes;
  // if (seconds <= 9) seconds = "0" + seconds;
   
  // date_time = "Сегодня - " + day + " " + month[month_num] + " " + d.getFullYear() +
  // " г.&nbsp;&nbsp;&nbsp;Текущее время - "+ hours + ":" + minutes + ":" + seconds;
  // if (document.layers) {
  //  document.layers.doc_time.document.write(date_time);
  //  document.layers.doc_time.document.close();
  // }
  // else document.getElementById("doc_time").innerHTML = date_time;
  //  setTimeout("clock()", 1000);
//   };

/////////////////////////////////////////////////// scroll Up and hide
let scrollUp = document.getElementById('toTop');
scrollUp.onclick = () => {
  document.getElementById('home').scrollIntoView({block: "center", behavior: "smooth"});  
}

window.onscroll = () => {
  let clientTop = window.pageYOffset;
  let clientLeft = window.pageXOffset;
  let myScroll = window.pageYOffset;
    if (myScroll >= 500) {
      scrollUp.style.display = 'flex'; 
    } else {
      scrollUp.style.display = 'none'; 
    }
}
/////////////////////////////////////////////////// scroll Up and hide


/////////////////////Plate script

let myGallery = document.querySelectorAll('.myGallery');

allGallery.onmouseover = () => {
  for (let i = 0; i < myGallery.length; i++) {
    myGallery[i].style.display = 'flex';
  }
}

wiewAll.onmouseover = () => {
  for (let i = 0; i < myGallery.length; i++) {
    myGallery[i].style.display = 'flex';
  }
}


web.onmouseover = () => {
  let webCollection = document.querySelectorAll('.web');
  
  
  for (let i = 0; i < myGallery.length; i++) {
    myGallery[i].style.display = 'none';
  }

  for (let i = 0; i < webCollection.length; i++) {
      webCollection[i].style.display = 'flex';
  }
}

uix.onmouseover = () => {
  let uixCollection = document.querySelectorAll('.uix');
  
  for (let i = 0; i < myGallery.length; i++) {
    myGallery[i].style.display = 'none';
}

  for (let i = 0; i < uixCollection.length; i++) {
      uixCollection[i].style.display = 'flex';
  }
}
moc.onmouseover = () => {
  let mocCollection = document.querySelectorAll('.moc');
  
  for (let i = 0; i < myGallery.length; i++) {
    myGallery[i].style.display = 'none';
}

  for (let i = 0; i < mocCollection.length; i++) {
      mocCollection[i].style.display = 'flex';
  }
}

///////////////////////////////////////////////////////////////////


let toUs = () => {
  let aboutUs = document.getElementById('aboutUs');
  event.preventDefault();
  //this.style.color = 'red';
  aboutUs.scrollIntoView({block: "center", behavior: "smooth"});
}

let toServices = () => {
  let services = document.getElementById('services');
  event.preventDefault();
  services.scrollIntoView({block: "center", behavior: "smooth"});
}

let toPortfolio = () => {
  let portfolio = document.getElementById('myPortfolio');
  event.preventDefault();
  portfolio.scrollIntoView({block: "center", behavior: "smooth"});
}

let toBlog = () => {
  let blog = document.getElementById('blog');
  event.preventDefault();
  blog.scrollIntoView({block: "center", behavior: "smooth"});
}

let toContact = () => {
  let contact = document.getElementById('contacts');
  event.preventDefault();
  contact.scrollIntoView({block: "center", behavior: "smooth"});
}

// //////// Parse Date in blog

let mobileMenu = document.getElementById('menu-icon');


// mobileMenu.onclick = () => {
//   //alert('!231');
//   let myNavMenu = document.querySelector('nav');
//       myNavMenu.style.display = 'flex';
//    let navMenu = document.querySelector('.menu');
//       navMenu.classList.add('menu-mobile');

//     //   if ( navMenu.classList.contains('menu-mobile') == true) {
//     //     alert('opend')
//     //     myNavMenu.style.display = 'none';
//     //   }
//     //  //nav.classList.add('menu-test')

//     let mobileMenuClosed = () => {
//       if ( navMenu.classList.contains('menu-mobile') == true) {
//         //alert('opend')
//         myNavMenu.style.display = 'none';
//       }
//      //nav.classList.add('menu-test')
//     }
//     setTimeout(mobileMenuClosed, 10000);
// };



mobileMenu.onclick = () => {
  let mobileMenuHide = document.getElementById('nav');
    //alert('!');
     // mobileMenuHide.style.display = 'flex';
      //mobileMenuHide.style.display = (mobileMenuHide.style.display == 'flex') ? 'flex' : 'none'
      if (mobileMenuHide.style.display == 'none') {
        mobileMenuHide.style.display = 'flex'
      } else {
        mobileMenuHide.style.display = 'none';
      }

};

let search = document.getElementById('search');
    
search.onclick = () => {
    
  
    alert('search');
    let parseBox = document.getElementById('parseBox');
        parseBox.innerHTML = '<input type="text">';
  

  }

  let searchM = document.getElementById('searchM');
    
searchM.onclick = () => {
    
  
    alert('search');
    let parseBoxM = document.getElementById('parseBoxM');
        parseBoxM.innerHTML = '<input type="text">';
  

  }



// mobileMenuHide.onclick = () => {
//   //alert('!231');
//   let myNavMenu = document.querySelector('nav');
//       myNavMenu.style.display = 'none';
//   //  let navMenu = document.querySelector('.menu');
//   //     navMenu.classList.add('menu-mobile');
//      //nav.classList.add('menu-test')
// };







let months = ['January','February','March','April','May','June','July',
'August','September','October','November','December'];       
let tomorrow = new Date();
tomorrow.setTime(tomorrow.getTime() + (1000*3600*24));      

let spanDate = document.getElementsByClassName('spanDate');

for (let i = 0; i <= spanDate.length; i++) {
  spanDate[i].innerHTML =  months[tomorrow.getMonth()] + " " + tomorrow.getDate()+ ", " + tomorrow.getFullYear(); 
}
document.getElementsByClassName ("spanDate").innerHTML = months[tomorrow.getMonth()] + " " + tomorrow.getDate()+ ", " + tomorrow.getFullYear()
  
/////////////menu scroll start


/////////////menu scroll end