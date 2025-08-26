const input = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

input.addEventListener("input", (event) => {
  const currentValue = event.target.value.trim();
  nameOutput.textContent = currentValue === "" ? "Anonymous" : currentValue;

  //     if (currentValue !== "") {
  //     nameOutput.textContent = currentValue;
  //     } else {
  //     nameOutput.textContent = "Anonymous";

  //   }
});
