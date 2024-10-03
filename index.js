const input = document.getElementById("input");
const submit = document.getElementById("submit");
const result = document.getElementById("result");

const data = {
  a: "anchor links",
  div: `block element`,
  span: "inline element",
  ul: `unorderd list`,
  p: `pharagraph`,
  h1: "Main title",
};

function handleValue() {
  let value = input.value.trim().toLowerCase();

  result.textContent = value;

  if (value === "") {
    result.textContent = `please write name`;
  } else {
    let found = false;
    for (let key in data) {
      if (value === key) {
        result.textContent = data[key];
        found = true;
        break;
      }
    }
    if (!found == true) {
      result.textContent = "We don't have information in data";
    }
  }
  input.value = "";
}
