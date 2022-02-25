var mogakko = new phoneNum("모각코", "010-2222-4444");
var phoneName = document.getElementById("name");

var number = document.getElementById("num");

function phoneNum(name, num){
    this.name = name;
    this.num = num;
}

function call(){
    setTimeout(printNum, 2000);
}

function printNum(){
    phoneName.innerHTML = mogakko.name;
    number.innerHTML = mogakko.num;
}
