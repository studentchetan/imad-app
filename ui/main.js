console.log('Loaded!');
//move the image

//counter Javascript
var button = document.getElementById('counter');
var counter = 0;
var request = new XMLHttpRequest();

request.onreadystatechange = function(){
    if(request.readyState === XMLHttprequest.DONE){
        //Take some action
        if (request.status === 200){
            var counter =request.responseText;
        }
    }
}
button.onclick = function () {
    //Make a request t the counter endpoint and capture a response,store it in a avariable,render the variable in the correct span.
    counter = counter + 1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
    
    
};