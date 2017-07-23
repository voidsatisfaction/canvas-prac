import './style.css';

(function() {
  const drawer = {
    makeCircle(x,y,r) {
      context.beginPath();

      context.arc(x, y, r, 0, Math.PI/0.5);
      context.fill();
      context.closePath();
    },

    createStyleCircle() {
      context.beginPath();
      context.arc(120, 20, 10, 0, Math.PI*2);
      context.fillStyle = 'rebeccaPurple';
      context.fill();
      context.closePath();

      context.beginPath();
      context.arc(20, 120, 10, 0, Math.PI*2);
      context.lineWidth = 10;
      context.strokeStyle = 'pink';
      context.stroke();
      context.closePath();
    },

    howtoDrawCircle() {
      var i = 0;
      function loopIt() {
        if (i++ < Math.PI*2) {
          drawPurpleCircle(i);
        } else {
          i = 0;
          context.clearRect(0, 0, 500, 500);
          setTimeout(loopIt, 400);
        }
      }
      function drawPurpleCircle(i) {
        context.beginPath();
        context.arc(100, 70, 50, 0, i);
        context.fillStyle = 'pink';
        context.fill();
        context.closePath();
        setTimeout(loopIt, 400);
      }
      loopIt();
    },

    pieChart() {
      context.beginPath();
      context.moveTo(100, 70); // move to this spot
      context.lineTo(100, 20); // draw vertical line
      context.arcTo(150, 20, 150, 70, 50);
      context.lineTo(100, 70); // draw a horizontal line
      context.fill();
      context.closePath();
    },

    trackClickLocation() {
      context.fillStyle = 'pink';
      context.fillRect(0, 0, canvas.width, canvas.height);

      const getCoords = (event) => {
        const container = canvas.getBoundingClientRect();
        const x = (event.clientX - container.left) - container.width/2;
        const y = (event.clientY - container.top) - container.height/2;

        coords.textContent = `${x}, ${y}`;
      };

      canvas.addEventListener('click', getCoords);
    }
  };

  const canvas = document.querySelector('#canvas');
  const context = canvas.getContext('2d');
  const coords = document.querySelector('.display-coords');

  drawer.makeCircle(50,50,20);
  drawer.makeCircle(120,50,20);
  drawer.createStyleCircle();
  // drawer.howtoDrawCircle();
  drawer.pieChart();
  drawer.trackClickLocation();
})();