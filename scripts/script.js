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
  } else if (time >= 17 && time < 00) {
    document.querySelector(".heading__input").innerHTML =
      "Goedenavond, " + inputHandle;
  }
}
