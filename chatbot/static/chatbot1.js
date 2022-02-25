var n = 0;
var follow = 0;

var question = "";
var answer = "";
var key = 0;


var app = document.getElementById('chat');


var typewriter = new Typewriter(app, {
    loop: false
});

typewriter.typeString("모든 말 뒤에 세미콜론을 붙이는 개발자곰;")
    .pauseFor(1900)
    .start()

var json = [{
        "question": "나이",
        "answer": "제 나이는 비밀이에욧..!;"
    },
    {
        "question": "개발자란",
        "answer": "힘들고.. 고된것이지요..;"
    }
]

function check_text() {
    var value = document.getElementById("console").value;
    var chat = document.getElementById("chat");
    var img = document.getElementById("img");

    if (follow == 1) {
        if (value.includes("그만")) {
            chat.innerHTML = "넵..!!; 재밌었는데..;";
            img.src = "./static/images/좌절.png"
            follow = 0;
        } else {
            chat.innerHTML = value + ";";
            img.src = "./static/images/이모티콘.png"
        }
    } else if (follow == 0) {


        if (value.includes("따라")) {
            chat.innerHTML = "네!; 어떤 말이든 따라해보죠!;";
            img.src = "./static/images/넵.png";
            follow = 1;
        } else if (value.includes("불") && value.includes("꺼")) {
            if (n == 0) {
                n++;
                chat.innerText = "style... backgroundColor... 엇.. 왜 안 꺼지죠?;"
                img.src = "./static/images/이모티콘.png"
            } else {
                document.querySelector("body").style.backgroundColor = "rgb(59, 93, 107)";
                chat.innerText = "앗!; 됐다!; 어두워서 잘 안보여요 ꒰⑅ᵕ༚ᵕ꒱;"
                n = 0;
            }
        } else if (value.includes("불") && value.includes("켜")) {
            if (n == 0) {
                n++;
                chat.innerText = "불.. 켜드릴게요!;"
                img.src = "./static/images/불.jpg"
            } else {
                document.querySelector("body").style.backgroundColor = "rgb(214, 244, 255)";
                chat.innerText = "ㅎㅎ이번엔 제대로 켜드릴게요!; 너무 밝아서 눈이 부셔요( ͒˃⌂˂ ͒);"
                img.src = "./static/images/이모티콘.png"
                n = 0;
            }
        } else if (value == "원래대로" || value == "원상복구") {
            document.querySelector("body").style.backgroundColor = "rgb(166, 202, 216)";
            chat.innerText = "헤헷. 다시 돌아왔어요!; 이제 편안하다~ ʕ╹ヮ╹｡ʔ;"
            img.src = "./static/images/이모티콘.png"
        } else if (value.includes("안녕")) {
            chat.innerText = "안녕하세요!; 저는 코딩중인 개발자곰이랍니다! ( . ̫ .)💗;"
            img.src = "./static/images/안녕.png"
        } else if (value.includes("잘가")) {
            chat.innerText = "안녕히가세요..; 다음에 또 오실거죠? ༼ ༎ຶ ෴ ༎ຶ༽;"
            img.src = "./static/images/잘가.png"
        } else if (value.includes("도와줘")) {
            chat.innerText = "무슨일이신가요?; 어떤 도움을 드릴까요? (」゜ロ゜)」;"
            img.src = "./static/images/놀람.png"
        } else if (value.includes("코딩")) {
            chat.innerText = "코딩은 정말... 어려운 친구죠 ᕕ(ꐦ°᷄д°᷅)ᕗ;"
            img.src = "./static/images/화.png"
        } else if (value.includes("셀카")) {
            chat.innerText = "아잇.. 제 셀카요?; 민망한데 .. ~ 어때요? ヾ(*ゝω・*)ﾉ;"
            img.src = "./static/images/셀카.png"
        } else if (value.includes("사랑해") || value.includes("좋아해")) {
            chat.innerText = "저도요 !!! *.☆⸜(⑉˙ᗜ˙⑉)⸝♡.*;"
            img.src = "./static/images/사랑해.png"
        } else if (value.includes("뭐해")) {
            chat.innerText = "저는.. 열심히 코딩중이랍니다! ヽ(。_°)ノ;"
            img.src = "./static/images/이모티콘.png"
        } else {
            checkText();
        }
    }
}


function checkText() {
    var value = document.getElementById("console").value;
    var chat = document.getElementById("chat");
    var img = document.getElementById("img");

    if (key == 1) {
        if (value == "응") {
            chat.innerText = "대답을 입력해주세요.;"
            img.src = "./static/images/이모티콘.png"
            key = 2;
        } else {
            chat.innerText = "넵;"
            img.src = "./static/images/이모티콘.png"
            key = 0;
        }
        return;
    }


    if (key == 2) {
        answer = value;
        push_json();
        return;
    }

    for (let i = 0; i < json.length; i++) {
        if (value == json[i].question) {
            chat.innerText = json[i].answer;
            img.src = "./static/images/이모티콘.png"
            return;
        }
    }

    chat.innerText = "모르는 말이에요.; 말을 가르쳐 주실래요?;(응 or 아니)"
    question = value;
    key = 1;
}


function push_json() {
    json.push({
        question: `${question}`,
        answer: `${answer}`
    });
    chat.innerText = "말을 배웠습니다!;"
    key = 0;
}



function popUpOpen() {
    document.getElementById("howtoBox").style.display = "block";
    document.getElementById("overlay").style.display = "block";
}


function onClick2() {
    popUpOpen();
}


document.getElementById("howto").addEventListener("click", onClick2)





function popUpClose() {
    document.getElementById("howtoBox").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}


function onClick3() {
    popUpClose();
}


document.getElementById("btn-close").addEventListener("click", onClick3)