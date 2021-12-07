function Submit() {
    var msv = document.getElementById('msv').value
    var hvt = document.getElementById('name').value
    var muon = document.getElementById('muon').value
    var tra = document.getElementById('tra').value
    if (msv == '' || hvt == '') {
        alert("điền đủ thông tin")
    } else {
        alert("Mượn thành công")
    }
}