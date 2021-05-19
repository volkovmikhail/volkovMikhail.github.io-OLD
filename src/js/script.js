//parallax
let bg = document.querySelectorAll(".parallax");

window.addEventListener("mousemove", function (e) {
  let x = e.clientX / window.innerWidth;
  let y = e.clientY / window.innerHeight;
  bg.forEach((element) => {
    element.style.transform =
      "translate(-" + x * 100 + "px, -" + y * 100 + "px)";
  });
});
