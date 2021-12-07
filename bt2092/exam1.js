function Submit() {
    taikhoan = document.getElementById('name').value
    matkhau = document.getElementById('pass').value
    if (taikhoan == '' || matkhau == '') {
        alert("điền đủ thông tin tài khoản và mật khẩu")
    } else {
        popupTag = document.getElementById('popup_id')
        popupTag.style.display = "block"
    }
}

function hidePopup() {
    popupTag = document.getElementById('popup_id')
    popupTag.style.display = "none"
}