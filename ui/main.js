console.log('Loaded!');
//move the image

//counter Javascript

var counter = 0;
var request = new XMLHttpRequest();
var button = document.getElementById('counter');

button.onclick = function () {


request.onreadystatechange = function(){
    if(request.readyState === XMLHttprequest.DONE){
        //Take some action
        if (request.status === 200){
            var counter =request.responseText;
            var span = document.getElementById('count');
            span.innerHTML = counter.toString();
        }
    }
};
//make the request
request.open('GET','http://chetankar65.imad.hasura-app.io/counter',true);
request.send(null);
};