const sendBtn = document.querySelector('#sendBtn');
const messageIn = document.querySelector('#messageIn');
const messageOut = document.querySelector('#messageOut');

var content_array = [];
sendBtn.addEventListener('click', sendMsg);

function sendMsg() {
    let content = messageIn.value;
    // console.log(content);
    if (content === '') {
        alert('Please enter a valid value!');
    } else {
        content_array.push(content);
        // console.log(content_array);
        messageOut.innerHTML = content_array;

        messageIn.value = '';
    }
}