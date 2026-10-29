window.onload = function() {
  let constrain = 100;
  let mouseOverContainer = document.getElementById("ex1");
  let ex1Layer = document.getElementById("ex1-layer");

  function transforms(x, y, el) {
    let box = el.getBoundingClientRect();
    let calcX = -(y - box.y - (box.height / 2)) / constrain;
    let calcY = (x - box.x - (box.width / 2)) / constrain;


    return "perspective(100px) "
      + "   rotateX("+ calcX +"deg) "
      + "   rotateY("+ calcY +"deg) ";
  }

  function transformElement(el, xyEl) {
    el.style.transform = transforms.apply(null, xyEl);
  }

  function resetElement(el) {
    el.style.transform = "perspective(100px) rotateX(0deg) rotateY(0deg)";
  }

  mouseOverContainer.addEventListener("mousemove", function(e) {
    let target = e.target;
    if (target.tagName === "IMG") {
      let xy = [e.clientX, e.clientY];
      let position = xy.concat([ex1Layer]);
      window.requestAnimationFrame(function() {
        transformElement(ex1Layer, position);
      });
    }
  });

  mouseOverContainer.addEventListener("mouseleave", function() {
    resetElement(ex1Layer);
  });
};
