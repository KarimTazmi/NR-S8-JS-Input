function makeGreeting() {
  function getName() {
    const name = document.querySelector("input").value;
    return name;
  }

  function handleName() {
    const inputHandle = getName();
    console.log(inputHandle);

    const date = new Date();
    const time = date.getHours();

    if (time >= 6 && time < 12) {
      document.querySelector(".heading__input").innerHTML =
        "Goedemorgen, " + inputHandle;
    } else if (time >= 12 && time < 17) {
      document.querySelector(".heading__input").innerHTML =
        "Goedemiddag, " + inputHandle;
    } else if (time >= 17 && time < 24) {
      document.querySelector(".heading__input").innerHTML =
        "Goedenavond, " + inputHandle;
    } else if (time >= 24 && time < 6) {
      document.querySelector(".header__input").innerHTML =
        "Wat laat zeg! Ga eens slapen " + inputHandle;
    }
  }

  const inputHandle = document.querySelector('[name = "name"]');

  inputHandle.addEventListener("blur", handleName);
}

// makeGreeting();
function handleNameInput() {
  // Maak een input in de html met als name attribute name
  const nameInput = document.querySelector('[name="name"]');
  if (!nameInput) return;
  // Plaats een event listener op het event blur
  function handleBlur(e) {
    const currentTime = new Date().getHours();
    let welcomePrefix = "";
    switch (true) {
      case currentTime < 12:
        welcomePrefix = "Goedemorgen";
        break;
      case currentTime > 22:
        welcomePrefix = "Goedenacht";
        break;
      case currentTime > 17:
        welcomePrefix = "Goedeavond";
        break;
      default:
        welcomePrefix = "Goedemiddag";
    }
    // Geef een hallo melding met de ingevulde naam (maak hier voor een h1)
    const welcomeMessage = document.createElement("h1");
    welcomeMessage.textContent = `${welcomePrefix} ${e.target.value}! Leuk dat je er bent.`;
    nameInput.insertAdjacentElement("afterend", welcomeMessage);
  }
  nameInput.addEventListener("blur", handleBlur);
}

handleNameInput();
