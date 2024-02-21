let students = [];

function addStudent() {
    const studentId = document.getElementById('studentId').value;
    const studentName = document.getElementById('studentName').value;
    const studentDOB = document.getElementById('studentDOB').value;
    const studentClass = document.getElementById('studentClass').value;
    const studentGPA = document.getElementById('studentGPA').value;

    const student = {
        id: studentId,
        name: studentName,
        dob: studentDOB,
        class: studentClass,
        gpa: studentGPA,
    };

    students.push(student);
    renderStudents();
}

function renderStudents() {
    const table = document.getElementById('studentTable');
    table.innerHTML = `
        <tr>
            <th>Mã SV</th>
            <th>Họ và Tên</th>
            <th>Ngày Sinh</th>
            <th>Lớp</th>
            <th>GPA</th>
            <th>Hành Động</th>
        </tr>
    `;

    students.forEach((student, index) => {
        const row = table.insertRow(-1);
        row.insertCell(0).innerHTML = student.id;
        row.insertCell(1).innerHTML = student.name;
        row.insertCell(2).innerHTML = student.dob;
        row.insertCell(3).innerHTML = student.class;
        row.insertCell(4).innerHTML = student.gpa;
        row.insertCell(5).innerHTML = `<button onclick="editStudent(${index})">Sửa</button> <button onclick="deleteStudent(${index})">Xóa</button>`;
    });
}


function deleteStudent(index) {
    students.splice(index, 1);
    renderStudents();
}

function editStudent(index) {
    const student = students[index];

    // Điền thông tin sinh viên vào form
    document.getElementById('studentId').value = student.id;
    document.getElementById('studentName').value = student.name;
    document.getElementById('studentDOB').value = student.dob;
    document.getElementById('studentClass').value = student.class;
    document.getElementById('studentGPA').value = student.gpa;

    // Thay đổi nút "Thêm Sinh Viên" thành "Cập Nhật"
    document.querySelector("form button").innerText = "Cập Nhật";
    document.querySelector("form button").onclick = function() {
        updateStudent(index);
    };
}

function updateStudent(index) {
    const updatedStudent = {
        id: document.getElementById('studentId').value,
        name: document.getElementById('studentName').value,
        dob: document.getElementById('studentDOB').value,
        class: document.getElementById('studentClass').value,
        gpa: document.getElementById('studentGPA').value,
    };

    students[index] = updatedStudent;
    renderStudents();

    // Reset form và button
    document.getElementById('studentForm').reset();
    document.querySelector("form button").innerText = "Thêm Sinh Viên";
    document.querySelector("form button").onclick = addStudent;
}
