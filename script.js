const digit = 100;

function generateUniqueNumber(exclude) {
  let num;
  do {
    num = Math.floor(Math.random() * digit);
  } while (exclude.includes(num));
  return num;
}
let num1 = Math.floor(Math.random() * digit);
let num2 = Math.floor(Math.random() * digit);
let num3 = Math.floor(Math.random() * digit);

document.querySelectorAll(".guess-input").forEach((input) => {
  input.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, ""); 
  });
});
function game() {
  let h1_a = generateUniqueNumber([num1, num2, num3]);
  let h1_b = generateUniqueNumber([num1, num2, num3]);
  let h1_c = num3;

  let h2_a = generateUniqueNumber([num1, num2, num3]);
  let h2_b = generateUniqueNumber([num1, num2, num3]);
  let h2_c = num2;

  let h3_a = num2;
  let h3_b = num1;
  let h3_c = generateUniqueNumber([num1, num2, num3]);

  let h4_a = generateUniqueNumber([num1, num2, num3]);
  let h4_b = generateUniqueNumber([num1, num2, num3]);
  let h4_c = generateUniqueNumber([num1, num2, num3]);

  let h5_a = generateUniqueNumber([num1, num2, num3]);
  let h5_b = generateUniqueNumber([num1, num2, num3]);
  let h5_c = num1;

  document.getElementById(
    "h1"
  ).innerHTML = `<input type="text" id="b1" value="${h1_a}
        " readonly> <input type="text" id="b1" value="
        ${h1_b}" readonly> <input type="text" id="b1" 
        value="${h1_c}" readonly>  `;

  document.getElementById(
    "h2"
  ).innerHTML = `<input type="text" id="b1" value="${h2_a}
        " readonly> <input type="text" id="b1" 
        value="${h2_b}" readonly> <input type="text" 
        id="b1" value="${h2_c}" readonly>  `;

  document.getElementById(
    "h3"
  ).innerHTML = `<input type="text" id="b1" value="${h3_a}
        " readonly> <input type="text" id="b1" 
        value="${h3_b}" readonly> <input type="text" 
        id="b1" value="${h3_c}" readonly>  `;

  document.getElementById(
    "h4"
  ).innerHTML = `<input type="text" id="b1" value="${h4_a}
        " readonly> <input type="text" id="b1" 
        value="${h4_b}" readonly> <input type="text" 
        id="b1" value="${h4_c}" readonly>  `;

  document.getElementById(
    "h5"
  ).innerHTML = `<input type="text" id="b1" value="${h5_a}
        " readonly> <input type="text" id="b1" 
        value="${h5_b}" readonly> <input type="text" 
        id="b1" value="${h5_c}" readonly>  `;
  document.querySelectorAll(".guess-input").forEach((input) => {
    input.value = "";
  });
}

game();
function myfunc() {
  let a = document.getElementById("b1").value;
  let b = document.getElementById("b2").value;
  let c = document.getElementById("b3").value;

  if (a != "" && b != "" && c != "") {
    if (a == num1 && b == num2 && c == num3) {
      $("#result").html("You Cracked it.");
      $("#result").css("color", "green");
      $("#popupLabel").html("Congo");
      $("#popupLabel").css("color", "green");

      $("#popup").modal("toggle");
      document.querySelectorAll(".close-btn").forEach((button) => {
        button.addEventListener("click", () => {
          restartGame();
        });
      });
    } else {
      $("#result").html("Try once again.");
      $("#result").css("color", "red");
      $("#popupLabel").html("Oops");
      $("#popupLabel").css("color", "red");

      $("#popup").modal("toggle");
    }
  } else {
    $("#result").html("Fill all fields.");
    $("#popupLabel").html("Oh no!");
    $("#popupLabel").css("color", "red");
    $("#popup").modal("toggle");
  }
}

var isLoggedIn = localStorage.getItem("isLoggedIn");

if (isLoggedIn !== "true") {
  window.location.href = "login.html";
  window.alert("Please login first");
}

function logOut() {
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("user");
  window.location.href = "login.html";
}
function restartGame() {
  num1 = Math.floor(Math.random() * digit);
  num2 = Math.floor(Math.random() * digit);
  num3 = Math.floor(Math.random() * digit);
  game();
}
