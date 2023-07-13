const form = document.querySelector(".needs-validation");
const input = document.querySelector("input");
const email = document.querySelector(".email");
const successContainer = document.querySelector(".success-message");
const buttonClose = document.querySelector(".close-success-message-btn");
const main = document.querySelector(".main");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  console.log(form.checkValidity());
  if (!form.checkValidity()) {
    form.classList.add("was-validated");
  } else {
    email.textContent = input.value;
    successContainer.classList.toggle("d-none");
    main.classList.toggle("d-md-none");
  }
});

buttonClose.addEventListener("click", () => {
  successContainer.classList.toggle("d-none");
  main.classList.toggle("d-md-none");
});

console.log("^[w-.]+@([w-]+.)+[w-]{2,4}$" === "^[w-.]+@([w-]+.)+[w-]{2,4}$");
