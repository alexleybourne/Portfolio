document.querySelector("#toggler").addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("toggler").click();
  }
});

document.querySelector("#toggler").addEventListener("click", () => {
  document.querySelector(".menu").classList.toggle("open");
  document.querySelector("#hamburger").style.border = "none";
});

document.querySelector("#toggler").onfocus = () => {
  document.querySelector("#hamburger").style.border = "1px solid black";
};

document.querySelector("#toggler").onblur = () => {
  document.querySelector("#hamburger").style.border = "none";
};
