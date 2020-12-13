var uname = document.getElementById("uname");
var username = document.getElementById("username");
var p1 = document.createElement("p");
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
        window.open("index.html");
    } else {
        alert("注册失败！");
        window.open("index.html");
    }

}