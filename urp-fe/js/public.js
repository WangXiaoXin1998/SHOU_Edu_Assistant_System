var token=""
var User = {}

function checkToken(){
    if (localStorage['token']) {
        token = localStorage['token']
        User = JSON.parse(localStorage.User)
    } else if (sessionStorage['token']) {
        token = sessionStorage['token']
        User = JSON.parse(sessionStorage.User)
    }
    if (!token) {
        window.location.href = 'login.html'
    }
}

function goBack() {
	history.go(-1);
}