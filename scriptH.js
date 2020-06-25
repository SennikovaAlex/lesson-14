'use strict';

const article = document.querySelector('article');

const DomElement = {
    selector: '#class',
    height: 80,
    width: 1000,
    bg: 'red',
    fontSize: 56,
    createElement: function() {
      let text = prompt('введите текст для элемента');
         if(this.selector[0] == '.') {
            let div = document.createElement('div');
            div.textContent = text;
            div.classListAdd = this.selector.slice(1);
            div.style.cssText = 'color:' + this.bg + '; background-color: black; width: ' + this.width + 'px; height: ' + this.height + 'px; font-size: ' + this.fontSize + 'px;';
            
            article.appendChild(div);

            // let div = '<div class = ' + this.selector.slice(1) + ', style= "color: ' + this.bg + '; width: ' + this.width + 'px; height: ' + this.height + 'px; fontSize: ' + this.fontSize + 'px"> hello, i am a new element </div>';
            // article.insertAdjacentHTML('afterBegin', div);
            


         } else if(this.selector[0] == '#') {
            let p = document.createElement('p');
            p.textContent = text;
            p.id = this.selector.slice(1);
            p.style.cssText = 'color:' + this.bg + '; background-color: black; width: ' + this.width + 'px; height: ' + this.height + 'px; font-size: ' + this.fontSize + 'px;';

            article.appendChild(p);

            // let p = '<p id = ' + this.selector.slice(1) + '' + ' , style= "color: ' + this.bg + '; width: ' + this.width + 'px; height: ' + this.height + 'px; fontSize: ' + this.fontSize + 'px"> hello, i am a new element </p>';

            // article.insertAdjacentHTML('afterBegin', p);

         }
    }
};

let newElement = Object.create(DomElement);

newElement.createElement();


           