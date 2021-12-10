function Submit() {
    ten = document.getElementById('user').value
    pass = document.getElementById('pass').value
    if (ten == '' || pass == '') {
        alert('Login failde!\nIncorrect username or password!')
    }
    if (ten == 'admin' && pass == '123456') {
        alert("Login success!\nRedirecting to next page...")
        window.location = "nextpage.html";
    } else {
        alert('Error!!')
    }
}