console.log('Loaded!');
//move the image

//counter Javascript

var request = new XMLHttpRequest();


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

//submit name
var nameInput = document.getElementbyId('name');
var name = nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onclick = function (){
    //make request to server and send name
    
    //capture a list of names and render it as list
    var names = [''];
    var list = '';
    for (var i=0;i < names.length; i++){
        list += '<li>' + names[i] + '</li>';
    }
    var ul = document.getElementById('namelist');
    ul.innerHTML = list;
    
};
var nameInput = document.getElementById('name');
var name = nameInput.value;

