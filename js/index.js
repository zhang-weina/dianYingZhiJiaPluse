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

/*点击注册账户显示注册页面
注册成功后“注册账户”变为“个人中心”*/
var formDiv = document.getElementById("formDiv");
var uname = document.getElementById("uname");
var username = document.getElementById("username");
var p1 = document.createElement("p");
formDiv.style.display = "none";
var login = document.getElementById("Blogin");
login.onclick = function () {
    formDiv.style.display = "block";
}
uname.onfocus = function () {
    p1.innerHTML = "支持中文数字";
    p1.style.fontSize = "10px";
    p1.style.color = "gray";
    username.appendChild(p1);
}
uname.onblur = function () {
    if (this.value == "") {
        p1.innerHTML = "用户名不能为空";
        p1.style.fontSize = "10px";
        p1.style.color = "gray";
        username.appendChild(p1);
    } else {
        username.removeChild(p1);
    }
}
var password = document.getElementById("password");
var pw = document.getElementById("pw");
var p2 = document.createElement("p");
password.onfocus = function () {
    p2.innerHTML = "建议使用两种字符组合";
    p2.style.fontSize = "10px";
    p2.style.color = "gray";
    pw.appendChild(p2);
}
password.onblur = function () {
    if (this.value == "") {
        p2.innerHTML = "密码不能为空";
        p2.style.fontSize = "10px";
        p2.style.color = "gray";
        pw.appendChild(p2);
    } else {
        pw.removeChild(p2);
    }
}

var sub = document.getElementById("sub");
var form = document.getElementById("form");
sub.onclick = function () {
    if (uname.value != "" && password.value != "") {
        alert("注册成功！");
        login.innerHTML = "个人中心";
        formDiv.style.display = "none";
        
    } else {
        alert("注册失败！");
        formDiv.style.display = "none";
    }

}

//banner列表滑上，显示不同列表
var list = document.getElementById("list");
var liList = list.getElementsByTagName("li");
var listTwo = document.getElementById("listTwo");
var liListTwo = listTwo.getElementsByTagName("li");
var arr = [];
for (var i = 0; i < liListTwo.length; i++) {
    arr.push(liListTwo[i].innerHTML);
}
for (var i = 0; i < liList.length; i++) {
    liList[i].onmouseover = function () {
        this.style.color = "yellow";
        liListTwo[0].innerHTML = this.innerHTML + "概要";
        for (var j = 1; j < liListTwo.length; j++) {
            liListTwo[j].innerHTML = this.innerHTML + j + "名称";
        }
    }
    liList[i].onmouseout = function () {
        this.style.color = "white";
        for (var j = 0; j < liListTwo.length; j++) {
            liListTwo[j].innerHTML = arr[j];
        }
    }
}

//banner图下方点击列表时  修改下方标题名字和图片
var title = document.getElementById("title");
var subul = document.getElementById("subul");
var liList = subul.getElementsByTagName("li");
var imgs = document.getElementById("images");
var imgList = imgs.getElementsByTagName("img");
for (var i = 0; i < liList.length; i++) {
    liList[i].onclick = function () {
        var titleName = this.innerHTML;
        title.innerHTML = titleName;
        for (var j = 0; j < imgList.length; j++) {
            var str = imgList[j].getAttribute("src");
            var num = 0;
            if (parseInt(str.charAt(7)) >= 6) {
                num = parseInt(str.charAt(7)) - 5;
            } else {
                num = parseInt(str.charAt(7)) + 5;
            }
            imgList[j].setAttribute("src", "images/" + num + ".png");
        }

    }
}

//电影评分
var pic = document.getElementById("pic");
var picList = pic.getElementsByTagName("img");
var txt = document.getElementById("txt");
var comment = ["差", "一般", "中等", "较好", "好"];
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



