function Submit() {
    var taikhoan = document.getElementById('name').value
    var matkhau = document.getElementById('pass').value
    if (taikhoan == '', matkhau == '') {
        alert("điền đủ thông tin")
    } else {
        alert("Đăng nhập thành công")
    }
}

function Reset() {
    document.getElementById("myform").Reset();
}