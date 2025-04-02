// Google Apps Script URLs (Replace करा)
const attendanceScriptURL =
  "https://script.google.com/macros/s/AKfycbwtA7othm2pX4tKhUbp_Bo2UrAvQ2gGgTCSe81ZmoYXYW_cY4mjcz0r4snd5dQmLkXXKg/exec";
const marksScriptURL =
  "https://script.google.com/macros/s/AKfycbzKzsazc4Dg6GF_lX20FAUgyohmQTBddCweOTIsPD-_H7GWvjsAPzOLWttK9SzSIgI/exec";

// Common function to submit data to Google Sheets
function submitForm(form, scriptURL, list) {
  const formData = new FormData(form);

  fetch(scriptURL, {
    method: "POST",
    body: formData,
  })
    .then((response) => response.text())
    .then((data) => {
      alert("✅ Data Submitted Successfully!");

      // Create a list item for records
      const listItem = document.createElement("li");
      const values = Array.from(formData.values()).join(" - ");
      listItem.textContent = values;

      list.appendChild(listItem);
      form.reset();
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("❌ Error submitting data.");
    });
}

// Handle Attendance Form
const attendanceForm = document.getElementById("attendanceForm");
const attendanceList = document.getElementById("attendanceList");

if (attendanceForm) {
  attendanceForm.addEventListener("submit", function (event) {
    event.preventDefault();
    submitForm(attendanceForm, attendanceScriptURL, attendanceList);
  });
}

// Handle Marks Form
const marksForm = document.getElementById("marksForm");
const marksList = document.getElementById("marksList");

if (marksForm) {
  marksForm.addEventListener("submit", function (event) {
    event.preventDefault();
    submitForm(marksForm, marksScriptURL, marksList);
  });
}
