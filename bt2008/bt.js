var studentList = [{
    "fullname": "TRAN VAN A",
    "age": 1,
    "address": "Ha Noi",
    "email": "a@gmail.com",
    "phone_number": "123456",
}, {
    "fullname": "TRAN VAN B",
    "age": 1,
    "address": "Ha Noi",
    "email": "na@gmail.com",
    "phone_number": "123456",
}, {
    "fullname": "TRAN VAN C",
    "age": 1,
    "address": "Ha Noi",
    "email": "a@gmail.com",
    "phone_number": "123456",
}]

function showStudents(studentList) {
    var index = 0
    for (std of studentList) {
        document.write(`<tr>
				<td>${++index}</td>
				<td>${std.fullname}</td>
				<td>${std.age}</td>
				<td>${std.address}</td>
                <td>${std.email}</td>
				<td>${std.phone_number}</td>
			</tr>`)
    }
}