x=9;
y=2;

function add(){
    var p1=document.getElementById('result')
    p1.innerHTML="결과 : " + x + " + " + y + " = " + (x+y);
}
function sub(){
    var p1=document.getElementById('result')
    p1.innerHTML="결과 : " + x + " - " + y + " = " + (x-y);
}
function mul(){
    var p1=document.getElementById('result')
    p1.innerHTML="결과 : " + x + " * " + y + " = " + (x*y);
}
function div(){
    var p1=document.getElementById('result')
    p1.innerHTML="결과 : " + x + " / " + y + " = " + (x/y);
}
function reminder(){
    var p1=document.getElementById('result')
    p1.innerHTML="결과 : " + x + " % " + y + " = " + (x%y);
}

