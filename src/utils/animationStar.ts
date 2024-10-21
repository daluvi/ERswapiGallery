type Star = {x:number, y: number, z: number}

const initialStarts = () => {
  const canvas: HTMLCanvasElement = document.getElementById("animationStar") as HTMLCanvasElement;
  const ctx = canvas.getContext("2d");

  canvas.width = window.outerWidth;
  canvas.height = window.outerHeight;

  const numStars = 400;
  const stars: Star[] = [];
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;

  for (let i = 0; i < numStars; i++) {
    stars.push({
      x: Math.random() * canvas.width - centerX,
      y: Math.random() * canvas.height - centerY,
      z: Math.random() * canvas.width
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "white";
    for (let i = 0; i < stars.length; i++) {
      const star = stars[i];
      const x = centerX + (star.x / star.z) * canvas.width;
      const y = centerY + (star.y / star.z) * canvas.height;

      const size = Math.abs(1.5 * (1 - star.z / canvas.width));
      ctx.beginPath();

      ctx.arc(x, y, size, 0, Math.PI * 2, false);
      ctx.fill();

      star.z -= 2;

      if (star.z <= 0) {
        star.z = canvas.width;
        star.x = Math.random() * canvas.width - centerX;
        star.y = Math.random() * canvas.height - centerY;
      }
    }

    requestAnimationFrame(draw);
  }

  draw();
};

let ok_to_resize = true;
const listener = () => {
  if (ok_to_resize){
    ok_to_resize = false;
    setTimeout(function(){
      ok_to_resize = true;
      initialStarts();
    }, 100);
  }
};

window.addEventListener("resize", listener);
window.addEventListener('load', initialStarts);