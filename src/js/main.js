
//   let elements = document.querySelectorAll(".button-portfolio");
// for (let i = 0; i < elements.length; i++) {
//   elements[i].onclick = function(){
//     if (elements[i].onclick = document.getElementById('uix')) {
//     //  myCol = document.getElementsByClassName('.col1')
//       myCol.hidden = true;
//     }
//   };
// }




// //  вариант по ид берет только 1 ид
// let myUix = document.getElementById('uix');
//
//   myUix.onclick = function() {
//
//   document.getElementById('col1').hidden = true;
//    // if (!text.hidden == true) {
//    //   text.hidden = false;
//    //   alert('not hidden');
//    }

let myUix = document.getElementById('uix');

myUix.onclick = function() {

  var divsToHide = document.getElementsByClassName("col123"); //divsToHide is an array

     for(var i = 0; i < divsToHide.length; i++){
          divsToHide[i].style.display = (divsToHide[i].style.display != "none") ? "none" : "block";
         //divsToHide[i].style.visibility = "hidden"; // or
         //divsToHide[i].style.display = "none"; // depending on what you're doing

     }

}


// var divsToHide = document.getElementsByClassName("col123"); //divsToHide is an array
//    for(var i = 0; i < divsToHide.length; i++){
//        divsToHide[i].style.visibility = "hidden"; // or
//        divsToHide[i].style.display = "none"; // depending on what you're doing
//    }


//
// let myCol = document.getElementById('col1');
//
// function showhide(d) {
//   d.style.display = (d.style.display !== 'none') ? 'none' : 'block';
// }
