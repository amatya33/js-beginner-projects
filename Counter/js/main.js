let counter = document.querySelector('.counter');
const addCount = document.querySelector('#addCountBtn');
const lowerCountt = document.querySelector('#lowerCountBtn');

var count = 0;

addCount.addEventListener('click', incrementCounter);
lowerCountt.addEventListener('click', decrementCounter);


function incrementCounter() {
    count++;
    counter.innerHTML = count;

    if (counter.innerHTML > 0) {
        counter.style.color = '#FF0000';
    } else if (counter.innerHTML === '0') {
        counter.style.color = 'white';
    }
    counter.animate([{
        opacity: '0.2'
    }, {
        opacity: '1.0'
    }], {
        duration: 500,
        fill: 'forwards'
    });
}

function decrementCounter() {
    count--;
    counter.innerHTML = count;

    if (counter.innerHTML < 0) {
        counter.style.color = '#800080';
    } else if (counter.innerHTML === '0') {
        counter.style.color = 'white';
    }
    counter.animate([{
        opacity: '0.2'
    }, {
        opacity: '1.0'
    }], {
        duration: 1000,
        fill: 'forwards'
    });
}