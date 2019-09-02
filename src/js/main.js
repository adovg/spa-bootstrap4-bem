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
// $(document).ready(function(){ alert(jQuery.fn.jquery); }); test jquerry



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

var next = document.getElementById('next');
var prew = document.getElementById('prew');

var slides = document.getElementsByClassName('slide');
for(var i=0; i<slides.length; i++) {
   slides[i].style.zIndex = slides.length - i;
}

next.onclick = function () {
    var activeEl = document.querySelector('.active');
    if(activeEl.nextElementSibling) {
       activeEl.style.left = "-100%";
       activeEl.classList.remove('active');
       activeEl.nextElementSibling.classList.add('active');
       this.classList.remove('no_active');
       prew.classList.remove('no_active');
       if(!activeEl.nextElementSibling.nextElementSibling) {
          this.classList.add('no_active');
       }
    }
}
prew.onclick = function () {
    var activeEl = document.querySelector('.active');
    if(activeEl.previousElementSibling) {
       activeEl.previousElementSibling.style.left = "0%";
       activeEl.classList.remove('active');
       activeEl.previousElementSibling.classList.add('active');
       this.classList.remove('no_active');
       next.classList.remove('no_active');
       if(!activeEl.previousElementSibling.previousElementSibling) {
          this.classList.add('no_active');
       }
    }
} 

////////////////end of slider
