const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(event);
  const userName = event.target.elements.email.value.trim();
  const userPassword = event.target.elements.password.value.trim();

  if (userName === "" || userPassword === "") {
    alert("All form fields must be filled in");
  } else {
    const payload = {
      email: userName,
      password: userPassword,
    };
    console.log(payload);
    event.target.reset();
  }
});
