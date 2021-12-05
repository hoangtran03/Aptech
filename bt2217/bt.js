function Save() {
    var text = document.getElementById('tieude').value
    var noidung = document.getElementById('content').value
    if (tieude == '', noidung == '') {
        alert("điền đủ thông tin")
    } else {
        alert("Tạo bài viết thành công")
    }
}

function Reset() {
    document.getElementById("myform").Reset();
}