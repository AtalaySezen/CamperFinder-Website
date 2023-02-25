//Send Mail
let mailInput = document.getElementById("inputEmail");
let nameInput = document.getElementById("inputName");
let messageArea = document.getElementById("inputText");
let buttonSend = document.getElementById("btn-send");
let subject = "CamperFinder Contact";
let formGroup = document.getElementById("form-contact");
let thanksDiv = document.getElementById("thanks-div");
let errorMessage = document.getElementById("error-message");
let errorMail = document.getElementById("error-mail");

//
function validateName() {
  if (nameInput.value.length < 3) {
    errorMessage.classList.remove("none");
    nameInput.classList.add("red-border");
    nameInput.focus();
  } else {
    errorMessage.classList.add("none");
    nameInput.classList.add("green-border");
    return true;
  }
}

//
function checkEmail() {
  var filter =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!filter.test(mailInput.value)) {
    errorMail.textContent = "Lütfen Geçerli Bir E-Posta Adresi Giriniz";
    mailInput.classList.add("red-border");
    errorMail.classList.remove("none");
    mailInput.focus;
    return false;
  } else {
    mailInput.classList.add("green-border");
    errorMail.classList.add("none");
    return true;
  }
}

buttonSend.addEventListener("click", (e) => {
  e.preventDefault();
  checkEmail();
  validateName();
  let selectValue = document.getElementById("selectValue");
  let status = false;
  let subject = "CamperFinder";
  if (validateName() == true && checkEmail() == true) {
    fetch("https://camperfinder.org/mail1/mail", {
      method: "POST",
      body: JSON.stringify({
        nameSurname: nameInput.value,
        subject: subject,
        sender: mailInput.value,
        message: messageArea.value,
        type: selectValue.options[selectValue.selectedIndex].value,
        status: status,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => json()),
      (err) => console.log(err);
    buttonSend.innerHTML = "Teşekkürler";
    setTimeout(() => {
      formGroup.style.display = "none";
      thanksDiv.classList.remove("none");
    }, 500);
  }
});
