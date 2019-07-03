// 轮播图
window.onload = function () {
    var oBox = document.getElementById("box");
    var imgs = oBox.getElementsByTagName("img");
    var lits = oBox.getElementsByTagName("li");
    var timer = null;
    var cur = 0;
    var len = lits.length;

    timer = setInterval(autoPlay, 2000);

    oBox.onmouseover = function () {
        clearInterval(timer);
    }
    oBox.onmouseout = function () {
        timer = setInterval(autoPlay, 2000);
    }
    for (var i = 0; i < len; i++) {
        (function (j) {
            lits[j].onclick = function () {
                changePic(j);
                cur = j;
            }
        })(i);
    }

    function autoPlay() {
        cur++;
        if (cur >= len) { cur = 0 }
        changePic(cur);
    }
    function changePic(curIndex) {
        for (var i = 0; i < len; i++) {
            imgs[i].className = "unshow";
            lits[i].className = "";
        }
        imgs[curIndex].className = "show";
        lits[curIndex].className = "active";
    }
}

// 导航
var oWrapper = document.getElementById('wrapper');
var oNavbs = document.getElementById('nav-bs');
var oNavc = document.getElementById('nav-c');
var oRe = document.getElementById('re');

var oNavc1 = document.getElementById('navc1');
var oNavc2 = document.getElementById('navc2');
var oNavc3 = document.getElementById('navc3');
var oNavc4 = document.getElementById('navc4');

var oNavone = document.getElementById('nav-one');
var oNavtwo = document.getElementById('nav-two');
var oNavthree = document.getElementById('nav-three');
var oNavfour = document.getElementById('nav-four');

var oBack = document.getElementById('back');

// PC
oNavbs.onclick = function () {
    oNavc.style.display = 'block';
    oWrapper.style.position = 'absolute';
    oWrapper.style.left = '250px';
};
oRe.onclick = function () {
    oNavc.style.display = 'none';
    oWrapper.style.position = 'absolute';
    oWrapper.style.left = '0';
}
oBack.onclick = function () {
    $('html,body').scrollTop(0);
}
// 移动
oNavbs.tag = function () {
    oNavc.style.display = 'block';
    oWrapper.style.position = 'absolute';
    oWrapper.style.left = '250px';
};
oRe.tag = function () {
    oNavc.style.display = 'none';
    oWrapper.style.position = 'absolute';
    oWrapper.style.left = '0';
}

// PC
oNavc1.onclick = function () {
    oNavc.style.display = 'none';
    oWrapper.style.position = 'absolute';
    oWrapper.style.left = '0';
};
oNavc2.onclick = function () {
    oNavc.style.display = 'none';
    oWrapper.style.position = 'absolute';
    oWrapper.style.left = '0';
    $('html,body').scrollTop(200);
};
oNavtwo.onclick = function () {
    $('html,body').scrollTop(600);
};
oNavc3.onclick = function () {
    oNavc.style.display = 'none';
    oWrapper.style.position = 'absolute';
    oWrapper.style.left = '0';
    $('html,body').scrollTop(400);
};
oNavthree.onclick = function () {
    $('html,body').scrollTop(700);
};
oNavc4.onclick = function () {
    oNavc.style.display = 'none';
    oWrapper.style.position = 'absolute';
    oWrapper.style.left = '0';
    $('html,body').scrollTop(1300);
};
oNavfour.onclick = function () {
    $('html,body').scrollTop(1300);
};
// 移动
oNavc1.tag = function () {
    oNavc.style.display = 'none';
    oWrapper.style.position = 'absolute';
    oWrapper.style.left = '0';
};
oNavc2.tag = function () {
    oNavc.style.display = 'none';
    oWrapper.style.position = 'absolute';
    oWrapper.style.left = '0';
    $('html,body').scrollTop(0);
};
oNavc3.tag = function () {
    oNavc.style.display = 'none';
    oWrapper.style.position = 'absolute';
    oWrapper.style.left = '0';
    $('html,body').scrollTop(300);
};
oNavc4.tag = function () {
    oNavc.style.display = 'none';
    oWrapper.style.position = 'absolute';
    oWrapper.style.left = '0';
    $('html,body').scrollTop(700);
};

// 钟表
var box3 = document.getElementsByClassName("box3")[0];
var myClock = function () {
    var Day = new Date();
    var year = Day.getFullYear();
    var month = Day.getMonth();
    var data = Day.getDate();
    var day = Day.getDay();
    var hour = Day.getHours();
    var minu = Day.getMinutes();
    var second = Day.getSeconds();
    month = month + 1;
    var str = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六");
    var week = str[day];
    var time = year + "年" + month + "月" + data + "日" + " " + week + " " + hour + " ：" + minu + "：" + second;
    box3.innerHTML = time;
}
setInterval(function () {
    myClock();
}, 1000);
