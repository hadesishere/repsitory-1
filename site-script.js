console.log('hi')


var firstBox = document.getElementById('first-box');
console.log(firstBox)

firstBox.innerHTML = 'lewis is in this box'

firstBox.style.backgroundColor = 'red'


var secondBox = document.getElementById('second-box')
console.log(secondBox)

secondBox.innerHTML = 'lewis is not in this box'

secondBox.style.backgroundColor = 'orange'


var thirdBox = document.getElementById('third-box')
console.log(thirdBox)

thirdBox.innerHTML = 'lewis is not in this box'

thirdBox.style.backgroundColor = 'green'


function testFunction() {
  console.log('seig');
  firstBox.style.backgroundColor = 'blue';
}

firstBox.addEventListener('click', testFunction);


function onMouseOver() {
  secondBox.style.backgroundColor = 'blue';
  secondBox.innerHTML = 'lewis is in this box';
  console.log('seig');

}

secondBox.addEventListener('mouseover', onMouseOver);


function onMouseOut() {
    secondBox.style.backgroundColor = 'orange';
    secondBox.innerHTML = 'lewis is not in this box';
    console.log('seig')
}


secondBox.addEventListener('mouseout',onMouseOut);

var listOfItems = document.getElementsByClassName('item');
console.log(listOfItems);

function crossOutItem( event ) {
    var item = event.target;
   
   
    if(item.style.textDecoration == 'line-through') {
       item.style.textDecoration = 'none';
    }  else {
        item.style.textDecoration = 'line-through';
    } 

}


for(var count = 0; count < listOfItems.length;count++) {
    console.log('loop ran', count);
    var item = listOfItems[count];
    console.log(item);
    item.addEventListener('click', crossOutItem)
}


var timeBetweenUpdates = 1000;

var hoursBox = document.getElementById('hours');
var minutesBox = document.getElementById('minutes');
var secondsBox = document.getElementById('seconds');

function displayTime() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    hoursBox.innerHTML = hours;
    minutesBox.innerHTML = minutes;
    secondsBox.innerHTML = seconds;



    console.log('the time is...', date);
    console.log(hours,minutes,seconds);
}


var clockTimer = setInterval(displayTime, timeBetweenUpdates);







































































































































































































