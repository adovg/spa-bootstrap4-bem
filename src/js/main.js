'use strict';

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



///////////////////////////////////////////////////////////////////////////////////slick-slider
 //$(document).ready(function(){ alert(jQuery.fn.jquery); }); 
 //test jquerry



///////////////////slider

// var multiItemSlider = (function () {
//      return function (selector, config) {
//        var
//          _mainElement = document.querySelector(selector), // основный элемент блока
//          _sliderWrapper = _mainElement.querySelector('.slider__wrapper'), // обертка для .slider-item
//          _sliderItems = _mainElement.querySelectorAll('.slider__item'), // элементы (.slider-item)
//          _sliderControls = _mainElement.querySelectorAll('.slider__control'), // элементы управления
//          _sliderControlLeft = _mainElement.querySelector('.slider__control_left'), // кнопка "LEFT"
//          _sliderControlRight = _mainElement.querySelector('.slider__control_right'), // кнопка "RIGHT"
//          _wrapperWidth = parseFloat(getComputedStyle(_sliderWrapper).width), // ширина обёртки
//          _itemWidth = parseFloat(getComputedStyle(_sliderItems[0]).width), // ширина одного элемента    
//          _positionLeftItem = 0, // позиция левого активного элемента
//          _transform = 0, // значение транфсофрмации .slider_wrapper
//          _step = _itemWidth / _wrapperWidth * 100, // величина шага (для трансформации)
//          _items = []; // массив элементов
//        // наполнение массива _items
//        _sliderItems.forEach(function (item, index) {
//          _items.push({ item: item, position: index, transform: 0 });
//        });

//        var position = {
//          getMin: 0,
//          getMax: _items.length - 1,
//        }

//        var _transformItem = function (direction) {
//          if (direction === 'right') {
//            if ((_positionLeftItem + _wrapperWidth / _itemWidth - 1) >= position.getMax) {
//              return;
//            }
//            if (!_sliderControlLeft.classList.contains('slider__control_show')) {
//              _sliderControlLeft.classList.add('slider__control_show');
//            }
//            if (_sliderControlRight.classList.contains('slider__control_show') && (_positionLeftItem + _wrapperWidth / _itemWidth) >= position.getMax) {
//              _sliderControlRight.classList.remove('slider__control_show');
//            }
//            _positionLeftItem++;
//            _transform -= _step;
//          }
//          if (direction === 'left') {
//            if (_positionLeftItem <= position.getMin) {
//              return;
//            }
//            if (!_sliderControlRight.classList.contains('slider__control_show')) {
//              _sliderControlRight.classList.add('slider__control_show');
//            }
//            if (_sliderControlLeft.classList.contains('slider__control_show') && _positionLeftItem - 1 <= position.getMin) {
//              _sliderControlLeft.classList.remove('slider__control_show');
//            }
//            _positionLeftItem--;
//            _transform += _step;
//          }
//          _sliderWrapper.style.transform = 'translateX(' + _transform + '%)';
//        }

//        // обработчик события click для кнопок "назад" и "вперед"
//        var _controlClick = function (e) {
//          var direction = this.classList.contains('slider__control_right') ? 'right' : 'left';
//          e.preventDefault();
//          _transformItem(direction);
//        };

//        var _setUpListeners = function () {
//          // добавление к кнопкам "назад" и "вперед" обрботчика _controlClick для событя click
//          _sliderControls.forEach(function (item) {
//            item.addEventListener('click', _controlClick);
//          });
//        }

//        // инициализация
//        _setUpListeners();

//        return {
//          right: function () { // метод right
//            _transformItem('right');
//          },
//          left: function () { // метод left
//            _transformItem('left');
//          }
//        }

//      }
//    }());

//    var slider = multiItemSlider('.slider')

// var next = document.getElementById('next');
// var prew = document.getElementById('prew');

// var slides = document.getElementsByClassName('slide');
// for(var i=0; i<slides.length; i++) {
//    slides[i].style.zIndex = slides.length - i;
// }

// next.onclick = function () {
//     var activeEl = document.querySelector('.active');
//     if(activeEl.nextElementSibling) {
//        activeEl.style.left = "-100%";
//        activeEl.classList.remove('active');
//        activeEl.nextElementSibling.classList.add('active');
//        this.classList.remove('no_active');
//        prew.classList.remove('no_active');
//        if(!activeEl.nextElementSibling.nextElementSibling) {
//           this.classList.add('no_active');
//        }
//     }
// }
// prew.onclick = function () {
//     var activeEl = document.querySelector('.active');
//     if(activeEl.previousElementSibling) {
//        activeEl.previousElementSibling.style.left = "0%";
//        activeEl.classList.remove('active');
//        activeEl.previousElementSibling.classList.add('active');
//        this.classList.remove('no_active');
//        next.classList.remove('no_active');
//        if(!activeEl.previousElementSibling.previousElementSibling) {
//           this.classList.add('no_active');
//        }
//     }
// } 

////////////////end of slider

// (function ($) {
//   "use strict";
//   // Auto-scroll
//   $('#myCarousel').carousel({
//     interval: 5000
//   });

//   // Control buttons
//   $('.next').click(function () {
//     $('.carousel').carousel('next');
//     return false;
//   });
//   $('.prev').click(function () {
//     $('.carousel').carousel('prev');
//     return false;
//   });

//   // On carousel scroll
//   $("#myCarousel").on("slide.bs.carousel", function (e) {
//     var $e = $(e.relatedTarget);
//     var idx = $e.index();
//     var itemsPerSlide = 3;
//     var totalItems = $(".carousel-item").length;
//     if (idx >= totalItems - (itemsPerSlide - 1)) {
//       var it = itemsPerSlide -
//           (totalItems - idx);
//       for (var i = 0; i < it; i++) {
//         // append slides to end 
//         if (e.direction == "left") {
//           $(
//             ".carousel-item").eq(i).appendTo(".carousel-inner");
//         } else {
//           $(".carousel-item").eq(0).appendTo(".carousel-inner");
//         }
//       }
//     }
//   });
// })
// (jQuery);

// $('.carousel.carousel-multi-item.v-2 .carousel-item').each(function(){
//   var next = $(this).next();
//   if (!next.length) {
//     next = $(this).siblings(':first');
//   }
//   next.children(':first-child').clone().appendTo($(this));

//   for (var i=0;i<4;i++) {
//     next=next.next();
//     if (!next.length) {
//       next=$(this).siblings(':first');
//     }
//     next.children(':first-child').clone().appendTo($(this));
//   }
// });



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

  
 
let months = ['January','February','March','April','May','June','July',
'August','September','October','November','December'];       
let tomorrow = new Date();
tomorrow.setTime(tomorrow.getTime() + (1000*3600*24));       
document.getElementById("spanDate").innerHTML = months[tomorrow.getMonth()] + " " + tomorrow.getDate()+ ", " + tomorrow.getFullYear()
  
