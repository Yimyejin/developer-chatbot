var title = document.getElementById("title");
var year = document.getElementById("year");
var genre = document.getElementById("genre");

function movies(title, year, genre){
    this.title = title;
    this.year = year;
    this.genre = genre;
}

function m1(){
    var m1 = new movies("Me Before You", 2016, "멜로/로맨스");
    title.innerHTML = m1.title;
    year.innerHTML = m1.year;
    genre.innerHTML = m1.genre;
}
function m2(){
    var m2 = new movies("Spider-Man: No Way Home", 2021, "액션");
    title.innerHTML = m2.title;
    year.innerHTML = m2.year;
    genre.innerHTML = m2.genre;
}
function m3(){
    var m3 = new movies("If Only", 2004, "멜로/로맨스");
    title.innerHTML = m3.title;
    year.innerHTML = m3.year;
    genre.innerHTML = m3.genre;
}