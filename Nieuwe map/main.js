function clock () {
    var today = new Date(); 
    var hour  = today.getHours();
    var formatDate = today.getHours() + ":" + leadingZero(today.getMinutes()) + ":" + leadingZero(today.getSeconds());
    
    if (hour > 9 && hour < 18) {
        //zonnetje
        document.getElementById('zonnemaan-img').src = 'sun.png'; 
    } else {
        //maantje
        document.getElementById('zonnemaan-img').src = 'moon.png';
    }

    document.getElementById('tijd').innerHTML = formatDate; 
}

setInterval(clock, 1000); 

function leadingZero (number) {
    
    if (number < 10) {
        return '0'+number;
    } else {
        return number;
    }
};

var disco = document.getElementById('tijd');

setInterval(changeColor, 10000); 

function changeColor (){
    var r = Math.floor(Math.random()*255);
    var g = Math.floor(Math.random()*255);
    var b = Math.floor(Math.random()*255);
    
    disco.style.color = "RGB("+r+","+g+","+b+")";
    
}
changeColor();

var today = new Date();

var maanden = ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december'];

var formatDate = today.getDate() + " " + maanden[today.getMonth()] + " " + today.getFullYear();

document.getElementById('datum').innerHTML = formatDate;
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    //var today = new Date();
    
    //var formatTime = today.getHours() + ":" + today.getMinutes() + ":" + leadingZero(today.getSeconds());
    
    //document.getElementById('clock').innerHTML = formatTime;
    
    //document.getElementById('clock').innerHTML = today.toString();
    
    //document.getElementById('clock').innerHTML = today.getMonth() + 1;
    
    //document.getElementById('clock').innerHTML = today.getYear(); // - 1900
    //document.getElementById('clock').innerHTML = today.getFullYear();
    // document.getElementById('clock').innerHTML = today.getDate();
    // document.getElementById('clock').innerHTML = today.getDay();
    //document.getElementById('clock').innerHTML = today.getHours();
    
    
    //document.getElementById('clock').innerHTML = today.getMinutes();
    //document.getElementById('clock').innerHTML = today.getSeconds();
    //document.getElementById('clock').innerHTML = today.getMilliseconds();
    //document.getElementById('clock').innerHTML = today.getTime();
    