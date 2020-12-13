//标题移动的效果
var ti = document.getElementById("ti");
ti.style.marginLeft = "0";
var timeId = setInterval(function () {
    var marginLeft = parseInt(ti.style.marginLeft);
    ti.style.marginLeft = (marginLeft + 1) + "px";
    if (marginLeft == 1200) {
        ti.style.marginLeft = "-800px";
    }
}, 10)

//跳转到注册页面
var login = document.getElementById("Blogin");
login.onclick = function () {
    window.open("demo1.html");
}

//点击列表时  修改标题名字
var title = document.getElementById("title");
var subul = document.getElementById("subul");
var liList = subul.getElementsByTagName("li");
for (var i = 0; i < liList.length; i++) {
    liList[i].onclick = function () {
        var titleName = this.innerHTML;
        title.innerHTML = titleName;
    }
}

//电影评分
var pic = document.getElementById("pic");
var picList = pic.getElementsByTagName("img");
var txt = document.getElementById("txt");
var comment = ["差", "一般", "中等", "还行", "好"];
var flag = true;
for (var i = 0; i < picList.length; i++) {
    picList[i].onmouseover = function () {
        if (!flag) {
            return;
        }
        var index = this.getAttribute("title");
        txt.value = comment[index - 1];
        var imgSrc = "";
        if (index <= 2) {
            imgSrc = "images/star1.png";
        } else {
            imgSrc = "images/star2.png";
        }
        for (var j = 0; j < index; j++) {
            picList[j].setAttribute("src", imgSrc);
        }
    }
    picList[i].onmouseout = function () {
        if (!flag) {
            return;
        }
        var index = this.getAttribute("title");
        for (var j = 0; j < index; j++) {
            picList[j].setAttribute("src", "images/star0.png");
        }
        txt.value = "";
    }
    picList[i].onclick = function () {
        flag = !flag;
    }
}

//放大图片
var images = document.getElementById("images");
var bigpic = document.getElementById("bigpic");
var imgs = images.getElementsByTagName("img");
var characters = document.getElementById("characters");
var divs = characters.getElementsByTagName("div")
for (var i = 0; i < imgs.length; i++) {
    imgs[i].onclick = function () {
        var link = this.getAttribute("src");
        bigpic.setAttribute("src", link);
    }
}



