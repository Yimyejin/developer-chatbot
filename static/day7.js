var s = 0;
var m = 0;
var h = 0;

var m_count = 0;
var h_count = 0;
var timer;
var btn_count = 0;

var time = document.getElementsByClassName("timer")[0];
var start_btn = document.getElementsByClassName("start_btn")[0];

function StartTimer() {
    Timer();
    timer = setTimeout(StartTimer, 1000);
    btn_count = 1;
    if (btn_count == 1) {
        start_btn.disabled = true;
    }
}

function StopTimer() {
    clearTimeout(timer);
    btn_count = 0;
    if (btn_count == 0) {
    start_btn.disabled = false;
    }
}

function ClearTimer() {
    s = 0;
    m = 0;
    h = 0;
    m_count = 0;
    h_count = 0;

    btn_count = 0;
    if (btn_count == 0) {
    start_btn.disabled = false;
    }

    time.innerHTML = "00:00:00";
    clearTimeout(timer);
}

function Timer() {
    s++;
    if (s >= 60) {
        s = 0;
        m_count = 0;
        m++;
    }
    if (m >= 60) {
        m = 0;
        h_count = 0;
        h++;
    }
    if (s < 10) {
        s = '0' + s;
    }
    if (h < 10) {
        if (h_count == 0) {
            h = '0' + h;
            h_count = 1;
        }
    }
    if (m < 10) {
        if (m_count == 0) {
            m = '0' + m;
            m_count = 1;
        }
    }
    time.innerHTML = h + ":" + m + ":" + s;
}
