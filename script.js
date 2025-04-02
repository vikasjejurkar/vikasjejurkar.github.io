// Handle Attendance Form
const attendanceForm = document.getElementById('attendanceForm');
const attendanceList = document.getElementById('attendanceList');

if (attendanceForm) {
    attendanceForm.addEventListener('submit', function(event) {
        event.preventDefault();  // Prevent page reload

        const studentName = document.getElementById('studentName').value;
        const attendanceDate = document.getElementById('attendanceDate').value;
        const attendanceStatus = document.getElementById('attendanceStatus').value;

        // Create list item for attendance
        const listItem = document.createElement('li');
        listItem.textContent = `${studentName} - ${attendanceDate} - ${attendanceStatus}`;

        // Append to the attendance list
        attendanceList.appendChild(listItem);

        // Clear the form fields
        attendanceForm.reset();
    });
}

// Handle Marks Form
const marksForm = document.getElementById('marksForm');
const marksList = document.getElementById('marksList');

if (marksForm) {
    marksForm.addEventListener('submit', function(event) {
        event.preventDefault();  // Prevent page reload

        const studentNameMarks = document.getElementById('studentNameMarks').value;
        const subject = document.getElementById('subject').value;
        const marksScore = document.getElementById('marksScore').value;

        // Create list item for marks
        const listItem = document.createElement('li');
        listItem.textContent = `${studentNameMarks} - ${subject} - ${marksScore} Marks`;

        // Append to the marks list
        marksList.appendChild(listItem);

        // Clear the form fields
        marksForm.reset();
    });
}
