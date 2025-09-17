
  const form = document.getElementById('signup-form');
  const emailInput = document.getElementById('email');

  form.addEventListener('submit', function (event) {
    event.preventDefault(); // stops the page from reloading

    const emailValue = emailInput.value.trim();
    console.log("User typed:", emailValue);

    // Example validation
    if (emailValue === "") {
      alert("Email is required!");
    } else if (!emailInput.checkValidity()) {
      alert("Please enter a valid email address!");
    } else {
      alert("Success! " + emailValue);
    }
  });