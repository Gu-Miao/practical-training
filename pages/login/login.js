var usr = document.getElementsByClassName("usr")[0];
var psw = document.getElementsByClassName("psw")[0];
var usr_em = document.getElementsByClassName("em")[0];
var psw_em = document.getElementsByClassName("em")[1];
var reg = document.getElementsByClassName("reg")[0];
var getpsw = document.getElementsByClassName("getpsw")[0];
var btn = document.getElementsByClassName("btn")[0];

usr.value = "用户名";
usr.className += " placeholder";

usr.onfocus = function() {
    if(usr.value == "用户名") {
        usr.value = "";
        console.log(typeof usr.className)
        usr.className = usr.className.split(" ")[0];
    }
}
usr.onblur = function () {
    if(usr.value == "") {
        usr.value = "用户名";
        usr.className += " placeholder";
    }
}

psw.value = "密码";
psw.className += " placeholder";
psw.type = "text";

psw.onfocus = function() {
    if(psw.value == "密码") {
        psw.type = "password";
        psw.value = "";
        console.log(typeof psw.className)
        psw.className = psw.className.split(" ")[0];
    }
}
psw.onblur = function () {
    if(psw.value == "") {
        psw.type = "text";
        psw.value = "密码";
        psw.className += " placeholder";
    }
}

btn.onclick = function() {
    if (usr.value == "" && psw.value == "") {
        usr_em.innerHTML = "* 请输入用户名";
        psw_em.innerHTML = "* 请输入密码";
    } else if(usr.value == "") {
        usr_em.innerHTML = "* 请输入用户名";
    } else if(psw.value == "") {
        psw_em.innerHTML = "* 请输入密码";
    } else {
        alert("登录成功");
    }
}