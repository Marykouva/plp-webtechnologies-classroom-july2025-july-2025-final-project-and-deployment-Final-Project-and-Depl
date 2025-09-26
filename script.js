document.getElementById("studentForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let firstname = document.getElementById("firstname").value.trim();
  let surname = document.getElementById("surname").value.trim();
  let studentid = document.getElementById("studentid").value.trim();
  let email = document.getElementById("email").value.trim();
  let phone = document.getElementById("phone").value.trim();
  let message = document.getElementById("formMessage");

  if (!firstname || !surname || !studentid || !email || !phone) {
    message.style.color = "red";
    message.textContent = "Please fill in all fields.";
    return;
  }

  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    message.style.color = "red";
    message.textContent = "Invalid email address.";
    return;
  }

  let phonePattern = /^[0-9]{10,15}$/;
  if (!phone.match(phonePattern)) {
    message.style.color = "red";
    message.textContent = "Invalid phone number (10–15 digits).";
    return;
  }

  message.style.color = "limegreen";
  message.textContent = "Registration successful!";
  this.reset();
});
