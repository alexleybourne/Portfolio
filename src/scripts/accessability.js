  document.querySelector("#toggler").addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("toggler").click();
    }
  });

  document.querySelector("#toggler").onfocus = () => document.querySelector("#hamburger").style.border = "1px solid red"
  document.querySelector("#toggler").onblur = () => document.querySelector("#hamburger").style.border = "none"
