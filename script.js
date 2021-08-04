
let inputdiv = document.getElementById('inputdiv');
let input = document.createElement('input');
let button = document.createElement('button_input');

inputdiv.append(input)
inputdiv.append(button_input)


button.textContent = 'отправить';





/*let btn = document.getElementById('btn');
let startCursorX;
let startCursorY;
let startX;
let startY;
	btn.addEventListener('dragstart',function() {
	  startCursorX = event.pageX;//Начальная позиция курсора по оси X
	  startCursorY = event.pageY;//Начальная позиция курсора по оси Y
	  startX = btn.style.marginLeft.replace('px','')*1; // Нам нужны только цыфры без PX
	  startY = btn.style.marginTop.replace('px','')*1;
	});
	
	btn.addEventListener('dragend',function() {
        btn.style.position = 'absolute';//CSS теперь элемент "Блуждающий" 
        btn.style.marginLeft = startX + event.pageX-startCursorX; //позиция элемента + позиция курсора - позиция курсоа в начале перетаскивания
        btn.style.marginTop = startY + event.pageY-startCursorY; // Так же как и в предыдущем случае, только по другой оси
    }); */