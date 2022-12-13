/* Java Script Login Authentication */

function dekor1() {
    dekor_1 = document.getElementById("home");
    dekor_1.style.color = "blue";
}

function dekor2() {
    dekor_2 = document.getElementById("home");
    dekor_2.style.color = "black";
}

function cekform() {
    let uname = document.getElementById("username").value;
    let pw = document.getElementById("password").value;

    if(uname != "fadhilahane1" || pw != "delacantik12") {
        alert("Username atau Password yang anda masukan salah!")
    }else{
        document.getElementById("login").href = 'loginsukses.html'
    }
}