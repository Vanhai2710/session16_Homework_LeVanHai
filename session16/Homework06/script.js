document.getElementById('createButton').addEventListener('click', function() {
    let studentId = document.getElementById('studentId').value;
    let studentName = document.getElementById('studentName').value;
    let age = document.getElementById('age').value;
    let phone = document.getElementById('phone').value;
    let email = document.getElementById('email').value;

    let studentInfoDiv = document.getElementById('studentInfo');
    studentInfoDiv.innerHTML = '';

    if (studentId.length !== 6) {
        studentInfoDiv.textContent = 'Student ID must be 6 characters long.';
        return;
    }

    if (studentName.trim() === '') {
        studentInfoDiv.textContent = 'Please enter student name.';
        return;
    }

    if (isNaN(age) || parseInt(age) < 18) {
        studentInfoDiv.textContent = 'Age must be a number greater than or equal to 18.';
        return;
    }

    let phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
        studentInfoDiv.textContent = 'Phone number must be a valid Vietnamese phone number (10 digits).';
        return;
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        studentInfoDiv.textContent = 'Email must be a valid email address.';
        return;
    }

    let studentInfo = `
        <p>Student ID: ${studentId}</p>
        <p>Name: ${studentName}</p>
        <p>Age: ${age}</p>
        <p>Phone: ${phone}</p>
        <p>Email: ${email}</p>
    `;
    studentInfoDiv.innerHTML = studentInfo;
});
