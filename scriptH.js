'use strict';

const article = document.querySelector('article');

const DomElement = function () {
    this.selector = '.class',
    this.height = 10,
    this.width = 10,
    this.bg = 'white',
    this.fontSize = 14
};

DomElement.prototype.style = function() {
   return 'color:' + this.bg + '; width: ' + this.width + 'px; height: ' + this.height + 'px; font-size: ' + this.fontSize + 'px;' ;
  };

DomElement.prototype.createElement = function(text) {

      let block;
         if(this.selector[0] == '.') {
             block  = document.createElement('div');
            block.classListAdd = this.selector.slice(1);

         } else if(this.selector[0] == '#') {
             block = document.createElement('p');
             block.id = this.selector.slice(1);
            article.appendChild(block);
         };
      let textContent;
       if (text) {
         textContent = prompt('введите текст для элемента'); 
         block.textContent = textContent;
      };
         article.appendChild(block);
         
         block.style.cssText = this.style();
    };


let newElement = new DomElement();
console.log(newElement);
newElement.selector = '.text';
newElement.height = 20;
newElement.width = 1000;
newElement.bg = 'red';
newElement.fontSize = 54;

newElement.createElement(1);


document.addEventListener('DOMContentLoaded', function(){

   let newElementSquare = new DomElement();
   newElementSquare.selector = '.square';
   newElementSquare.height = 100;
   newElementSquare.width = 100;     
   
   newElementSquare.createElement();

    let square = document.querySelectorAll('div')[1];
    console.log(square);
    let topchik = 150;
    let shift = 10;

    let squareStyle = newElementSquare.style() + ' position: absolute; background-color: red; '; 

   square.style.cssText = squareStyle + ' top: ' + topchik + 'px; left: ' + shift + 'px' ;

   console.log(square.style.cssText);
   
   let keyDown = function () { 
      
      topchik += 10;
      let newSquareStyle = squareStyle + ' top: ' + topchik + 'px; left: ' + shift + 'px'  ;
      square.style.cssText = newSquareStyle ;
      // console.log(square.style.cssText);
   };
   
   let keyUp = function () { 
      
      topchik -= 10;
      let newSquareStyle = squareStyle + ' top: ' + topchik + 'px; left: ' + shift + 'px' ;
      square.style.cssText = newSquareStyle ;
      console.log(square.style.cssText);
   };
   
   let keyRight = function () { 
      
      shift += 10;
      let newSquareStyle = squareStyle + ' top: ' + topchik + 'px; left: ' + shift + 'px' ;
      square.style.cssText = newSquareStyle ;
      console.log(square.style.cssText);
   
   };
   
   let keyLeft = function () { 
      shift -= 10;
      let newSquareStyle = squareStyle + ' top: ' + topchik + 'px; left: ' + shift + 'px' ;
      square.style.cssText = newSquareStyle ;
      console.log(square.style.cssText);
   
   };
   
   document.addEventListener('keydown', function() {
      if (event.code == 'ArrowDown') {
         keyDown();    
      } else if (event.code == 'ArrowUp') {
         keyUp();
      } else if (event.code == 'ArrowRight') {
         keyRight();
      } else if (event.code == 'ArrowLeft') {
         keyLeft();
      }
   
   });
} );





       


  






           