'use strict';

const DomElement = function (selector, height, width, position = 'relative', shift = 10, top = 150) {
   this.container = document.querySelector('article');
   this.elemTypeDict = {'.': ['div', 'class'], '#': ['p', 'id']};
   this.bg = 'background: white;';
   this.fontSize = 'font-size: 14px; ';
   this.left = 0;

   this.element = document.createElement(this.elemTypeDict[selector[0]][0]);
   this.selector = selector;
   this.selectorName = selector.slice(1);
   this.position = 'position: ' + position + ';';
   this.shift = shift;
   this.top = top;
   this.height = 'height:' + height + 'px; ';
   this.width = 'width: ' + width + 'px; ';
   this.elementDom;
   
   this.setStyle = function() {
      this.element.style.cssText = this.bg + this.width + this.height + this.fontSize + this.position +
      'top: ' + this.top + 'px; ' + 'left: ' + this.left + 'px; ';
   };

   this.render = function() {
      this.setStyle();
      this.element.setAttribute(this.elemTypeDict[selector[0]][1], this.selectorName);
      this.container.appendChild(this.element);
      this.getElem();
   };

   this.getElem = function() {
      this.elementDom = document.querySelector(this.selector);
   }

   this.moveDown = function() {
      console.log(this.elementDom.style.top);   
      //this.top += 10;
      //this.elementDom.style.top = this.top + 'px; ';
   };
};

document.addEventListener('DOMContentLoaded', function(){

   let newElementSquare = new DomElement('.square', 100, 100, 'absolute');   
   newElementSquare.render();
   
   // let keyUp = function () { 
      
   //    topchik -= 10;
   //    let newSquareStyle = squareStyle + ' top: ' + topchik + 'px; left: ' + shift + 'px' ;
   //    square.style.cssText = newSquareStyle ;
   //    console.log(square.style.cssText);
   // };
   
   // let keyRight = function () { 
      
   //    shift += 10;
   //    let newSquareStyle = squareStyle + ' top: ' + topchik + 'px; left: ' + shift + 'px' ;
   //    square.style.cssText = newSquareStyle ;
   //    console.log(square.style.cssText);
   
   // };
   
   // let keyLeft = function () { 
   //    shift -= 10;
   //    let newSquareStyle = squareStyle + ' top: ' + topchik + 'px; left: ' + shift + 'px' ;
   //    square.style.cssText = newSquareStyle ;
   //    console.log(square.style.cssText);
   
   // };
   
   document.addEventListener('keydown', function() {
      newElementSquare.moveDown();     

      // if (event.code == 'ArrowDown') {
      //    keyDown();    
      // } else if (event.code == 'ArrowUp') {
      //    keyUp();
      // } else if (event.code == 'ArrowRight') {
      //    keyRight();
      // } else if (event.code == 'ArrowLeft') {
      //    keyLeft();
      // }
   
   });
} );





       


  






           