// Real-time validation
["input", "blur"].forEach((event) => {
  form.querySelectorAll("input").forEach((input) => {
    input.addEventListener(event, validateField);
  });
});

function validateField(e) {
  const field = e.target;
  const value = field.value.trim();
  let valid = true;
  let feedback = "";

  // Remove previous classes
  field.classList.remove("is-valid", "is-invalid");

  // First Name / Last Name
  if (field.name === "firstName" || field.name === "lastName") {
    if (value.length < 2) {
      valid = false;
      feedback = "Minimum 2 characters required.";
    } else if (!/^[A-Za-z\s'-]+$/.test(value)) {
      valid = false;
      feedback = "Only letters, spaces, hyphens, and apostrophes allowed.";
    }
  }

  // Email
  if (field.name === "email") {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      valid = false;
      feedback = "Please enter a valid email address.";
    }
  }

  // Password
  if (field.name === "password") {
    if (value.length < 8) {
      valid = false;
      feedback = "Password must be at least 8 characters.";
    }
    updatePasswordStrength(value);
  }

  // Confirm Password
  if (field.name === "confirmPassword") {
    if (value !== password.value) {
      valid = false;
      feedback = "Passwords do not match.";
    } else if (value.length > 0) {
      field.classList.add("is-valid");
    }
  }

  // Apply feedback
  const feedbackEl =
    field.parentElement.querySelector(".invalid-feedback") ||
    field.parentElement.querySelector(".valid-feedback");

  if (!valid && value.length > 0) {
    field.classList.add("is-invalid");
    if (feedbackEl && feedbackEl.classList.contains("invalid-feedback")) {
      feedbackEl.textContent = feedback;
    }
  } else if (value.length > 0 && field.name !== "confirmPassword") {
    field.classList.add("is-valid");
  }
}

// Password Strength Meter
function updatePasswordStrength(pwd) {
  let strength = 0;
  strengthBar.className = "password-strength mt-2";

  if (pwd.length >= 8) strength++;
  if (/[a-z]/.test(pwd) && /[A-Z]/.test(pwd)) strength++;
  if (/\d/.test(pwd)) strength++;
  if (/[^A-Za-z0-9]/.test(pwd)) strength++;

  switch (strength) {
    case 1:
      strengthBar.classList.add("strength-weak");
      break;
    case 2:
      strengthBar.classList.add("strength-fair");
      break;
    case 3:
      strengthBar.classList.add("strength-good");
      break;
    case 4:
      strengthBar.classList.add("strength-strong");
      break;
    default:
      strengthBar.style.width = "0";
  }
}

// Form Submit
form.addEventListener("submit", function (e) {
  e.preventDefault();

  let isValid = true;
  form.querySelectorAll("input[required]").forEach((input) => {
    if (!input.value.trim() || input.classList.contains("is-invalid")) {
      isValid = false;
      input.classList.add("is-invalid");
    }
  });

  if (password.value !== confirmPassword.value) {
    isValid = false;
    confirmPassword.classList.add("is-invalid");
  }

  if (isValid) {
    alert("Registration successful! 🎉");
    // Here you would send data to server
    // form.submit();
  } else {
    alert("Please fix the errors in the form.");
  }
});
