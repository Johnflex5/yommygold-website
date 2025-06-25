// Contact form submission
document.getElementById("contact-form").addEventListener("submit", function (event) {
  event.preventDefault();

  const name = this.elements[0].value.trim();
  const email = this.elements[1].value.trim();
  const message = this.elements[2].value.trim();

  if (name && email && message) {
    alert("Thank you for contacting YommyGold. We'll get back to you shortly!");
    this.reset();
  } else {
    alert("Please fill in all required fields.");
  }
});

// Booking form submission
document.getElementById("booking-form").addEventListener("submit", function (event) {
  event.preventDefault();

  const fullName = this.elements[0].value.trim();
  const email = this.elements[1].value.trim();
  const phone = this.elements[2].value.trim();
  const projectType = this.elements[3].value.trim();
  const projectDesc = this.elements[4].value.trim();

  if (fullName && email && phone && projectType) {
    alert("Thank you for booking with YommyGold! We will reach out to you shortly.");
    this.reset();
  } else {
    alert("Please complete all required booking fields.");
  }
});
