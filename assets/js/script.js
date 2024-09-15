function convert() {
  const celsius = document.getElementById("celsius").value;
  const fahrenheit = (celsius * 9) / 5 + 32;

  let condition = "";
  if (fahrenheit < 50) {
    condition = "Cold";
  } else if (fahrenheit >= 50 && fahrenheit <= 77) {
    condition = "Okay";
  } else {
    condition = "Hot";
  }

  document.getElementById(
    "result"
  ).innerHTML = `Temperature in Fahrenheit: ${fahrenheit}°F - It is ${condition}.`;
  console.log(
    `Temperature in Fahrenheit: ${fahrenheit}°F - It is ${condition}.`
  );
}
