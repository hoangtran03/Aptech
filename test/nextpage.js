var productList = []
var count = 0

function addProduct() {
    var studentnameTag = document.getElementById('student_id').value
    var dobTag = document.getElementById('date_id').value
    var classTag = document.getElementById('class_id').value

    var product = {
        'studentname': studentnameTag.value,
        'ngay': dobTag.value,
        'class_name': classTag.value
    }

    productList.push(product)

    document.getElementById('result').innerHTML += `<tr>
                <td>${studentnameTag}</td>
                <td>${classTag}</td>
                <td>${dobTag}</td>
                <td><button class="btn btn-danger" onclick="deleteProduct(${count - 1})">Delete</button></td>
            </tr>`
}

function deleteProduct(studentnameTag) {
    console.log(studentnameTag)
    productList.splice(studentnameTag, 1)
    showProduct();
    confirm('Do you want to delete')
}

function showProduct() {
    document.getElementById('result').innerHTML = ''

    for (var i = 0; i < productList.length; i++) {
        document.getElementById('result').innerHTML += `<tr>
						<td>${productList[i].studentnameTag}</td>
						// <td>${productList[i].classTag}</td>
						<td>${productList[i].dobTag}</td>
						<td><button class="btn btn-danger" onclick="deleteProduct(${i})">Delete</button></td>
					</tr>`
    }
}