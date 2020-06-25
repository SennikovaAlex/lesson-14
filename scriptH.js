'use strict';

const article = document.querySelector('article');

const DomElement = {
    selector: '#class',
    height: 10,
    width: 1000,
    bg: 'red',
    fontSize: 56,
    createElement: function() {
         if(this.selector[0] == '.') {
            let div = '<div class = ' + this.selector.slice(1) + ', style= "color: ' + this.bg + '; width: ' + this.width + 'px; height: ' + this.height + 'px; fontSize: ' + this.fontSize + 'px"> hello, i am a new element </div>';
            article.insertAdjacentHTML('afterBegin', div);
            


         } else if(this.selector[0] == '#') {
            let p = '<p id = ' + this.selector.slice(1) + '' + ' , style= "color: ' + this.bg + '; width: ' + this.width + 'px; height: ' + this.height + 'px; fontSize: ' + this.fontSize + 'px"> hello, i am a new element </p>';

            article.insertAdjacentHTML('afterBegin', p);

         }
    }
};

let newElement = Object.create(DomElement);

newElement.createElement();


           