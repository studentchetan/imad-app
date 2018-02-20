console.log('Loaded!');
//move the image

//counter Javascript
var button = document.getElementById('counter');
var counter = 0;
button.onclick = function () {
    //Make a request t the counter endpoint and capture a response,store it in a avariable,render the variable in the correct span.
    counter = counter + 1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
    
    
};